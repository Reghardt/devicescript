"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9859],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const i={},o="AHT20",p={unversionedId:"api/drivers/aht20",id:"api/drivers/aht20",title:"AHT20",description:"Driver for AHT20 temperature/humidity sensor at I2C address 0x38.",source:"@site/docs/api/drivers/aht20.mdx",sourceDirName:"api/drivers",slug:"/api/drivers/aht20",permalink:"/devicescript/api/drivers/aht20",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accelerometer",permalink:"/devicescript/api/drivers/accelerometer"},next:{title:"BME680",permalink:"/devicescript/api/drivers/bme680"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2}],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aht20"},"AHT20"),(0,a.kt)("p",null,"Driver for AHT20 temperature/humidity sensor at I2C address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x38"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Services: ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/temperature/"},"temperature"),", ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/humidity/"},"humidity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://asairsensors.com/wp-content/uploads/2021/09/Data-Sheet-AHT20-Humidity-and-Temperature-Sensor-ASAIR-V1.0.03.pdf"},"Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/blob/main/packages/drivers/src/aht20.ts"},"Source"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { startAHT20 } from "@devicescript/drivers"\nconst { temperature, humidity } = await startAHT20()\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure I2C throught the ",(0,a.kt)("a",{parentName:"li",href:"/developer/board-configuration"},"board configuration"))))}m.isMDXComponent=!0}}]);