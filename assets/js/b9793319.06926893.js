"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9011],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},84197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(25773),a=(r(27378),r(35318));const i={sidebar_position:3.79,description:"Learn how to create a weather display using a temperature and humidity sensor and a basic character display.",keywords:["temperature sensor","humidity sensor","character screen","weather display","devicescript"],hide_table_of_contents:!0},s="Weather Display",o={unversionedId:"samples/weather-display",id:"samples/weather-display",title:"Weather Display",description:"Learn how to create a weather display using a temperature and humidity sensor and a basic character display.",source:"@site/docs/samples/weather-display.mdx",sourceDirName:"samples",slug:"/samples/weather-display",permalink:"/devicescript/samples/weather-display",draft:!1,tags:[],version:"current",sidebarPosition:3.79,frontMatter:{sidebar_position:3.79,description:"Learn how to create a weather display using a temperature and humidity sensor and a basic character display.",keywords:["temperature sensor","humidity sensor","character screen","weather display","devicescript"],hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Dimmer",permalink:"/devicescript/samples/dimmer"},next:{title:"Weather Dashboard",permalink:"/devicescript/samples/weather-dashboard"}},c={},d=[{value:"Configuring the hardware",id:"configuring-the-hardware",level:2},{value:"Logging sensor data",id:"logging-sensor-data",level:2},{value:"See also",id:"see-also",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weather-display"},"Weather Display"),(0,a.kt)("p",null,"A simple weather display that gets new values every 5 seconds from a temperature and humidity sensor and displays them in a character display with a ascii symbol based on the humidity."),(0,a.kt)("h2",{id:"configuring-the-hardware"},"Configuring the hardware"),(0,a.kt)("p",null,"Make sure to configure your program for your\nhardware board so that the I2C pins are ",(0,a.kt)("a",{parentName:"p",href:"/developer/board-configuration"},"configured correctly"),"."),(0,a.kt)("h2",{id:"logging-sensor-data"},"Logging sensor data"),(0,a.kt)("p",null,"Let's start by mounting a ",(0,a.kt)("inlineCode",{parentName:"p"},"sensor")," client and logging each sensor reading to the display using several functions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { startSHT30 } from "@devicescript/drivers"\nimport { SSD1306Driver, startCharacterScreen } from "@devicescript/drivers"\n\nconst screen = await startCharacterScreen(\n    new SSD1306Driver({ width: 128, height: 64 })\n)\nconst { temperature, humidity } = await startSHT30()\n\nasync function displayText(text: string, weatherCondition: string) {\n    const weatherIcon = getWeatherIcon(weatherCondition)\n\n    await screen.message.write(`${text}\\n${weatherIcon}`)\n}\n\nasync function readSensorData() {\n    // Assume weather condition is determined based on humidity level\n    const weatherCondition =\n        (await humidity.reading.read()) >= 70 ? "Rain" : "Sunny"\n\n    // get values from sensor\n    const displayValueTemperature = await temperature.reading.read()\n    const displayValueHumidity = await humidity.reading.read()\n\n    const temperatureString = `Temperature: ${displayValueTemperature}\xb0C`\n    const humidityString = `Humidity: ${displayValueHumidity}%`\n    const text = `${temperatureString}\\n${humidityString}`\n\n    await displayText(text, weatherCondition)\n}\n\n// Function to get an ascii weather icon based on the weather condition\nfunction getWeatherIcon(weatherCondition: string) {\n    switch (weatherCondition) {\n        case "Rain":\n            return `\n  .-.        .-.  \n (   ) RAIN (   )\n(___)      (___) \n \'\'\'        \'\'\'  \n  ` // Use backticks to preserve multiline string formatting\n        case "Sunny":\n            return `\n    \\\\ | /    \n     .-.       \n  --(   )-- SUNNY\n     \'-\'    \n`\n        default:\n            return ""\n    }\n}\n\n// Read sensor data every 5 seconds\nsetInterval(async () => {\n    await readSensorData()\n}, 5000)\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Photo using Devicescript simulator",src:r(85341).Z,width:"1017",height:"1433"})),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"./weather-dashboard"},"value dashboard")," simplifies the display of sensor data\non a character screen."))}u.isMDXComponent=!0},85341:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/simulator-example-9f6880c7516de8e05171bad268ed85f4.png"}}]);