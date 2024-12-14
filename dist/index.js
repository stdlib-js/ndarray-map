"use strict";var b=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=b(function(k,g){
var c=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-is-ndarray-like/dist'),m=require('@stdlib/assert-is-function/dist'),o=require('@stdlib/assert-has-own-property/dist'),l=require('@stdlib/ndarray-empty-like/dist'),d=require('@stdlib/ndarray-base-map/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function q(r,e,u,y){var n,a,t,s,i;if(!f(r))throw new TypeError(v('null5t',r));if(arguments.length<3?a=e:arguments.length===3?m(e)?(a=e,s=u):(n=!0,t=e,a=u):(n=!0,t=e,a=u,s=y),!m(a))throw new TypeError(v('null2b',a));if(n){if(!c(t))throw new TypeError(v('null2V',t));o(t,"dtype")?i=l(r,{dtype:t.dtype}):i=l(r)}else i=l(r);return d([r,i],a,s),i}g.exports=q
});var h=p();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
