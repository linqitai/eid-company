define("xg/eid-company/1.0.4/c/js/base/zepto.cookie",[],function(require,exports,module){!function($){$.extend($.fn,{cookie:function(key,value,options){var days,time,result,decode;return arguments.length>1&&"[object Object]"!==String(value)?(options=$.extend({},options),null!==value&&void 0!==value||(options.expires=-1),"number"==typeof options.expires&&(days=24*options.expires*60*60*1e3,time=options.expires=new Date,time.setTime(time.getTime()+days)),value=String(value),document.cookie=[encodeURIComponent(key),"=",options.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")):(options=value||{},decode=options.raw?function(s){return s}:decodeURIComponent,(result=new RegExp("(?:^|; )"+encodeURIComponent(key)+"=([^;]*)").exec(document.cookie))?decode(result[1]):null)}})}(Zepto),module.exports=Zepto});