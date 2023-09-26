"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3297],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,g=u["".concat(s,".").concat(d)]||u[d]||v[d]||l;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(25773),i=(r(27378),r(35318));const l={description:"Mounts a light level sensor",title:"Light Level"},a="Light Level",o={unversionedId:"api/drivers/lightlevel",id:"api/drivers/lightlevel",title:"Light Level",description:"Mounts a light level sensor",source:"@site/docs/api/drivers/lightlevel.md",sourceDirName:"api/drivers",slug:"/api/drivers/lightlevel",permalink:"/devicescript/api/drivers/lightlevel",draft:!1,tags:[],version:"current",frontMatter:{description:"Mounts a light level sensor",title:"Light Level"},sidebar:"tutorialSidebar",previous:{title:"Light bulb",permalink:"/devicescript/api/drivers/lightbulb"},next:{title:"LTR390",permalink:"/devicescript/api/drivers/ltr390"}},s={},p=[],c={toc:p},u="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"light-level"},"Light Level"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"startLightLevel")," starts a simple analog sensor server that models a light level sensor\nand returns a ",(0,i.kt)("a",{parentName:"p",href:"/api/clients/lightlevel"},"client")," bound to the server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please refer to the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/developer/drivers/analog/"},"analog documentation"))," for details.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startLightLevel } from "@devicescript/servers"\n\nconst sensor = startLightLevel({\n    pin: ds.gpio(3),\n})\nsensor.reading.subscribe(light => console.data({ light }))\n')))}v.isMDXComponent=!0}}]);