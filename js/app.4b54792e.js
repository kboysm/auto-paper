(function(e){function t(t){for(var n,u,i=t[0],c=t[1],f=t[2],s=0,d=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,f||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e0c3738f"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var f=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/auto-paper/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=f;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={id:"nav"},a=Object(n["e"])("Home"),u=Object(n["e"])(" | "),i=Object(n["e"])("About");function c(e,t,r,c,f,s){var p=Object(n["t"])("router-link"),d=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["f"])("div",o,[Object(n["e"])(Object(n["v"])(c.init)+" ",1),Object(n["f"])(p,{to:"/"},{default:Object(n["z"])((function(){return[a]})),_:1}),u,Object(n["f"])(p,{to:"/about"},{default:Object(n["z"])((function(){return[i]})),_:1})]),Object(n["f"])(d)],64)}var f=r("60b9"),s=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),p={class:"home"};function d(e,t,r,o,a,u){return Object(n["p"])(),Object(n["d"])("div",p," Home ")}var l={name:"Home"};l.render=d;var b=l,m=function(e,t,r){var n=f["a"].currentUser;n||r("/Auth"),r()},h=[{path:"/",name:"Home",component:b,beforeEnter:m},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/Auth",name:"Auth",component:function(){return r.e("about").then(r.bind(null,"2fef"))}}],v=Object(s["a"])({history:Object(s["b"])(),routes:h}),j=v,O=function(){var e=Object(n["s"])(!1),t=Object(n["r"])({displayName:"",uid:"",updateProfile:function(){}}),r=function(t){return e.value=t},o=function(e){t.displayName=e.displayName,t.uid=e.uid,t.updateProfile=e.updateProfile},a=function(){var e=f["a"].currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})};return Object(n["n"])((function(){f["a"].onAuthStateChanged((function(e){e?(o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),j.push({name:"Home"})):(o({displayName:"",uid:"",updateProfile:function(){}}),j.push({name:"Auth"}))})),r(!0)})),{init:e,userObj:t,setUserObj:o,refreshUser:a}},y=O,g={setup:function(e){var t=y(),r=t.init,n=t.userObj,o=t.setUserObj,a=t.refreshUser;return{init:r,userObj:n,setUserObj:o,refreshUser:a}}};r("fe1a");g.render=c;var P=g,w=r("5502"),A=Object(w["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(P).use(A).use(j).mount("#app")},"60b9":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("260b"),o=(r("ea7b"),r("e71f"),r("588e"),{apiKey:"AIzaSyCfZvx82fapmRzI9O__bqnFnrsSN41aWvA",authDomain:"auto-paper.firebaseapp.com",projectId:"auto-paper",storageBucket:"auto-paper.appspot.com",messagingSenderId:"318183258069",appId:"1:318183258069:web:10b63f6718f94ba2022f5c",measurementId:"G-FFB6PWSQ7W"});n["a"].initializeApp(o);n["a"];var a=n["a"].auth();n["a"].firestore(),n["a"].storage()},abfc:function(e,t,r){},fe1a:function(e,t,r){"use strict";r("abfc")}});
//# sourceMappingURL=app.4b54792e.js.map