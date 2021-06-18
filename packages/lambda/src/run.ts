import {CliInternals} from '@remotion/cli';
import {writeFileSync} from 'fs';
import path from 'path';
import {deployLambda} from './api/deploy-lambda';
import {deployProject} from './api/deploy-project';
import {getOrCreateBucket} from './api/get-or-create-bucket';
import {getRenderProgress} from './api/get-render-progress';
import {cleanupLambdas, getRemotionLambdas} from './cleanup/cleanup-lambdas';
import {getRemotionS3Buckets} from './cleanup/s3-buckets';
import {lambdaLs, lambdaReadFile} from './functions/helpers/io';
import {lambdaClient, s3Client} from './shared/aws-clients';
import {callLambda} from './shared/call-lambda';
import {
	getSitesKey,
	LambdaRoutines,
	REMOTION_BUCKET_PREFIX,
	timingProfileName,
} from './shared/constants';
import {makeS3Url} from './shared/make-s3-url';
import {sleep} from './shared/sleep';
import {streamToString} from './shared/stream-to-string';

const DEPLOY = false;

const getFnName = async (): Promise<{
	functionName: string;
	bucketUrl: string;
	compositionName: string;
}> => {
	const bucketName = await getOrCreateBucket();
	if (DEPLOY) {
		await cleanupLambdas({lambdaClient});
		// await cleanUpBuckets({s3client: s3Client});

		const {functionName} = await deployLambda();

		const {url} = await deployProject({
			entryPoint: path.join(__dirname, '..', 'remotion-project', 'index.ts'),
			bucketName,
		});

		return {functionName, bucketUrl: url, compositionName: 'my-video'};
	}

	const lambdas = await getRemotionLambdas(lambdaClient);
	const {remotionBuckets} = await getRemotionS3Buckets(s3Client);
	const websiteBuckets = remotionBuckets.filter((b) =>
		(b.Name as string).startsWith(REMOTION_BUCKET_PREFIX)
	);
	const prefix = getSitesKey('');
	const firstBucket = await lambdaLs({
		bucketName: websiteBuckets[0].Name as string,
		prefix,
	});
	const firstSite = firstBucket.find(() => true);
	return {
		functionName: lambdas[0].FunctionName as string,
		bucketUrl: makeS3Url(
			websiteBuckets[0].Name as string,
			firstSite?.Key?.match(/(sites\/.*)\//)?.[1] as string
		),
		compositionName: 'Main',
	};
};

CliInternals.xns(async () => {
	const {functionName, bucketUrl, compositionName} = await getFnName();
	const res = await callLambda({
		functionName,
		type: LambdaRoutines.start,
		payload: {
			chunkSize: 20,
			composition: compositionName,
			serveUrl: bucketUrl,
			inputProps: {},
			codec: 'h264-mkv',
			imageFormat: 'jpeg',
			crf: undefined,
		},
	});
	console.log(bucketUrl);
	for (let i = 0; i < 3000; i++) {
		await sleep(1000);
		const status = await getRenderProgress({
			functionName,
			bucketName: res.bucketName,
			renderId: res.renderId,
		});
		console.log(status);
		if (status.done) {
			console.log('Done! ' + res.bucketName);
			break;
		}
	}

	const logs = await lambdaLs({
		bucketName: res.bucketName,
		prefix: timingProfileName(res.renderId),
	});

	for (const log of logs) {
		const content = await lambdaReadFile({
			bucketName: res.bucketName,
			key: log.Key as string,
		});
		writeFileSync(log.Key as string, await streamToString(content));
	}
});