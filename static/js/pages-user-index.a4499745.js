(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{"018f":function(t,e,i){"use strict";i.r(e);var n=i("c64c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"227e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:String,items:Array,hasLogin:Boolean},methods:{goTo:function(t){this.hasLogin?uni.navigateTo({url:t,fail:function(){console.log("跳转失败")}}):uni.navigateTo({url:"/pages/auth/login"})}}};e.default=n},2489:function(t,e,i){"use strict";i.r(e);var n=i("8d4d"),a=i("d5e8");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("9bb0");var r=i("2877"),u=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"17dc041c",null);e["default"]=u.exports},"330f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page-user-head[data-v-f3ea9278]{\n\nbackground:-webkit-gradient(linear,left top,left bottom,from(#ff5d44),to(#d81e06));background:-o-linear-gradient(#ff5d44,#d81e06);background:linear-gradient(#ff5d44,#d81e06);\ncolor:#fff;padding-bottom:%?150?%}.user-avatar[data-v-f3ea9278]{width:%?94?%;height:%?94?%;border-radius:%?50?%;overflow:hidden;border:%?6?% solid #febdb5}.page-user-content[data-v-f3ea9278]{position:relative;top:%?-150?%}.user-avatar uni-image[data-v-f3ea9278]{width:%?100?%;height:%?100?%}.user-box-vip[data-v-f3ea9278]{padding-top:%?32?%;margin-right:%?8?%;background:#fff}.user-box-ecard[data-v-f3ea9278]{padding-top:%?32?%;margin-left:%?8?%;background:#fff}.user-box-detail-link[data-v-f3ea9278]{border-radius:%?32?%;margin-top:%?16?%}",""])},"64df":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-user"},[i("uni-nav-bar",{attrs:{color:"#333333","background-color":t.barBgColor,fixed:"true",shadow:"false"},on:{"click-right":function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/setting")}}},[i("template",{attrs:{slot:"left"},slot:"left"}),i("v-uni-view",{staticClass:"uni-center uni-text-white uni-common-ml uni-bold"},[t._v("个人中心")]),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticClass:"uni-common-pr"},[i("uni-icon",{attrs:{type:"gear-filled",size:"24",color:"#fff"}})],1)],1)],2),i("v-uni-view",{staticClass:"uni-padding-wrap page-user-head"},[i("v-uni-view",{staticStyle:{height:"160upx"}}),t.hasLogin?i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb"},[i("v-uni-view",{staticClass:"user-avatar",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/setting")}}},[t.userInfo.avatar?i("v-uni-image",{attrs:{"lazy-load":"true",src:t.userInfo.avatar,mode:"scaleToFill"}}):t._e()],1),i("v-uni-view",{staticClass:"uni-flex uni-flex-item uni-common-pl"},[i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/setting")}}},[t._v(t._s(t.userInfo.nickname||"还未设置"))]),t.isVip?i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/vip")}}},[i("v-uni-image",{staticStyle:{width:"120upx",height:"30upx"},attrs:{"lazy-load":"true",src:"/static/icon/user/vip-tag.png",mode:"scaleToFill"}})],1):i("v-uni-view",{staticClass:"uni-text-yellow uni-text-small"},[i("v-uni-navigator",{attrs:{url:"/pagesUser/user/vipOrder"}},[t._v("vip充值")])],1)],1),i("v-uni-view",{staticClass:"uni-flex-item uni-right"},[i("v-uni-navigator",{attrs:{url:"/pagesMain/notice/notice"}},[i("uni-icon",{attrs:{type:"chat",size:"32"}})],1)],1)],1)],1):i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb"},[i("v-uni-view",{staticClass:"user-avatar",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/setting")}}}),i("v-uni-view",{staticClass:"uni-flex uni-flex-item uni-common-pl"},[i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{staticClass:"uni-common-pt"},[i("v-uni-navigator",{attrs:{url:"/pages/auth/login","hover-class":"navigator-hover"}},[t._v("还未登录，去登录")])],1)],1),i("v-uni-view",{staticClass:"uni-flex-item uni-right"},[i("v-uni-navigator",{attrs:{url:"/pagesMain/notice/notice"}},[i("uni-icon",{attrs:{type:"chat",size:"32",color:"#ffffff"}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-common-pa page-user-content"},[i("v-uni-view",{staticClass:"uni-center uni-bg-white ",staticStyle:{"border-radius":"8upx 8upx 0 0"}},[i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb uni-border-bottom uni-radius-big"},[i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{staticClass:"uni-text-dark"},[t._v("总收益")]),i("v-uni-view",{staticClass:"uni-h4"},[t._v(t._s(t.userIndexData.balance))])],1),i("v-uni-view",{staticClass:"uni-flex-item uni-common-pt",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/assetsOut")}}},[i("v-uni-text",{staticClass:"uni-bg-red",staticStyle:{padding:"12upx 36upx","border-radius":"8upx"}},[t._v("提现")])],1),i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{staticClass:"uni-text-dark"},[t._v("积分余额")]),i("v-uni-view",{staticClass:"uni-h4"},[t._v(t._s(t.userIndexData.score))])],1)],1),i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb uni-text-lighter"},[i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{},[t._v("浏览量")]),i("v-uni-view",{},[t._v(t._s(t.userIndexData.count.views))])],1),i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{},[t._v("评论量")]),i("v-uni-view",{},[t._v(t._s(t.userIndexData.count.comments))])],1),i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{},[t._v("点赞量")]),i("v-uni-view",{},[t._v(t._s(t.userIndexData.count.likes))])],1),i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{},[t._v("转发量")]),i("v-uni-view",{},[t._v(t._s(t.userIndexData.count.shares))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-common-mt"},[i("user-card",{attrs:{title:t.cards[0].title,items:t.cards[0].items,hasLogin:t.hasLogin}})],1),i("v-uni-view",{staticClass:"uni-common-mt uni-flex"},[i("v-uni-view",{staticClass:"uni-flex-item uni-flex user-box-vip uni-common-pa",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/vip")}}},[i("v-uni-view",{staticClass:"uni-flex-item uni-common-pr",staticStyle:{width:"120upx",height:"120upx"}},[i("v-uni-image",{staticStyle:{width:"120upx",height:"120upx"},attrs:{"lazy-load":"true",src:"/static/icon/user/vip.png",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{staticClass:"uni-text-dark uni-common-mt"},[t._v("会员权益")])],1)],1),i("v-uni-view",{staticClass:"uni-flex-item uni-flex user-box-ecard uni-common-pa",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesMain/user/ecard")}}},[i("v-uni-view",{staticClass:"uni-flex-item uni-common-pr",staticStyle:{width:"120upx",height:"120upx"}},[i("v-uni-image",{staticStyle:{width:"120upx",height:"120upx"},attrs:{"lazy-load":"true",src:"/static/icon/user/ecard.png",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{staticClass:"uni-text-dark uni-common-mt"},[t._v("代金券")])],1)],1)],1),i("v-uni-view",{staticClass:"uni-common-mt",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesMain/user/dailySignHongbao")}}},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{"lazy-load":"true",src:"/static/img/user/user-daily-sign.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"uni-common-mt"},[i("user-card",{attrs:{title:t.cards[1].title,items:t.cards[1].items,hasLogin:t.hasLogin}})],1),i("v-uni-view",{staticClass:"uni-common-mt"},[i("user-card",{attrs:{title:t.cards[2].title,items:t.cards[2].items,hasLogin:t.hasLogin}})],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},8519:function(t,e,i){var n=i("92ea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("eba772cc",n,!0,{sourceMap:!1,shadowMode:!1})},"8d4d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user-card uni-bg-white"},[i("v-uni-view",{staticClass:"user-card-header uni-common-pa uni-border-bottom uni-bold"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"user-card-body"},[t.items.length?t._l(t.items,function(e,n){return i("v-uni-view",{key:n,staticClass:"user-card-item",on:{click:function(i){i=t.$handleEvent(i),t.goTo(e.path)}}},[i("v-uni-view",{staticClass:"uni-common-pa"},[i("v-uni-view",{staticClass:"user-card-item-img"},[i("v-uni-image",{attrs:{"lazy-load":"true",src:"/static/icon/user/"+e.icon+".png",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-text-light"},[t._v(t._s(e.text))])],1)],1)}):t._e()],2)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"92ea":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".user-card-body[data-v-17dc041c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.user-card-item[data-v-17dc041c]{width:25%;text-align:center}.user-card-item-img[data-v-17dc041c]{text-align:center}.user-card-item-img uni-image[data-v-17dc041c]{width:%?48?%;height:%?48?%}",""])},"939e":function(t,e,i){"use strict";var n=i("eaa8"),a=i.n(n);a.a},"9bb0":function(t,e,i){"use strict";var n=i("8519"),a=i.n(n);a.a},c64c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("a34a")),a=o(i("2489")),s=o(i("7efa")),r=o(i("ec9c")),u=i("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e,i,n,a,s,r){try{var u=t[s](r),o=u.value}catch(c){return void i(c)}u.done?e(o):Promise.resolve(o).then(n,a)}function l(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var s=t.apply(e,i);function r(t){c(s,n,a,r,u,"next",t)}function u(t){c(s,n,a,r,u,"throw",t)}r(void 0)})}}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){d(t,e,i[e])})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={components:{UserCard:a.default,uniIcon:s.default,uniNavBar:r.default},computed:v({},(0,u.mapState)(["hasLogin","userInfo","isVip","userIndexData","userDataRefresh"])),methods:v({},(0,u.mapActions)(["authLogout"]),{logout:function(){this.authLogout(),uni.navigateTo({url:"../auth/login"})},goToPage:function(t){this.hasLogin?uni.navigateTo({url:t}):uni.navigateTo({url:"../auth/login"})},refresh:function(){this.hasLogin&&this.$store.dispatch("userIndexDataGet")}}),onNavigationBarButtonTap:function(t){0===t.index&&(this.hasLogin?uni.navigateTo({url:"/pagesUser/user/setting"}):uni.navigateTo({url:"../auth/login"}))},data:function(){return{barBgColor:"transparent",cards:[{title:"我的服务",items:[{text:"收益记录",icon:"trade",path:"/pagesUser1/user/trade"},{text:"商城订单",icon:"order",path:"/pagesMain/user/orders"},{text:"我的售后",icon:"after",path:"/pagesUser1/user/orderAfters"},{text:"我的团队",icon:"team",path:"/pagesUser/user/inviteList"},{text:"我的评价",icon:"rate",path:"/pagesUser1/user/orderRates"},{text:"品牌申请",icon:"brand",path:"/pagesUser1/user/brandApply"}]},{title:"我的足迹",items:[{text:"收货地址",icon:"address",path:"/pagesMain/user/address?from=user"},{text:"我的评论",icon:"comment",path:"/pagesUser1/user/postComments"},{text:"我的收藏",icon:"like",path:"/pagesUser1/user/collection"},{text:"我的评测",icon:"posts",path:"/pagesUser1/user/postsList"}]},{title:"每日任务",items:[{text:"推荐注册",icon:"invite-reg",path:"/pagesUser/user/invite"},{text:"登录签到",icon:"daily-sign",path:"/pagesMain/user/dailySign"},{text:"文章评论",icon:"post-comment",path:"/pagesPost/posts/news"},{text:"内容点赞",icon:"post-like",path:"/pagesPost/posts/news"}]}]}},onLoad:function(){var t=l(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.hasLogin){t.next=3;break}return t.next=3,this.$store.dispatch("userIndexDataGet");case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){this.refresh()},onPullDownRefresh:function(){var t=l(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.refresh();case 2:uni.stopPullDownRefresh();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onPageScroll:function(t){var e=t.scrollTop;this.barBgColor=e>0?"#d81e06":"transparent"}};e.default=f},d5e8:function(t,e,i){"use strict";i.r(e);var n=i("227e"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},eaa8:function(t,e,i){var n=i("330f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("17c36d84",n,!0,{sourceMap:!1,shadowMode:!1})},f8f0:function(t,e,i){"use strict";i.r(e);var n=i("64df"),a=i("018f");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("939e");var r=i("2877"),u=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"f3ea9278",null);e["default"]=u.exports}}]);