(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[547],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1662:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(9603),i=n(120),s=(n(7378),n(5318)),o=["components"],a={title:"Multiple Garfish Instances",slug:"/issues/multipleApp",order:2},u=void 0,c={unversionedId:"issues/multipleApp",id:"issues/multipleApp",isDocsHomePage:!1,title:"Multiple Garfish Instances",description:"Non-Nested Scenarios",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/issues/multipleApp.md",sourceDirName:"issues",slug:"/issues/multipleApp",permalink:"/en/issues/multipleApp",editUrl:"https://github.com/bytedance/garfish/docs/issues/multipleApp.md",version:"current",lastUpdatedBy:"zhoushaw",lastUpdatedAt:1627367664,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Multiple Garfish Instances",slug:"/issues/multipleApp",order:2},sidebar:"issues",previous:{title:"Sub-application error report",permalink:"/en/issues"},next:{title:"Old application transformation",permalink:"/en/issues/oldApp"}},l=[{value:"Non-Nested Scenarios",id:"non-nested-scenarios",children:[]},{value:"Nested scenarios",id:"nested-scenarios",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"non-nested-scenarios"},"Non-Nested Scenarios"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In non-nested scenarios, sub-applications should not introduce Garfish packages in the installation and import them for use."),(0,s.kt)("li",{parentName:"ul"},"If you want to use the Garfish package in a micro front-end scenario, you can use the interface via ",(0,s.kt)("inlineCode",{parentName:"li"},"window.Garfish")," when you are in the micro front-end environment.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"if (window.__GARFISH__) {\n  window.Garfish.xx;\n}\n")),(0,s.kt)("h2",{id:"nested-scenarios"},"Nested scenarios"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Garfish is currently designed internally to support nested scenarios, so if the business has a claim on this piece you can use it to help us advance our capabilities in nested scenarios together.")))}d.isMDXComponent=!0}}]);