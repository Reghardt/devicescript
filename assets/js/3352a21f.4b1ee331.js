"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4050],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},31694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const i={description:"Mounts a relay server",title:"Relay"},o="Relay",l={unversionedId:"api/drivers/relay",id:"api/drivers/relay",title:"Relay",description:"Mounts a relay server",source:"@site/docs/api/drivers/relay.md",sourceDirName:"api/drivers",slug:"/api/drivers/relay",permalink:"/devicescript/api/drivers/relay",draft:!1,tags:[],version:"current",frontMatter:{description:"Mounts a relay server",title:"Relay"},sidebar:"tutorialSidebar",previous:{title:"Reflected Light",permalink:"/devicescript/api/drivers/reflectedlight"},next:{title:"Rotary Encoder",permalink:"/devicescript/api/drivers/rotaryencoder"}},p={},s=[{value:"Options",id:"options",level:2},{value:"pin",id:"pin",level:3},{value:"options",id:"options-1",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relay"},"Relay"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"startRelay")," function starts a ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/services/relay"},"relay")," server on the device\nand returns a ",(0,a.kt)("a",{parentName:"p",href:"/api/clients/relay"},"client"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startRelay } from "@devicescript/servers"\n\nconst relay = startRelay({\n    pin: gpio(2),\n})\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/services/_base/"},"service instance name")," is automatically set to the variable name. In this example, it is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"relay"),"."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"pin"},"pin"),(0,a.kt)("p",null,"The pin hardware identifier on which to mount the relay."),(0,a.kt)("h3",{id:"options-1"},"options"),(0,a.kt)("p",null,"Other configuration options are available in the options parameter."))}d.isMDXComponent=!0}}]);