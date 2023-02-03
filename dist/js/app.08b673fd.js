(function(){"use strict";var e={8800:function(e,t,n){var r=n(9242),o=n(3396);const i={class:"content"};function s(e,t,n,r,s,u){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c)])}var u={},c=n(89);const a=(0,c.Z)(u,[["render",s]]);var l=a;const d=e=>((0,o.dD)("data-v-7537f071"),e=e(),(0,o.Cn)(),e),h={class:"container"},m=d((()=>(0,o._)("h1",null,"Генератор случайных чисел",-1)));function f(e,t,n,r,i,s){const u=(0,o.up)("gen-numbers");return(0,o.wg)(),(0,o.iD)("div",h,[m,(0,o.Wm)(u)])}var b=n(7139);const v=e=>((0,o.dD)("data-v-be0c61a6"),e=e(),(0,o.Cn)(),e),p={class:"numbers"},_={class:"form"},k=(0,o.uE)('<div class="form-block" data-v-be0c61a6><div data-v-be0c61a6>Искать от</div><input id="start" type="number" value="0" data-v-be0c61a6></div><div class="form-block" data-v-be0c61a6><div data-v-be0c61a6>Искать до</div><input id="end" type="number" data-v-be0c61a6></div><div class="form-block" data-v-be0c61a6><div data-v-be0c61a6>Количество</div><input id="count" type="number" value="1" data-v-be0c61a6></div>',3),y={class:"form-block"},g=v((()=>(0,o._)("label",{for:"test1"},"Только целые числа",-1))),w={class:"form-block"},C=v((()=>(0,o._)("label",{for:"test2"},"Целые и дробные числа",-1))),O=v((()=>(0,o._)("div",null,"Количество знаков после запятой",-1))),M=v((()=>(0,o._)("input",{id:"floor",type:"number",placeholder:"0 - 15"},null,-1))),j=[O,M],x=v((()=>(0,o._)("div",{class:"form-block"},[(0,o._)("input",{type:"checkbox",id:"check-repeat",checked:""}),(0,o._)("label",{for:"check-repeat"},"Включить повторение чисел")],-1))),D=v((()=>(0,o._)("button",null,"Поиск",-1))),N={key:0,class:"form-nav"},I=v((()=>(0,o._)("p",null,"Или нажмите на определенное число для копирования",-1))),W=["onClick"];function q(e,t,n,i,s,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",p,[(0,o._)("div",_,[(0,o._)("form",{onSubmit:t[2]||(t[2]=(0,r.iM)(((...e)=>u.randomChoice&&u.randomChoice(...e)),["prevent"]))},[k,(0,o._)("div",y,[(0,o._)("input",{type:"radio",id:"test1",onChange:t[0]||(t[0]=(...e)=>u.floor&&u.floor(...e)),name:"radio-group",checked:""},null,32),g]),(0,o._)("div",w,[(0,o._)("input",{type:"radio",id:"test2",onChange:t[1]||(t[1]=(...e)=>u.floor&&u.floor(...e)),name:"radio-group"},null,32),C]),(0,o._)("div",{class:(0,b.C_)(["form-block floor",{open:this.floorCheck}])},j,2),x,D],32),this.numbers.length?((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("button",{onClick:t[3]||(t[3]=e=>u.copy(this.numbers))},"Копировать все числа"),I])):(0,o.kq)("",!0)]),(0,o._)("div",{class:(0,b.C_)(["number-mas",{open:this.numbers.length}])},[(0,o._)("div",{class:(0,b.C_)(["number-mas__list",{column:this.mode}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.numbers,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"number-mas__number",onClick:t=>u.copy(e)},(0,b.zw)(e),9,W)))),256))],2)],2)]),(0,o._)("div",{class:(0,b.C_)(["copy",{open:this.copyCheck}])},"Скопировано",2)],64)}var S={name:"gen-numbers",data(){return{numbers:[],mode:!1,floorCheck:!1,copyCheck:!1}},methods:{randomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},randomFloat(e,t){return Math.random()*(t-e+1)+e},floor(){this.floorCheck=!this.floorCheck},numberRound(e){let t=1,n=0;while(n<e)t+="0",n++;return Number(t)},countWidth(){let e=document.querySelector(".numbers"),t=document.querySelector(".form"),n=document.querySelector(".number-mas");e&&t&&n&&(n.style.width="0px",n.style.width=e.offsetWidth-t.offsetWidth-10+"px",window.innerWidth<=640&&(n.style.width="100%"))},copy(e){this.copyCheck=!0,navigator.clipboard.writeText(e),setTimeout((()=>{this.copyCheck=!1}),1e3)},randomChoice(){let e=document.querySelector(".form").querySelectorAll("input");if(e.length){let t=0;if(e.forEach((e=>{e.classList.remove("error"),""===e.value&&(e.classList.add("error"),t++),"floor"!==e.id||this.floorCheck||(e.classList.remove("error"),t--)})),!t){this.countWidth(),this.numberRound(8),this.numberRound(2),this.mode=!1;let t=0,n=0,r=0,o=0,i=2,s=!0;if(e.forEach((e=>{"start"===e.id&&(t=Number(e.value)),"end"===e.id&&(n=Number(e.value)),"count"===e.id&&(r=Number(e.value)),"test1"===e.id&&!0===e.checked&&(o=1),"test2"===e.id&&!0===e.checked&&(o=2),"floor"===e.id&&2===o&&(i=Number(e.value)),"check-repeat"===e.id&&!0!==e.checked&&(s=!1)})),2===o&&(this.mode=!0),this.numbers=[],n-t<r&&1===o){let e=document.getElementById("check-repeat");e&&(e.checked=!0),s=!0}if(s){if(1===o)for(let e=0;e<r;e++){let e=this.randomInt(t,n);this.numbers.push(e)}if(2===o){for(let o=0;o<r;o++){let e=this.randomFloat(t,n);this.numbers.push(e)}let e=this.numberRound(i);for(let t=0;t<this.numbers.length;t++)this.numbers[t]=Math.round(this.numbers[t]*e)/e}}else{if(1===o)for(let e=0;e<r;e++){let e=this.randomInt(t,n);while(this.numbers.find((t=>t===e))||0===this.numbers.find((t=>t===e)))e=this.randomInt(t,n);this.numbers.push(e)}if(2===o){for(let o=0;o<r;o++){let e=this.randomFloat(t,n);while(this.numbers.find((t=>t===e))||0===this.numbers.find((t=>t===e)))e=this.randomFloat(t,n);this.numbers.push(e)}let e=this.numberRound(i);for(let t=0;t<this.numbers.length;t++)this.numbers[t]=Math.round(this.numbers[t]*e)/e}}}}console.clear()}},mounted(){console.clear()}};const E=(0,c.Z)(S,[["render",q],["__scopeId","data-v-be0c61a6"]]);var F=E,R={components:{GenNumbers:F},data(){return{}}};const T=(0,c.Z)(R,[["render",f],["__scopeId","data-v-7537f071"]]);var G=T,L=n(2483);const P=[{path:"/GenNumbers/dist/",component:G},{path:"/GenNumbers/dist/:pathMatch(.*)*",component:G}],Z=(0,L.p7)({routes:P,history:(0,L.PO)("/")});var H=Z;const Y=(0,r.ri)(l);Y.use(H).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],u=r[1],c=r[2],a=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);a<s.length;a++)i=s[a],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkvue_projects_new"]=self["webpackChunkvue_projects_new"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8800)}));r=n.O(r)})();
//# sourceMappingURL=app.08b673fd.js.map