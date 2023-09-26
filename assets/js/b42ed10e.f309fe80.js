"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2469],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),b=n,h=c["".concat(p,".").concat(b)]||c[b]||d[b]||a;return r?i.createElement(h,l(l({ref:t},u),{},{components:r})):i.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}b.displayName="MDXCreateElement"},17335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=r(25773),n=(r(27378),r(35318));const a={description:"Mounts a light bulb server",title:"Light bulb"},l="Light bulb",o={unversionedId:"api/drivers/lightbulb",id:"api/drivers/lightbulb",title:"Light bulb",description:"Mounts a light bulb server",source:"@site/docs/api/drivers/lightbulb.md",sourceDirName:"api/drivers",slug:"/api/drivers/lightbulb",permalink:"/devicescript/api/drivers/lightbulb",draft:!1,tags:[],version:"current",frontMatter:{description:"Mounts a light bulb server",title:"Light bulb"},sidebar:"tutorialSidebar",previous:{title:"HID Mouse",permalink:"/devicescript/api/drivers/hidmouse"},next:{title:"Light Level",permalink:"/devicescript/api/drivers/lightlevel"}},p={},s=[{value:"Options",id:"options",level:2},{value:"pin",id:"pin",level:3},{value:"dimmable",id:"dimmable",level:3},{value:"activeLow",id:"activelow",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"light-bulb"},"Light bulb"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"startLightBulb")," function starts a ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/services/lightbulb"},"light bulb")," server on the device\nand returns a ",(0,n.kt)("a",{parentName:"p",href:"/api/clients/lightbulb"},"client"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startLightBulb } from "@devicescript/servers"\n\nconst bulb = startLightBulb({\n    pin: gpio(20),\n    dimmable: true,\n})\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For the onboard LED, use ",(0,n.kt)("a",{parentName:"p",href:"/developer/status-light"},"setStatusLight")," instead.")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("h3",{id:"pin"},"pin"),(0,n.kt)("p",null,"The pin hardware identifier on which to mount the light bulb."),(0,n.kt)("h3",{id:"dimmable"},"dimmable"),(0,n.kt)("p",null,"When set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," you can set the intensity of the light (it will use a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pulse-width_modulation"},"PWM")," signal at a few kHz)."),(0,n.kt)("h3",{id:"activelow"},"activeLow"),(0,n.kt)("p",null,"Indicates that the light is on when the pin ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),".\nBy default, the light is on when the pin is ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"."))}d.isMDXComponent=!0}}]);