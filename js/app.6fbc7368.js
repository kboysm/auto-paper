(function(e){function t(t){for(var n,u,i=t[0],c=t[1],s=t[2],p=0,d=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a9db7d98"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}a[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/auto-paper/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"14da":function(e,t,r){"use strict";r("ce95")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function a(e,t,r,a,o,u){var i=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["d"])(i)}var o=r("60b9"),u=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),i={class:"home"};function c(e,t,r,a,o,u){return Object(n["p"])(),Object(n["d"])("div",i," Home ")}var s={name:"Home"};s.render=c;var p=s,f=function(e,t,r){var n=o["a"].currentUser;n||r("/Auth"),r()},d=[{path:"/",name:"Home",component:p,beforeEnter:f},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/Auth",name:"Auth",component:function(){return r.e("about").then(r.bind(null,"2fef"))}}],l=Object(u["a"])({history:Object(u["b"])(),routes:d}),b=l,m=function(){var e=Object(n["s"])(!1),t=Object(n["r"])({displayName:"",uid:"",updateProfile:function(){}}),r=function(t){return e.value=t},a=function(e){t.displayName=e.displayName,t.uid=e.uid,t.updateProfile=e.updateProfile},u=function(){var e=o["a"].currentUser;a({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})};return Object(n["n"])((function(){o["a"].onAuthStateChanged((function(e){e?(a({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),b.push({name:"Home"})):(a({displayName:"",uid:"",updateProfile:function(){}}),b.push({name:"Auth"}))})),r(!0)})),{init:e,userObj:t,setUserObj:a,refreshUser:u}},h=m,v={setup:function(e){var t=h(),r=t.init,n=t.userObj,a=t.setUserObj,o=t.refreshUser;return{init:r,userObj:n,setUserObj:a,refreshUser:o}}};r("14da");v.render=a;var y=v,j=r("5502"),O=Object(j["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(y).use(O).use(b).mount("#app")},"60b9":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("260b"),a=(r("ea7b"),r("e71f"),r("588e"),{apiKey:"AIzaSyCfZvx82fapmRzI9O__bqnFnrsSN41aWvA",authDomain:"auto-paper.firebaseapp.com",projectId:"auto-paper",storageBucket:"auto-paper.appspot.com",messagingSenderId:"318183258069",appId:"1:318183258069:web:10b63f6718f94ba2022f5c",measurementId:"G-FFB6PWSQ7W"});n["a"].initializeApp(a);n["a"];var o=n["a"].auth();n["a"].firestore(),n["a"].storage()},ce95:function(e,t,r){}});
//# sourceMappingURL=app.6fbc7368.js.map