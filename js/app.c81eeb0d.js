(function(e){function t(t){for(var a,r,i=t[0],l=t[1],c=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},u=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"76cd715c"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"6a8ee3e1"}[e]+".css",o=l.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],s=c.getAttribute("data-href");if(s===a||s===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],b.parentNode.removeChild(b),n(u)},b.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/auto-paper/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var b=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a32":function(e,t,n){"use strict";n("2da1")},"2da1":function(e,t,n){},3067:function(e,t,n){"use strict";n.r(t),n.d(t,"particlesOption",(function(){return a}));var a={autoPlay:!0,background:{color:{value:"#000157"},image:"",position:"",repeat:"",size:"",opacity:1},backgroundMask:{composite:"destination-out",cover:{color:{value:"#fff"},opacity:1},enable:!1},fullScreen:{enable:!0,zIndex:-1},detectRetina:!0,fpsLimit:60,infection:{cure:!1,delay:0,enable:!1,infections:0,stages:[]},interactivity:{detectsOn:"window",events:{onClick:{enable:!1,mode:[]},onDiv:{selectors:[],enable:!1,mode:[],type:"circle"},onHover:{enable:!0,mode:"repulse",parallax:{enable:!1,force:2,smooth:10}},resize:!0},modes:{attract:{distance:200,duration:.4,speed:1},bounce:{distance:200},bubble:{distance:200,duration:.4},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:100,links:{blink:!1,consent:!1,opacity:1}},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}},push:{quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,speed:1},slow:{factor:3,radius:200},trail:{delay:.005,quantity:5,particles:{color:{value:"#ff0000",animation:{enable:!0,speed:400,sync:!0}},collisions:{enable:!1,bounce:{horizontal:{random:{}},vertical:{random:{}}},overlap:{}},links:{enable:!1,shadow:{},triangles:{}},move:{outModes:{default:"destroy"},speed:2,angle:{},attract:{rotate:{}},gravity:{},path:{delay:{random:{}}},trail:{}},size:{value:5,animation:{enable:!0,speed:5,minimumValue:1,sync:!0,startValue:"min",destroy:"max"},random:{}},bounce:{horizontal:{random:{}},vertical:{random:{}}},destroy:{split:{factor:{random:{}},rate:{random:{}}}},life:{delay:{random:{}},duration:{random:{}}},number:{density:{}},opacity:{animation:{},random:{}},rotate:{animation:{}},shadow:{offset:{}},shape:{},stroke:{color:{value:"",animation:{count:0,enable:!1,offset:{max:0,min:0},speed:0,sync:!1}}},twinkle:{lines:{},particles:{}}}}}},manualParticles:[],motion:{disable:!1,reduce:{factor:4,value:!0}},particles:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},collisions:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},enable:!0,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:"#f00",animation:{h:{count:0,enable:!0,offset:0,speed:50,sync:!1},s:{count:0,enable:!1,offset:0,speed:1,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,sync:!0}}},destroy:{mode:"none",split:{count:1,factor:{random:{enable:!1,minimumValue:0},value:3},rate:{random:{enable:!1,minimumValue:0},value:{min:4,max:9}}}},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},links:{blink:!1,color:{value:"random"},consent:!1,distance:100,enable:!0,frequency:1,opacity:1,shadow:{blur:5,color:{value:"#00ff00"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},move:{angle:{offset:45,value:90},attract:{enable:!1,rotate:{x:3e3,y:3e3}},decay:0,distance:0,direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,maxSpeed:50},path:{clamp:!0,delay:{random:{enable:!1,minimumValue:0},value:0},enable:!1},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!1,size:!1,speed:2,straight:!1,trail:{enable:!1,length:10,fillColor:{value:"#000000"}},vibrate:!1,warp:!1},number:{density:{enable:!0,area:800,factor:1e3},limit:0,value:100},opacity:{random:{enable:!0,minimumValue:.3},value:{min:.3,max:.8},animation:{count:0,enable:!0,speed:.5,sync:!1,destroy:"none",minimumValue:.3,startValue:"random"}},reduceDuplicates:!1,rotate:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,sync:!1},direction:"clockwise",path:!1},shadow:{blur:0,color:{value:"#000000"},enable:!1,offset:{x:0,y:0}},shape:{options:{image:[null],images:[null]},type:"circle"},size:{random:{enable:!0,minimumValue:1},value:{min:1,max:3},animation:{count:0,enable:!0,speed:3,sync:!1,destroy:"none",minimumValue:1,startValue:"random"}},stroke:{width:0,color:{value:"",animation:{h:{count:0,enable:!1,offset:0,speed:0,sync:!1},s:{count:0,enable:!1,offset:0,speed:1,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,sync:!0}}}},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],themes:[]}},"3c0f":function(e,t,n){"use strict";n("76c3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,o,u){var i=Object(a["y"])("Particles"),l=Object(a["y"])("nav-bar"),c=Object(a["y"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(i,{class:"bg-three",id:"tsparticles",options:r.particlesOption},null,8,["options"]),Object(a["g"])(l),Object(a["g"])(c)],64)}var o=n("60b9"),u=n("5502"),i=n("1da1"),l=(n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("6c02"));function c(e,t,n,r,o,u){var i=Object(a["y"])("site-manual");return Object(a["q"])(),Object(a["d"])(i)}var s=Object(a["H"])("data-v-3da7f146");Object(a["u"])("data-v-3da7f146");var d={class:"page"},b={class:"page-title"},m={class:"manual-list"},p={class:"list-item"};Object(a["r"])();var f=s((function(e,t,n,r,o,u){return Object(a["q"])(),Object(a["d"])("div",d,[Object(a["g"])("h2",b,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(r.getText(0),(function(e,t){return Object(a["q"])(),Object(a["d"])("span",{key:t,class:"animationItem",style:{animationDelay:2*t+"ms"},textContent:Object(a["A"])(e)},null,12,["textContent"])})),128))]),Object(a["g"])("ol",m,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(r.getText(1),(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:t},[Object(a["g"])("li",p,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(e,(function(e,n){return Object(a["q"])(),Object(a["d"])("span",{key:n,class:"animationItem",style:{animationDelay:2*(n+r.countLength(t))+"ms"},textContent:Object(a["A"])(e)},null,12,["textContent"])})),128))])])})),128))])])})),O={setup:function(){var e=["Auto - Paper","반복작업이 필요한 서류를 생성합니다. 불러온 데이터를 넣을 위치에 $((item))을 넣습니다.","데이터 불러오기 버튼을 클릭 후 .csv 파일을 불러옵니다.","적용할 서류가 2개 이상일 경우 적용할 서류를 선택합니다.","적용할 서류를 선택 후 인쇄버튼을 클릭하여 반복적인 작업이 필요한 서류를 인쇄합니다."],t=function(t){var n=12;switch(t){case 0:return n;case 1:return n+e[1].length;case 2:return n+e[1].length+e[2].length;case 3:return n+e[1].length+e[2].length+e[3].length}},n=function(t){if(0===t)return e[0];var n=Object.assign([],e);return n.shift(),n};return{textAnimationItem:e,countLength:t,getText:n}}};n("0a32");O.render=f,O.__scopeId="data-v-3da7f146";var v=O,g={name:"Home",components:{SiteManual:v}};g.render=c;var h=g,y=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=JSON.parse(localStorage.getItem("userState")),r.uid||a("/Auth"),a();case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),j=[{path:"/",name:"Home",component:h,beforeEnter:y},{path:"/Auth",name:"Auth",component:function(){return n.e("about").then(n.bind(null,"2fef"))}},{path:"/CreatePaperForm",name:"CreatePaperForm",component:function(){return n.e("about").then(n.bind(null,"4155"))}},{path:"/ImportData",name:"ImportData",component:function(){return n.e("about").then(n.bind(null,"9597"))}},{path:"/SelectPaperForm",name:"SelectPaperForm",component:function(){return n.e("about").then(n.bind(null,"53ef"))}}],k=Object(l["a"])({history:Object(l["b"])(),routes:j}),w=k,S=function(){var e=Object(u["b"])(),t=Object(a["w"])(!1),n=Object(a["v"])({displayName:"",uid:"",updateProfile:function(){}}),r=function(e){return t.value=e},i=function(e){n.displayName=e.displayName,n.uid=e.uid,n.updateProfile=e.updateProfile},l=function(){var e=o["a"].currentUser;i({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},c=function(){o["a"].signOut(),l()},s=function(){var e=o["a"].currentUser;e.delete().then((function(){console.log("User Delete")})).catch((function(e){console.log(e)}))};return Object(a["o"])((function(){o["a"].onAuthStateChanged((function(t){t?(i({displayName:t.displayName,uid:t.uid,updateProfile:function(e){return t.updateProfile(e)}}),e.dispatch("setUserAction",n),w.push({name:"Home"})):(i({displayName:"",uid:"",updateProfile:function(){}}),e.dispatch("setUserAction",n),w.push({name:"Auth"}))})),r(!0)})),{init:t,userObj:n,setUserObj:i,refreshUser:l,onLogOutClick:c,userObjDelete:s}},x=S,P={key:0,class:"menu"},C=Object(a["f"])("홈"),A=Object(a["f"])("서류생성"),q=Object(a["f"])("데이터"),D=Object(a["g"])("br",null,null,-1),N=Object(a["f"])("불러오기"),V=Object(a["f"])("적용 서류"),I=Object(a["g"])("br",null,null,-1),L=Object(a["f"])(" 선택");function U(e,t,n,r,o,u){var i=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",null,["/Auth"!==r.path?(Object(a["q"])(),Object(a["d"])("ul",P,[Object(a["g"])("li",null,[Object(a["g"])("a",null,[Object(a["g"])(i,{to:"/"},{default:Object(a["E"])((function(){return[C]})),_:1})])]),Object(a["g"])("li",null,[Object(a["g"])("a",null,[Object(a["g"])(i,{to:"/CreatePaperForm"},{default:Object(a["E"])((function(){return[A]})),_:1})])]),Object(a["g"])("li",null,[Object(a["g"])("a",null,[Object(a["g"])(i,{to:"/ImportData"},{default:Object(a["E"])((function(){return[q,D,N]})),_:1})])]),Object(a["g"])("li",null,[Object(a["g"])("a",null,[Object(a["g"])(i,{to:"SelectPaperForm"},{default:Object(a["E"])((function(){return[V,I,L]})),_:1})])]),Object(a["g"])("li",null,[Object(a["g"])("a",{id:"AuthLogOut",onClick:t[1]||(t[1]=function(){return r.onLogOutClick&&r.onLogOutClick.apply(r,arguments)})},"로그아웃")]),Object(a["g"])("li",null,[Object(a["g"])("a",{id:"AuthUserDelete",onClick:t[2]||(t[2]=function(){return r.userObjDelete&&r.userObjDelete.apply(r,arguments)})},"계정삭제")])])):Object(a["e"])("",!0)])}var _={setup:function(){var e=Object(l["c"])(),t=Object(a["b"])((function(){return e.path})),n=x(),r=n.onLogOutClick,o=n.userObjDelete;return{path:t,onLogOutClick:r,userObjDelete:o}}};n("3c0f");_.render=U;var E=_,z={components:{NavBar:E},setup:function(){var e=x(),t=e.init,a=e.userObj,r=e.setUserObj,o=e.refreshUser,u=e.onLogOutClick,i=e.userObjDelete,l=n("3067").particlesOption;return{init:t,userObj:a,setUserObj:r,refreshUser:o,onLogOutClick:u,userObjDelete:i,particlesOption:l}}};n("d61c");z.render=r;var F=z,T=Object(u["a"])({state:{userState:JSON.parse(localStorage.getItem("userState"))|{displayName:"",uid:"",updateProfile:function(){}}},mutations:{setUserLogin:function(e,t){e.userState=t,localStorage.setItem("userState",JSON.stringify(t))}},actions:{setUserAction:function(e,t){var n=e.commit;n("setUserLogin",t)}},getters:{getUser:function(e){return e.userState}},modules:{}}),M=n("6aae");Object(a["c"])(F).use(T).use(w).use(M["a"]).mount("#app")},"5e20":function(e,t,n){},"60b9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("260b"),r=(n("ea7b"),n("e71f"),n("588e"),{apiKey:"AIzaSyCfZvx82fapmRzI9O__bqnFnrsSN41aWvA",authDomain:"auto-paper.firebaseapp.com",projectId:"auto-paper",storageBucket:"auto-paper.appspot.com",messagingSenderId:"318183258069",appId:"1:318183258069:web:10b63f6718f94ba2022f5c",measurementId:"G-FFB6PWSQ7W"});a["a"].initializeApp(r);a["a"];var o=a["a"].auth();a["a"].firestore(),a["a"].storage()},"76c3":function(e,t,n){},d61c:function(e,t,n){"use strict";n("5e20")}});
//# sourceMappingURL=app.c81eeb0d.js.map