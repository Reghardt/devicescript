"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6028],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(25773),o=(n(27378),n(35318));const i={sidebar_position:3.1,hide_table_of_contents:!0},s="Button LED",a={unversionedId:"samples/button-led",id:"samples/button-led",title:"Button LED",description:"This sample toggles a LED on/off by listening on the down events emitted by a button.",source:"@site/docs/samples/button-led.mdx",sourceDirName:"samples",slug:"/samples/button-led",permalink:"/devicescript/samples/button-led",draft:!1,tags:[],version:"current",sidebarPosition:3.1,frontMatter:{sidebar_position:3.1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Double Blinky",permalink:"/devicescript/samples/double-blinky"},next:{title:"Dimmer",permalink:"/devicescript/samples/dimmer"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"button-led"},"Button LED"),(0,o.kt)("p",null,"This sample toggles a LED on/off by listening on the ",(0,o.kt)("inlineCode",{parentName:"p"},"down")," events emitted by a button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { pins } from "@dsboard/esp32c3_bare"\nimport { startLightBulb, startButton } from "@devicescript/servers"\n\nconst led = startLightBulb({\n    pin: pins.P2,\n})\nconst button = startButton({\n    pin: pins.P5,\n})\nconsole.log(`press button to toggle light`)\n// listen for button down events\nbutton.down.subscribe(async () => {\n    // toggle light on/off\n    console.log(`toggle`)\n    await led.toggle()\n})\n')),(0,o.kt)("iframe",{style:{width:"100%",minHeight:"28rem",borderRadius:"0.5rem",padding:".5rem",border:"solid 1px #666"},src:"https://wokwi.com/projects/369061499438874625"}))}d.isMDXComponent=!0}}]);