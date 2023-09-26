"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5032],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(25773),i=(n(27378),n(35318));const a={pagination_prev:null,pagination_next:null,description:"DeviceScript client for DMX service"},l="Dmx",o={unversionedId:"api/clients/dmx",id:"api/clients/dmx",title:"Dmx",description:"DeviceScript client for DMX service",source:"@site/docs/api/clients/dmx.md",sourceDirName:"api/clients",slug:"/api/clients/dmx",permalink:"/devicescript/api/clients/dmx",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for DMX service"},sidebar:"tutorialSidebar"},p={},c=[{value:"Commands",id:"commands",level:2},{value:"send",id:"send",level:3},{value:"Registers",id:"registers",level:2},{value:"enabled",id:"rw:enabled",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dmx"},"Dmx"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,i.kt)("p",null,"A service that can send DMX512-A packets with limited size. This service is designed to allow tinkering with a few DMX devices, but only allows 235 channels. More about DMX at ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DMX512"},"https://en.wikipedia.org/wiki/DMX512"),"."),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Dmx } from "@devicescript/core"\n\nconst dmx = new Dmx()\n')),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"send"},"send"),(0,i.kt)("p",null,"Send a DMX packet, up to 236bytes long, including the start code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"dmx.send(channels: Buffer): Promise<void>\n")),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("p",null),(0,i.kt)("h3",{id:"rw:enabled"},"enabled"),(0,i.kt)("p",null,"Determines if the DMX bridge is active."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read and write"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Dmx } from "@devicescript/core"\n\nconst dmx = new Dmx()\n// ...\nconst value = await dmx.enabled.read()\nawait dmx.enabled.write(value)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"track incoming values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Dmx } from "@devicescript/core"\n\nconst dmx = new Dmx()\n// ...\ndmx.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("p",null))}m.isMDXComponent=!0}}]);