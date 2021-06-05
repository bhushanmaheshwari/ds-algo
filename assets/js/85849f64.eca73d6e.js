(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[587],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),f=a,d=c["".concat(u,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9444:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={sidebar_position:2},s={unversionedId:"patterns/two-pointers",id:"patterns/two-pointers",isDocsHomePage:!1,title:"Two Pointer Pattern",description:"In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the contiguous subarrays (or sub lists) of a given size.",source:"@site/docs/patterns/two-pointers.md",sourceDirName:"patterns",slug:"/patterns/two-pointers",permalink:"/ds-algo/docs/patterns/two-pointers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/patterns/two-pointers.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sliding Window Pattern",permalink:"/ds-algo/docs/patterns/sliding-window-pattern"},next:{title:"Fast & Slow Pointers",permalink:"/ds-algo/docs/patterns/fast-slow-pointers"}},u=[{value:"Maximum Sum Subarray of Size K (easy)",id:"maximum-sum-subarray-of-size-k-easy",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all ",(0,o.kt)("inlineCode",{parentName:"p"},"the contiguous subarrays (or sub lists) of a given size. ")," "),(0,o.kt)("p",null,"For example, take a look at this problem:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Given an array, find the average of all contiguous subarrays of size \u2018K\u2019 in it")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Input : [2, 1, 5, 1, 3, 2], k=3")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Subarray with maximum sum is [5, 1, 3]")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Output : 9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Input : [2, 3, 4, 1, 5], k=2")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Subarray with maximum sum is [3, 4]")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Output : 7"))),(0,o.kt)("h2",{id:"maximum-sum-subarray-of-size-k-easy"},"Maximum Sum Subarray of Size K (easy)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="find a maximum sum subarray for size k"',title:'"find',a:!0,maximum:!0,sum:!0,subarray:!0,for:!0,size:!0,'k"':!0},"function max_sub_array_of_size_k(k, arr) {\n  let maxSum = 0,\n    windowSum = 0;\n\n  for (i = 0; i < arr.length - k + 1; i++) {\n    windowSum = 0;\n    for (j = i; j < i + k; j++) {\n      windowSum += arr[j];\n    }\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}\n\nconsole.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);\nconsole.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);\n")))}m.isMDXComponent=!0}}]);