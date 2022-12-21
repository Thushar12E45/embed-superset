!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.supersetEmbeddedSdk=t():e.supersetEmbeddedSdk=t()}(globalThis,(function(){return(()=>{"use strict";var __webpack_modules__={98:(module,__webpack_exports__,__webpack_require__)=>{var enterModule;__webpack_require__.d(__webpack_exports__,{g:()=>Switchboard}),module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Actions,reactHotLoader,leaveModule;class Switchboard{constructor({port:e,name:t="switchboard",debug:r=!1}){this.port=void 0,this.name=void 0,this.methods={},this.incrementor=1,this.debugMode=void 0,this.port=e,this.name=t,this.debugMode=r,e.addEventListener("message",(async e=>{this.log("message received",e);const t=e.data;if(isGet(t))this.port.postMessage(await this.getMethodResult(t));else if(isEmit(t)){const{method:e,args:r}=t,o=this.methods[e];o&&o(r)}}))}async getMethodResult({messageId:e,method:t,args:r}){const o=this.methods[t];if(null==o)return{switchboardAction:Actions.ERROR,messageId:e,error:`[${this.name}] Method "${t}" is not defined`};try{const t=await o(r);return{switchboardAction:Actions.REPLY,messageId:e,result:t}}catch(r){return this.logError(r),{switchboardAction:Actions.ERROR,messageId:e,error:`[${this.name}] Method "${t}" threw an error`}}}defineMethod(e,t){this.methods[e]=t}get(e,t){return new Promise(((r,o)=>{const s=this.getNewMessageId(),a=e=>{const t=e.data;if(t.messageId===s)if(this.port.removeEventListener("message",a),isReply(t))r(t.result);else{const e=isError(t)?t.error:"Unexpected response message";o(new Error(e))}};this.port.addEventListener("message",a),this.port.start();const n={switchboardAction:Actions.GET,method:e,messageId:s,args:t};this.port.postMessage(n)}))}emit(e,t){const r={switchboardAction:Actions.EMIT,method:e,args:t};this.port.postMessage(r)}start(){this.port.start()}log(...e){this.debugMode&&console.debug(`[${this.name}]`,...e)}logError(...e){console.error(`[${this.name}]`,...e)}getNewMessageId(){return`m_${this.name}_${this.incrementor++}`}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}function isGet(e){return e.switchboardAction===Actions.GET}function isReply(e){return e.switchboardAction===Actions.REPLY}function isEmit(e){return e.switchboardAction===Actions.EMIT}function isError(e){return e.switchboardAction===Actions.ERROR}!function(e){e.GET="get",e.REPLY="reply",e.EMIT="emit",e.ERROR="error"}(Actions||(Actions={})),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Switchboard,"Switchboard","/Users/aaron/work/superset/superset-frontend/packages/superset-ui-switchboard/src/switchboard.ts"),reactHotLoader.register(isGet,"isGet","/Users/aaron/work/superset/superset-frontend/packages/superset-ui-switchboard/src/switchboard.ts"),reactHotLoader.register(isReply,"isReply","/Users/aaron/work/superset/superset-frontend/packages/superset-ui-switchboard/src/switchboard.ts"),reactHotLoader.register(isEmit,"isEmit","/Users/aaron/work/superset/superset-frontend/packages/superset-ui-switchboard/src/switchboard.ts"),reactHotLoader.register(isError,"isError","/Users/aaron/work/superset/superset-frontend/packages/superset-ui-switchboard/src/switchboard.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{embedDashboard:()=>i});const e={visible:"show_filters",expanded:"expand_filters"};var t=__webpack_require__(98);function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,s,a=0,n=0,i="";s=t.charAt(n++);~s&&(o=a%4?64*o+s:s,a++%4)?i+=String.fromCharCode(255&o>>(-2*a&6)):0)s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return i};function s(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return o(t)}}function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError";function n(e){const t=function(e,t){if("string"!=typeof e)throw new a("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(s(e.split(".")[r]))}catch(e){throw new a("Invalid token specified: "+e.message)}}(e),r=new Date(/[^0-9\.]/g.test(t.exp)?t.exp:1e3*parseFloat(t.exp));return("Invalid Date"!==r.toString()?Math.max(1e4,r.getTime()-Date.now()):3e5)-5e3}async function i(r){let{id:o,supersetDomain:s,mountPoint:a,fetchGuestToken:i,dashboardUiConfig:d,debug:c=!1}=r;function u(){if(c){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];console.debug(`[superset-embedded-sdk][dashboard ${o}]`,...t)}}u("embedding");const[l,_]=await Promise.all([i(),async function(){return new Promise((r=>{const n=document.createElement("iframe"),i=d?`?uiConfig=${function(){let e=0;return d&&(d.hideTitle&&(e+=1),d.hideTab&&(e+=2),d.hideChartControls&&(e+=8)),e}()}`:"",l=d?.filters||{},_=Object.keys(l),p=_.length>0?"&"+_.map((t=>e[t]+"="+l[t])).join("&"):"";n.sandbox.add("allow-same-origin"),n.sandbox.add("allow-scripts"),n.sandbox.add("allow-presentation"),n.sandbox.add("allow-downloads"),n.sandbox.add("allow-forms"),n.sandbox.add("allow-popups"),n.addEventListener("load",(()=>{const e=new MessageChannel,o=e.port1,a=e.port2;n.contentWindow.postMessage({type:"__embedded_comms__",handshake:"port transfer"},s,[a]),u("sent message channel to the iframe"),r(new t.g({port:o,name:"superset-embedded-sdk",debug:c}))})),n.src=`${s}/embedded/${o}${i}${p}`,a.replaceChildren(n),u("placed the iframe")}))}()]);return _.emit("guestToken",{guestToken:l}),u("sent guest token"),setTimeout((async function e(){const t=await i();_.emit("guestToken",{guestToken:t}),setTimeout(e,n(t))}),n(l)),{getScrollSize:()=>_.get("getScrollSize"),unmount:function(){u("unmounting"),a.replaceChildren()},getDashboardPermalink:e=>_.get("getDashboardPermalink",{anchor:e}),getActiveTabs:()=>_.get("getActiveTabs")}}})(),__webpack_exports__})()}));
//# sourceMappingURL=index.js.map