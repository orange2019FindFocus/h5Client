(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesMain-user-dailySign"],{"0cbf":function(t,i,n){"use strict";n.r(i);var e=n("aff0"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);i["default"]=a.a},"2f28":function(t,i,n){"use strict";n.r(i);var e=n("c984"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);i["default"]=a.a},"3f0f":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".score-show[data-v-6a930c89]{position:fixed;width:80%;left:10%;bottom:%?100?%;z-index:1000;background:rgba(0,0,0,.6);border-radius:%?8?%;line-height:%?80?%;text-align:center;color:#fff}",""])},4024:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"score-show"},[n("v-uni-text",[t._v(t._s(t.info))])],1)},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})},"600b":function(t,i,n){"use strict";var e=n("c9e9"),a=n.n(e);a.a},"784d":function(t,i,n){"use strict";n.r(i);var e=n("4024"),a=n("2f28");for(var s in a)"default"!==s&&function(t){n.d(i,t,function(){return a[t]})}(s);n("600b");var u=n("2877"),o=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,"6a930c89",null);i["default"]=o.exports},a68f:function(t,i,n){"use strict";n.r(i);var e=n("fd29"),a=n("0cbf");for(var s in a)"default"!==s&&function(t){n.d(i,t,function(){return a[t]})}(s);n("ca96");var u=n("2877"),o=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,"480f820f",null);i["default"]=o.exports},aff0:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=s(n("a34a")),a=s(n("784d"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,i,n,e,a,s,u){try{var o=t[s](u),r=o.value}catch(c){return void n(c)}o.done?i(r):Promise.resolve(r).then(e,a)}function o(t){return function(){var i=this,n=arguments;return new Promise(function(e,a){var s=t.apply(i,n);function o(t){u(s,e,a,o,r,"next",t)}function r(t){u(s,e,a,o,r,"throw",t)}o(void 0)})}}var r={components:{scoreShow:a.default},data:function(){return{weekdays:["日","一","二","三","四","五","六"],year:0,month:0,day:0,monthDays:[],dailySignData:{continues_num:0,active_days:[],score:0,balance:0,today_sign:0},scoreInfo:""}},computed:{},onNavigationBarButtonTap:function(t){0===t.index&&uni.navigateTo({url:"/pagesMain/user/dailySignRule"})},methods:{scoreShowPop:function(t){var i=this;this.scoreInfo=t,setTimeout(function(){i.scoreInfo=""},3e3)},dailySignAction:function(){var t=o(e.default.mark(function t(){var i,n,a,s;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({mask:!0,title:"签到中..."}),t.next=3,this.$store.dispatch("userDailySignAction");case 3:i=t.sent,console.log("userDailySignAction",JSON.stringify(i)),uni.hideLoading(),0==i.code?(n=i.data,a=n.score,n.balance,s="签到成功",a&&(s+=",获得"+a+"积分奖励"),this.scoreShowPop(s),this.getDailySignData()):uni.showToast({icon:"none",title:i.message});case 7:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),getDailySignData:function(){var t=o(e.default.mark(function t(){var i;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("userDailySignDataGet");case 2:i=t.sent,console.log("userDailySignDataGet =====",i),0==i.code&&(this.dailySignData=i.data);case 5:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}()},onLoad:function(){var t=o(e.default.mark(function t(){var i,n,a,s,u,o,r,c,l,d,f;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(i=new Date,this.year=i.getFullYear(),this.month=i.getMonth()+1,this.day=i.getDate(),n=new Date(this.year,this.month,0),a=n.getDate(),s=new Date(this.year,this.month-1,1),u=s.getDay(),console.log("monthDayCount",a),console.log("monthDateFirth",s),console.log("monthFirstWeekday",u),o=0,r=0,c=1,l=[],d=0;d<u;d++)l[o]||(l[o]=[]),l[o].push(""),r++;return t.next=18,this.getDailySignData();case 18:for(d=0;d<a;d++)l[o]||(l[o]=[]),f={},this.dailySignData.active_days.indexOf(c)>-1?(f.day=c,f.active=!0):(f.day=c,f.active=!1),l[o].push(f),c++,r++,r>=7&&(r=0,o++);console.log(l),this.monthDays=l;case 21:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}()};i.default=r},c984:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:{info:{type:String,default:""}}};i.default=e},c9e9:function(t,i,n){var e=n("3f0f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("14cd5f7c",e,!0,{sourceMap:!1,shadowMode:!1})},ca96:function(t,i,n){"use strict";var e=n("e270"),a=n.n(e);a.a},cbaa:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".user-top-1[data-v-480f820f]{position:fixed;width:100%;height:%?500?%}.sign-dot[data-v-480f820f]{display:inline-block;width:%?20?%;height:%?20?%;\n  /* background: #000000; */border-radius:%?10?%;margin-right:%?10?%}.month-day-item[data-v-480f820f]{display:inline-block;width:%?48?%;height:%?48?%;\n  /* background: #000; */border-radius:%?24?%}.month-day-item-today[data-v-480f820f]{background:#ff6262;color:#fff}.month-day-item-active[data-v-480f820f]{background:#007aff;color:#fff}.month-day-item-no-active[data-v-480f820f]{background:#eee\n  /* color: #333333; */}",""])},e270:function(t,i,n){var e=n("cbaa");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("48fe72e8",e,!0,{sourceMap:!1,shadowMode:!1})},fd29:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-page-body"},[n("v-uni-view",{staticClass:"user-top-1 uni-bg-red"}),n("v-uni-view",{staticClass:"uni-common-pa uni-center uni-text-white",staticStyle:{position:"relative"}},[n("v-uni-view",{staticClass:"uni-h4"},[t._v("连续累计签到"),n("v-uni-text",{staticClass:"uni-h1",staticStyle:{"margin-left":"10upx","margin-right":"10upx"}},[t._v(t._s(t.dailySignData.continues_num))]),t._v("天")],1),n("v-uni-view",{},[t._v("累计获得奖励："),n("v-uni-text",{staticClass:"uni-h3 uni-text-yellow",staticStyle:{"margin-left":"10upx","margin-right":"10upx"}},[t._v(t._s(t.dailySignData.score))]),t._v("积分")],1),n("v-uni-view",{staticClass:"uni-common-pt"},[n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-view",{staticStyle:{width:"630upx",height:"48upx"}},[n("v-uni-image",{staticStyle:{width:"630upx",height:"48upx"},attrs:{"lazy-load":"true",src:"/static/img/user/sign-top.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-bg-white "},[n("v-uni-view",{staticClass:"uni-flex uni-center uni-text-light uni-common-pa"},[n("v-uni-view",{staticStyle:{width:"50upx",height:"50upx","margin-right":"10upx"}},[n("v-uni-image",{staticStyle:{width:"50upx",height:"50upx"},attrs:{"lazy-load":"true",src:"../../static/icon/user/sign-calendar.png",mode:""}})],1),n("v-uni-view",{},[t._v("签到记录")]),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-text",{staticClass:"sign-dot uni-bg-blue"}),t._v("已签到")],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-text",{staticClass:"sign-dot uni-bg-gray"}),t._v("未签到")],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-text",{staticClass:"sign-dot uni-bg-pink"}),t._v("今日")],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-center uni-text-dark uni-common-mt"},t._l(t.weekdays,function(i,e){return n("v-uni-view",{key:e,staticClass:"uni-flex-item"},[t._v(t._s(i))])}),1),t._l(t.monthDays,function(i,e){return n("v-uni-view",{key:e,staticClass:"uni-flex uni-common-mt"},t._l(i,function(i,e){return n("v-uni-view",{key:e,staticClass:"uni-center",staticStyle:{width:"90upx"}},[i.day==t.day?[i.active?n("v-uni-text",{staticClass:"month-day-item month-day-item-active"},[t._v(t._s(i.day))]):n("v-uni-text",{staticClass:"month-day-item month-day-item-today"},[t._v(t._s(i.day))])]:t._e(),i.day>t.day?n("v-uni-text",{staticClass:"month-day-item"},[t._v(t._s(i.day))]):t._e(),i.day<t.day&&i.day>0?[i.active?n("v-uni-text",{staticClass:"month-day-item month-day-item-active"},[t._v(t._s(i.day))]):n("v-uni-text",{staticClass:"month-day-item month-day-item-no-active"},[t._v(t._s(i.day))])]:t._e()],2)}),1)}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-view",{staticClass:"uni-common-pl uni-common-pr"},[0==t.dailySignData.today_sign?n("v-uni-view",{staticClass:"uni-bg-pink uni-border-btn-radius",staticStyle:{"line-height":"80upx"},on:{click:function(i){i=t.$handleEvent(i),t.dailySignAction(i)}}},[t._v("我要签到")]):n("v-uni-view",{staticClass:"uni-bg-gray uni-border-btn-radius",staticStyle:{"line-height":"80upx"}},[t._v("已签到")])],1)],1)],1)],2),n("v-uni-view",{staticClass:"uni-common-mt"})],1)],1)],1),n("score-show",{attrs:{info:t.scoreInfo}})],1)},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})}}]);