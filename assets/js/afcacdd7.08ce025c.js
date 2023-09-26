"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3154],{35318:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?n.createElement(h,s(s({ref:r},p),{},{components:t})):n.createElement(h,s({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87676:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(25773),a=(t(27378),t(35318));const i={sidebar_position:2,title:"Display"},s="Display",o={unversionedId:"developer/graphics/display",id:"developer/graphics/display",title:"Display",description:"The Display",source:"@site/docs/developer/graphics/display.mdx",sourceDirName:"developer/graphics",slug:"/developer/graphics/display",permalink:"/devicescript/developer/graphics/display",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Display"},sidebar:"tutorialSidebar",previous:{title:"Image",permalink:"/devicescript/developer/graphics/image"},next:{title:"JSX/TSX",permalink:"/devicescript/developer/jsx"}},c={},l=[{value:"Indexed screen",id:"indexed-screen",level:2},{value:"Character screen",id:"character-screen",level:2},{value:"Dot matrix",id:"dot-matrix",level:2}],p={toc:l},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display"},"Display"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript/blob/main/packages/graphics/src/display.ts"},"Display"),"\ninterface provides an abstraction over a small screen. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Display")," interface is implemented\nfor various hardware peripherical and can be used with various services."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/drivers/ssd1306"},"SSD1306"),", OLED monochrome, I2C"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/drivers/st7789"},"ST7789, ST7735, ILI9163"),", LCD color, SPI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/drivers/uc8151"},"UC8151"),", eInk monochrome, SPI")),(0,a.kt)("admonition",{title:"I8080 not supported",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The drivers use SPI or I2C. The parralel interface (I8080) is not supported at the moment.")),(0,a.kt)("h2",{id:"indexed-screen"},"Indexed screen"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndexedScreen")," returns a local client for the screen service.\nMost importantly it wraps the native driver to enable simulation of the screen\non the simulated device (simulation does not work on hardware device as the communication channel is too slow)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/blob/main/packages/drivers/src/indexedscreen.ts"},"Source"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { SSD1306Driver, startIndexedScreen } from "@devicescript/drivers"\n\nconst display = await startIndexedScreen(\n    // implements Display\n    new SSD1306Driver({ width: 128, height: 64, devAddr: 0x3c })\n)\ndisplay.image.print(`Hello world!`, 3, 10)\nawait display.show()\n')),(0,a.kt)("h2",{id:"character-screen"},"Character screen"),(0,a.kt)("p",null,"The user sets a message on the character screen and it will be rendered on the screen.\nUsing the service is compatible with the simulator."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service: ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/characterscreen/"},"character screen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/blob/main/packages/drivers/src/characterscreen.ts"},"Source"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { SSD1306Driver, startCharacterScreen } from "@devicescript/drivers"\n\nconst screen = await startCharacterScreen(\n    new SSD1306Driver({ width: 128, height: 64 })\n)\nawait screen.message.write(`hello\nworld`)\n')),(0,a.kt)("h2",{id:"dot-matrix"},"Dot matrix"),(0,a.kt)("p",null,"The screen emulates a dot matrix of monochrome LEDs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service: ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/dotmatrix/"},"dot matrix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/blob/main/packages/drivers/src/dotmatrix.ts"},"Source"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { SSD1306Driver, startDotMatrix } from "@devicescript/drivers"\nimport { img } from "@devicescript/graphics"\n\nconst dots = await startDotMatrix(\n    new SSD1306Driver({\n        width: 128,\n        height: 64,\n        devAddr: 0x3c,\n    }),\n    {\n        rows: 5,\n        columns: 5,\n    }\n)\nawait dots.writeImage(img`# # . # #\n# # . # #\n. # # # .\n. # # # .\n# . # . .`)\n')))}m.isMDXComponent=!0}}]);