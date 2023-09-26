"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6512],{35318:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(c,".").concat(d)]||u[d]||v[d]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30914:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(25773),o=(t(27378),t(35318));const a={description:"Mounts a servo",title:"Servo"},i="Servo",s={unversionedId:"api/drivers/servo",id:"api/drivers/servo",title:"Servo",description:"Mounts a servo",source:"@site/docs/api/drivers/servo.md",sourceDirName:"api/drivers",slug:"/api/drivers/servo",permalink:"/devicescript/api/drivers/servo",draft:!1,tags:[],version:"current",frontMatter:{description:"Mounts a servo",title:"Servo"},sidebar:"tutorialSidebar",previous:{title:"Rotary Encoder",permalink:"/devicescript/api/drivers/rotaryencoder"},next:{title:"SHT30",permalink:"/devicescript/api/drivers/sht30"}},c={},p=[],l={toc:p},u="wrapper";function v(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"servo"},"Servo"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"startServo")," function starts on-board server for servo,\nand returns a ",(0,o.kt)("a",{parentName:"p",href:"/api/clients/servo"},"client")," bound to the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio, delay } from "@devicescript/core"\nimport { startServo } from "@devicescript/servers"\n\nconst sensor = startServo({\n    pin: ds.gpio(3),\n})\nsetInterval(async () => {\n    await sensor.angle.write(-45)\n    await delay(1000)\n    await sensor.angle.write(45)\n}, 1000)\n')))}v.isMDXComponent=!0}}]);