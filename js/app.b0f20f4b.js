(function(e){function t(t){for(var a,o,u=t[0],l=t[1],c=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"28d835ae"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"6a8ee3e1"}[e]+".css",r=l.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===r))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],s=c.getAttribute("data-href");if(s===a||s===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/auto-paper/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3067:function(e,t,n){"use strict";n.r(t),n.d(t,"particlesOption",(function(){return a}));var a={autoPlay:!0,background:{color:{value:"#000157"},image:"",position:"",repeat:"",size:"",opacity:1},backgroundMask:{composite:"destination-out",cover:{color:{value:"#fff"},opacity:1},enable:!1},fullScreen:{enable:!0,zIndex:-1},detectRetina:!0,fpsLimit:60,infection:{cure:!1,delay:0,enable:!1,infections:0,stages:[]},interactivity:{detectsOn:"window",events:{onClick:{enable:!1,mode:[]},onDiv:{selectors:[],enable:!1,mode:[],type:"circle"},onHover:{enable:!0,mode:"repulse",parallax:{enable:!1,force:2,smooth:10}},resize:!0},modes:{attract:{distance:200,duration:.4,speed:1},bounce:{distance:200},bubble:{distance:200,duration:.4},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:100,links:{blink:!1,consent:!1,opacity:1}},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}},push:{quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,speed:1},slow:{factor:3,radius:200},trail:{delay:.005,quantity:5,particles:{color:{value:"#ff0000",animation:{enable:!0,speed:400,sync:!0}},collisions:{enable:!1,bounce:{horizontal:{random:{}},vertical:{random:{}}},overlap:{}},links:{enable:!1,shadow:{},triangles:{}},move:{outModes:{default:"destroy"},speed:2,angle:{},attract:{rotate:{}},gravity:{},path:{delay:{random:{}}},trail:{}},size:{value:5,animation:{enable:!0,speed:5,minimumValue:1,sync:!0,startValue:"min",destroy:"max"},random:{}},bounce:{horizontal:{random:{}},vertical:{random:{}}},destroy:{split:{factor:{random:{}},rate:{random:{}}}},life:{delay:{random:{}},duration:{random:{}}},number:{density:{}},opacity:{animation:{},random:{}},rotate:{animation:{}},shadow:{offset:{}},shape:{},stroke:{color:{value:"",animation:{count:0,enable:!1,offset:{max:0,min:0},speed:0,sync:!1}}},twinkle:{lines:{},particles:{}}}}}},manualParticles:[],motion:{disable:!1,reduce:{factor:4,value:!0}},particles:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},collisions:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},enable:!0,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:"#f00",animation:{h:{count:0,enable:!0,offset:0,speed:50,sync:!1},s:{count:0,enable:!1,offset:0,speed:1,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,sync:!0}}},destroy:{mode:"none",split:{count:1,factor:{random:{enable:!1,minimumValue:0},value:3},rate:{random:{enable:!1,minimumValue:0},value:{min:4,max:9}}}},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},links:{blink:!1,color:{value:"random"},consent:!1,distance:100,enable:!0,frequency:1,opacity:1,shadow:{blur:5,color:{value:"#00ff00"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},move:{angle:{offset:45,value:90},attract:{enable:!1,rotate:{x:3e3,y:3e3}},decay:0,distance:0,direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,maxSpeed:50},path:{clamp:!0,delay:{random:{enable:!1,minimumValue:0},value:0},enable:!1},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!1,size:!1,speed:2,straight:!1,trail:{enable:!1,length:10,fillColor:{value:"#000000"}},vibrate:!1,warp:!1},number:{density:{enable:!0,area:800,factor:1e3},limit:0,value:100},opacity:{random:{enable:!0,minimumValue:.3},value:{min:.3,max:.8},animation:{count:0,enable:!0,speed:.5,sync:!1,destroy:"none",minimumValue:.3,startValue:"random"}},reduceDuplicates:!1,rotate:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,sync:!1},direction:"clockwise",path:!1},shadow:{blur:0,color:{value:"#000000"},enable:!1,offset:{x:0,y:0}},shape:{options:{image:[null],images:[null]},type:"circle"},size:{random:{enable:!0,minimumValue:1},value:{min:1,max:3},animation:{count:0,enable:!0,speed:3,sync:!1,destroy:"none",minimumValue:1,startValue:"random"}},stroke:{width:0,color:{value:"",animation:{h:{count:0,enable:!1,offset:0,speed:0,sync:!1},s:{count:0,enable:!1,offset:0,speed:1,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,sync:!0}}}},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],themes:[]}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(e,t,n,o,r,i){var u=Object(a["x"])("Particles"),l=Object(a["x"])("nav-bar"),c=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(u,{class:"bg-three",id:"tsparticles",options:o.particlesOption},null,8,["options"]),Object(a["g"])(l),Object(a["g"])(c),o.userObj.uid?(Object(a["q"])(),Object(a["d"])("button",{key:0,id:"AuthLogOut",onClick:t[1]||(t[1]=function(){return o.onLogOutClick&&o.onLogOutClick.apply(o,arguments)})},"Log Out")):Object(a["e"])("",!0),o.userObj.uid?(Object(a["q"])(),Object(a["d"])("button",{key:1,id:"AuthUserDelete",onClick:t[2]||(t[2]=function(){return o.userObjDelete&&o.userObjDelete.apply(o,arguments)})},"User Delete")):Object(a["e"])("",!0)],64)}var r=n("60b9"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u={class:"home"};function l(e,t,n,o,r,i){return Object(a["q"])(),Object(a["d"])("div",u," Home ")}var c={name:"Home"};c.render=l;var s=c,d=function(e,t,n){var a=r["a"].currentUser;a||n("/Auth"),n()},m=[{path:"/",name:"Home",component:s,beforeEnter:d},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Auth",name:"Auth",component:function(){return n.e("about").then(n.bind(null,"2fef"))}}],p=Object(i["a"])({history:Object(i["b"])(),routes:m}),f=p,b=function(){var e=Object(a["w"])(!1),t=Object(a["v"])({displayName:"",uid:"",updateProfile:function(){}}),n=function(t){return e.value=t},o=function(e){t.displayName=e.displayName,t.uid=e.uid,t.updateProfile=e.updateProfile},i=function(){var e=r["a"].currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},u=function(){r["a"].signOut(),i()},l=function(){var e=r["a"].currentUser;e.delete().then((function(){console.log("User Delete")})).catch((function(e){console.log(e)}))};return Object(a["o"])((function(){r["a"].onAuthStateChanged((function(e){e?(o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),f.push({name:"Home"})):(o({displayName:"",uid:"",updateProfile:function(){}}),f.push({name:"Auth"}))})),n(!0)})),{init:e,userObj:t,setUserObj:o,refreshUser:i,onLogOutClick:u,userObjDelete:l}},v=b,y=Object(a["f"])('<ul class="menu"><li><a href="#">서류생성</a></li><li><a href="#">데이터<br>불러오기</a></li><li><a href="#">적용 서류<br> 선택</a></li><li><a href="#">로그아웃</a></li></ul>',1);function h(e,t,n,o,r,i){return Object(a["q"])(),Object(a["d"])("nav",null,[y])}var g={};n("acab");g.render=h;var O=g,j={components:{NavBar:O},setup:function(){var e=v(),t=e.init,a=e.userObj,o=e.setUserObj,r=e.refreshUser,i=e.onLogOutClick,u=e.userObjDelete,l=n("3067").particlesOption;return{init:t,userObj:a,setUserObj:o,refreshUser:r,onLogOutClick:i,userObjDelete:u,particlesOption:l}}};n("c3fc");j.render=o;var w=j,k=n("5502"),P=Object(k["a"])({state:{},mutations:{},actions:{},modules:{}}),x=n("6aae");Object(a["c"])(w).use(P).use(f).use(x["a"]).mount("#app")},"60b9":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("260b"),o=(n("ea7b"),n("e71f"),n("588e"),{apiKey:"AIzaSyCfZvx82fapmRzI9O__bqnFnrsSN41aWvA",authDomain:"auto-paper.firebaseapp.com",projectId:"auto-paper",storageBucket:"auto-paper.appspot.com",messagingSenderId:"318183258069",appId:"1:318183258069:web:10b63f6718f94ba2022f5c",measurementId:"G-FFB6PWSQ7W"});a["a"].initializeApp(o);a["a"];var r=a["a"].auth();a["a"].firestore(),a["a"].storage()},"71cb":function(e,t,n){},acab:function(e,t,n){"use strict";n("fae2")},c3fc:function(e,t,n){"use strict";n("71cb")},fae2:function(e,t,n){}});
//# sourceMappingURL=app.b0f20f4b.js.map