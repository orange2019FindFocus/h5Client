(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPost-posts-news"],{4292:function(e,t,n){var s=n("e84a");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var i=n("4f06").default;i("737f391a",s,!0,{sourceMap:!1,shadowMode:!1})},6900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("a34a")),i=n("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,s,i,r,a){try{var o=e[r](a),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(s,i)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(s,i){var r=e.apply(t,n);function o(e){a(r,s,i,o,l,"next",e)}function l(e){a(r,s,i,o,l,"throw",e)}o(void 0)})}}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{channels:[{id:"all",name:"全部"}],currentIndex:0,scrollTop:0,scrollLeft:0,swiperHeight:0,newsItems:{},showLoadMore:!1,loadMoreText:"",refreshDisplay:"none"}},computed:l({},(0,i.mapState)(["postChannels","newsDatas"])),onLoad:function(){var e=o(s.default.mark(function e(t){var n,i,r,a,o=this;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.channel||"all",this.newsItems=this.newsDatas,this.postChannels.length){e.next=5;break}return e.next=5,this.$store.dispatch("postChannelsGet",{type:1});case 5:for({},i=0;i<this.postChannels.length;i++)r=this.postChannels[i],this.channels.push({id:r,name:r}),r==n&&(this.currentIndex=i+1);if(this.currentIndex>=5?this.scrollLeft=75*this.currentIndex:this.scrollLeft=0,console.log(this.scrollLeft,"scrollLeftscrollLeftscrollLeftscrollLeftscrollLeftscrollLeft"),this.newsItems[n]&&this.newsItems[n].list&&this.newsItems[n].list.length){e.next=16;break}return a=this.channels[this.currentIndex],this.refreshDisplay="block",e.next=14,this.getNewsData(a,!0);case 14:e.sent,setTimeout(function(){o.refreshDisplay="none"},500);case 16:console.log(this.newsItems,!0);case 17:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onReady:function(){var e=o(s.default.mark(function e(){var t,n=this;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=uni.createSelectorQuery().select(".uni-page-body"),t.fields({size:!0,scrollOffset:!0},function(e){console.log("得到节点信息"+JSON.stringify(e)),console.log("节点的宽为"+e.width),n.swiperHeight=e.height-50+"px"}).exec();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{getChannelData:function(){var e=o(s.default.mark(function e(t){var n,i=this;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.newsItems[t]&&this.newsItems[t].list&&this.newsItems[t].list.length){e.next=7;break}return n=this.channels[this.currentIndex],this.refreshDisplay="block",e.next=5,this.getNewsData(n,!0);case 5:e.sent,setTimeout(function(){i.refreshDisplay="none"},500);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),tapChannel:function(){var e=o(s.default.mark(function e(t,n){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.currentIndex=n;case 1:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),changeTab:function(){var e=o(s.default.mark(function e(t){var n,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("changeTab",t),n=t.detail.current,this.currentIndex=n,this.scrollLeft=n>=5?75*n:0,i=this.channels[n],e.next=7,this.getChannelData(i.id);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),goToDetail:function(e){uni.navigateTo({url:"/pagesPost/posts/detail?id="+e.id})},refresh:function(){var e=o(s.default.mark(function e(t){var n,i,r,a=this;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("refresh",t.id),n=this.newsItems[t.id]||{},i=n.timestamp||0,r=parseInt(Date.now()/1e3),!(i&&r-i<900)){e.next=7;break}return console.log("refresh stop"),e.abrupt("return");case 7:return this.refreshDisplay="block",e.next=10,this.getNewsData(t,!0);case 10:e.sent,setTimeout(function(){a.refreshDisplay="none"},500);case 12:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getNewsData:function(){var e=o(s.default.mark(function e(t){var n,i,r,a,o,l,c,u,h,p=arguments;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]&&p[1],i=t.id,r=parseInt(Date.now()/1e3),console.log("channel",i),a=this.newsItems[i],o={},o.type=1,a||(this.newsItems[i]={},this.newsItems[i].list=[]),a&&a.list.length?(o.page=a.page,o.channel=i,o.timestamp=a.timestamp):(o.page=1,o.channel=i,o.timestamp=r),n&&(o.page=1,o.channel=i,o.timestamp=r,this.newsItems[i].list=[]),console.log("params",o),e.next=13,this.$store.dispatch("postListGet",o);case 13:if(l=e.sent,0==l.code)for(c=l.data,u=c.rows,this.newsItems[i].count=c.count,this.newsItems[i].page=c.page+1,this.newsItems[i].timestamp=c.timestamp,h=0;h<u.length;h++)this.newsItems[i].list.push(u[h]);return e.abrupt("return",l);case 16:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),loadMore:function(){var e=o(s.default.mark(function e(t){var n,i=this;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("load more ..."),this.showLoadMore=!0,this.loadMoreText="加载更多...",e.next=5,this.getNewsData(t);case 5:n=e.sent,0==n.data.rows.length?(this.loadMoreText="无更多",setTimeout(function(){i.showLoadMore=!1,i.loadMoreText=""},1500)):(this.showLoadMore=!1,this.loadMoreText="");case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}};t.default=u},"6fbe":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-page-body uni-bg-white uni-border-top"},[n("v-uni-scroll-view",{staticClass:"uni-swiper-tab news-channels",attrs:{"scroll-x":"true","scroll-left":e.scrollLeft}},e._l(e.channels,function(t,s){return n("v-uni-view",{key:s,class:["swiper-tab-list",e.currentIndex==s?"active":""],on:{click:function(n){n=e.$handleEvent(n),e.tapChannel(t,s)}}},[e._v(e._s(t.name))])})),n("v-uni-view",{staticClass:"uni-common-pa uni-center",style:{display:e.refreshDisplay}},[e._v("加载中...")]),n("v-uni-swiper",{staticClass:"swiper-box",style:{height:e.swiperHeight},attrs:{"indicator-dots":!1,autoplay:!1,interval:3e3,duration:500,current:e.currentIndex},on:{change:function(t){t=e.$handleEvent(t),e.changeTab(t)}}},e._l(e.channels,function(t,s){return n("v-uni-swiper-item",{key:s},[n("v-uni-view",{staticClass:"swiper-item news-swiper-item"},[e.newsItems[t.id]&&e.newsItems[t.id].count?n("v-uni-scroll-view",{staticClass:"scroll-Y",style:{height:e.swiperHeight},attrs:{"scroll-top":e.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(n){n=e.$handleEvent(n),e.refresh(t)},scrolltolower:function(n){n=e.$handleEvent(n),e.loadMore(t)}}},e._l(e.newsItems[t.id].list,function(t,s){return n("v-uni-view",{key:s,staticClass:"uni-bg-white uni-common-pl uni-common-pr"},[n("v-uni-view",{staticClass:"uni-common-pt uni-common-pb uni-border-bottom",on:{click:function(n){n=e.$handleEvent(n),e.goToDetail(t)}}},[1==t.type?n("v-uni-view",{staticClass:"uni-flex"},e._l(t.imgs,function(t,s){return s<3?n("v-uni-view",{key:s,staticClass:"uni-common-mr"},[n("v-uni-image",{staticClass:"post-list-cover-inline",attrs:{"lazy-load":"true",src:t.url,mode:"scaleToFill"}})],1):e._e()})):e._e(),4==t.type?n("v-uni-view",{staticClass:"uni-flex"},[n("v-uni-image",{staticStyle:{width:"720upx",height:"240upx","border-radius":"8upx"},attrs:{"lazy-load":"true",src:t.cover,mode:"scaleToFill"}})],1):e._e(),n("v-uni-view",{staticClass:"post-list-content-inline"},[n("v-uni-view",{staticClass:"uni-bold title"},[e._v(e._s(t.title))]),n("v-uni-view",{staticClass:"uni-text-gray uni-flex icon-items"},[n("v-uni-view",{staticClass:"icon-img"},[n("v-uni-image",{staticClass:"icon-img",attrs:{"lazy-load":"true",src:"/static/icon/posts/eye.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item "},[n("v-uni-text",[e._v(e._s(t.views))])],1),n("v-uni-view",{staticClass:"icon-img"},[n("v-uni-image",{staticClass:"icon-img",attrs:{"lazy-load":"true",src:"/static/icon/posts/zan.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-text",[e._v(e._s(t.likes))])],1),n("v-uni-view",{staticClass:"icon-img"},[n("v-uni-image",{staticClass:"icon-img",attrs:{"lazy-load":"true",src:"/static/icon/posts/share.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-text",[e._v(e._s(t.shares))])],1)],1)],1)],1)],1)})):e._e()],1)],1)})),e.showLoadMore?n("v-uni-view",{staticClass:"uni-center uni-common-pa"},[e._v(e._s(e.loadMoreText))]):e._e()],1)},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},7316:function(e,t,n){"use strict";var s=n("4292"),i=n.n(s);i.a},d139:function(e,t,n){"use strict";n.r(t);var s=n("6fbe"),i=n("d2f0");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("7316");var a=n("2877"),o=Object(a["a"])(i["default"],s["a"],s["b"],!1,null,"e720157e",null);t["default"]=o.exports},d2f0:function(e,t,n){"use strict";n.r(t);var s=n("6900"),i=n.n(s);for(var r in s)"default"!==r&&function(e){n.d(t,e,function(){return s[e]})}(r);t["default"]=i.a},e84a:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper-tab-list.active[data-v-e720157e]{color:#d81e06}.news-swiper[data-v-e720157e]{display:block;height:100%}.news-swiper .news-swiper-item[data-v-e720157e]{height:100%}.scroll-Y .scroll-view-item[data-v-e720157e]{height:%?600?%}',""])}}]);