(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2903],{3905:function(e,n,r){"use strict";r.r(n),r.d(n,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var t=r(2784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),m=function(e){return function(n){var r=d(n.components);return t.createElement(e,o({},n,{components:r}))}},d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,f=m["".concat(i,".").concat(c)]||m[c]||p[c]||o;return r?t.createElement(f,s(s({ref:n},l),{},{components:r})):t.createElement(f,s({ref:n},l))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4293:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var t=r(2122),a=r(9756),o=(r(2784),r(3905)),i={id:"random",title:"random()"},s={unversionedId:"random",id:"random",isDocsHomePage:!1,title:"random()",description:"The random() API will give your deterministic pseudorandom values. Unlike the Math.random() function, Remotions function takes in a seed which can be a number or a string. If the seed is the same, the output is always the same.",source:"@site/docs/random.md",sourceDirName:".",slug:"/random",permalink:"/docs/random",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/random.md",version:"current",frontMatter:{id:"random",title:"random()"},sidebar:"someSidebar",previous:{title:"measureSpring()",permalink:"/docs/measure-spring"},next:{title:"registerRoot()",permalink:"/docs/register-root"}},u=[{value:"Use cases",id:"use-cases",children:[]},{value:"Accessing true randomness",id:"accessing-true-randomness",children:[]},{value:"See also",id:"see-also",children:[]}],l={toc:u};function m(e){var n=e.components,r=(0,a.default)(e,["components"]);return(0,o.mdx)("wrapper",(0,t.default)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"random()")," API will give your deterministic pseudorandom values. Unlike the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Math.random()")," function, Remotions function takes in a seed which can be a ",(0,o.mdx)("inlineCode",{parentName:"p"},"number")," or a ",(0,o.mdx)("inlineCode",{parentName:"p"},"string"),". If the seed is the same, the output is always the same."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"const rand = random(1); // 0.07301638228818774\nconst rand = random(1); // still 0.07301638228818774\n\n\nconst randomCoordinates = new Array(10).fill(true).map((a, i) => {\n  return {\n    x: random(`random-x-${i}`),\n    y: random(`random--${i}`),\n  };\n}); // will always be [{x: 0.2887063352391124, y: 0.18660089606419206}, ...]\n\nrandom() // Error: random() argument must be a number or a string\n")),(0,o.mdx)("h2",{id:"use-cases"},"Use cases"),(0,o.mdx)("p",null,"Randomness can be used to create to create interesting visualizations, such as particle effect for example. Since Remotion renders a video on multiple threads and opens the website multiple times, the value returned by a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Math.random()")," call will not be the same across multiple threads, making it hard to create animations based on randomness. Using this API will ensure that the pseudorandom number will be the same always."),(0,o.mdx)("h2",{id:"accessing-true-randomness"},"Accessing true randomness"),(0,o.mdx)("p",null,"Calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"Math.random()")," results in an ESLint warning in Remotion since often it leads to bugs in rendering. If you are sure you want a true random number, and want to bypass this message without adding an ignore comment, use ",(0,o.mdx)("inlineCode",{parentName:"p"},"random(null)")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"// Passing null will result in a different value every time.\nrandom(null) === random(null) // false\n")),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/using-randomness"},"Using randomness"))))}m.isMDXComponent=!0}}]);