// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(e){return!1}},o=Object.defineProperty,n=Object.prototype,i=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;var f=o,p=function(e,t,r){var o,f,p,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||c.call(e,t)?(o=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=o):e[t]=r.value),p="get"in r,s="set"in r,f&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),s&&l&&l.call(e,t,r.set),e},s=r()?f:p;var _=function(e,t,r){s(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})},b=require("path").join,d=require("@stdlib/utils-try-require"),y=require("./main.js"),j=d(b("/home/runner/work/math-special/math-special/node_modules/@stdlib/math-special-abs/lib","./native.js"));j instanceof Error||(y=j),module.exports=y;var m={};return _(m,"abs",e(Object.freeze({__proto__:null}))),m}));
//# sourceMappingURL=bundle.js.map
