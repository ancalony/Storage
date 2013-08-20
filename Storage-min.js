/**
* Data Storage - UserData(IE),Cookie,LocalStorage 
* The MIT License - Copyright (c) 2013 Hongbo Yang <abcrun@gmail.com>
* Repository - https://github.com/abcrun/Storage.git
* Version - 0.3.0
*/
!function(e,t){if(typeof define==="function"&&define.amd)define(t);else if(typeof module==="object"&&module.exports)module.exports=t();else this[e]=t()}("Storage",function(){var e=window.JSON&&window.JSON.stringify&&window.JSON.parse?window.JSON:{stringify:function(e){return e},parse:function(e){return e}};var t=function(){var t;try{var r=new ActiveXObject("htmlfile"),i,t;r.open();r.write('<iframe src="/favicon.ico"></iframe>');r.close();i=r.frames[0].document;t=i.createElement("div");i.appendChild(t);t.addBehavior("#default#userData")}catch(n){}return{get:function(r){var i;t.load(r);i=t.getAttribute(r);try{i=e.parse(i)}catch(n){}return i},set:function(r,i,n){if(n){var o=new Date;o.setTime(o.getTime()+n*1e3);t.expires=o.toUTCString()}t.setAttribute(r,e.stringify(i));t.save(r)},remove:function(e,r){t.removeAttribute(e);t.save(e)}}};var r=function(){var t=(new Date).getTime();for(key in localStorage){var r=localStorage.getItem(key);try{r=e.parse(r)}catch(i){}if(toString.call(r).toLowerCase().indexOf("array")>0){var n=r[0].expires;if(n&&/^\d{13,}$/.test(n)&&n<=t)localStorage.removeItem(key)}}return{get:function(t){var r=localStorage.getItem(t);if(!r)return null;try{r=e.parse(r)}catch(i){}if(typeof r!="object")return r;var n=r[0].expires;if(n&&/^\d{13,}$/.test(n)){var o=(new Date).getTime();if(n<=o){localStorage.removeItem(t);return null}r.shift()}return r[0]},set:function(t,r,i){var n=[];if(i){var o=(new Date).getTime();n.push({expires:o+i*1e3})}n.push(r);localStorage.setItem(t,e.stringify(n))},remove:function(e){localStorage.removeItem(e)}}};var i={get:function(t){var r=document.cookie,i;var n=r.indexOf(t+"="),o=r.indexOf(";",n);if(o==-1)o=r.length;if(n>-1){i=r.substring(n+t.length+1,o);try{i=e.parse(i)}catch(a){}return i}else{return null}},set:function(t,r,i,n,o){var n=n||document.domain,o=o||"/",a="",c;if(i){if(window.ActiveXObject){var f=new Date;f.setTime(f.getTime()+i*1e3);a="expires="+f.toGMTString()}else{a="max-age="+i}}document.cookie=t+"="+e.stringify(r)+";path="+o+";domain="+n+";"+a},remove:function(e,t,r){var t=t||document.domain,r=r||"/";this.set(e,"",0,t,r)}};var n;if(!window.localStorage){n=t()}else{n=r()}return{get:n.get,set:n.set,remove:n.remove,cookie:i}});