"use strict";var b=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var p=b(function(k,g){
var c=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-is-ndarray-like/dist'),m=require('@stdlib/assert-is-function/dist'),o=require('@stdlib/assert-has-own-property/dist'),l=require('@stdlib/ndarray-empty-like/dist'),d=require('@stdlib/ndarray-base-map/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function q(r,e,i,y){var n,a,t,s,u;if(!f(r))throw new TypeError(v('2535t',r));if(arguments.length<3?a=e:arguments.length===3?m(e)?(a=e,s=i):(n=!0,t=e,a=i):(n=!0,t=e,a=i,s=y),!m(a))throw new TypeError(v('2532b',a));if(n){if(!c(t))throw new TypeError(v('2532V',t));o(t,"dtype")?u=l(r,{dtype:t.dtype}):u=l(r)}else u=l(r);return d([r,u],a,s),u}g.exports=q
});var h=p();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
