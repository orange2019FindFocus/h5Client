(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPost-posts-list2"],{"333d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a")),a=i("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,i,n,a,s,u){try{var o=t[s](u),r=o.value}catch(c){return void i(c)}o.done?e(r):Promise.resolve(r).then(n,a)}function o(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var s=t.apply(e,i);function o(t){u(s,n,a,o,r,"next",t)}function r(t){u(s,n,a,o,r,"throw",t)}o(void 0)})}}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){c(t,e,i[e])})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={data:function(){return{showLoadMore:!1,loadMoreText:"加载中...",newsDatas:{},category:""}},computed:r({},(0,a.mapState)(["hasLogin","focusDatas"])),onReachBottom:function(){var t=o(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.showLoadMore=!0,t.next=3,this.initData();case 3:this.showLoadMore=!1;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onPullDownRefresh:function(){var t=o(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("onPullDownRefresh"),this.newsDatas.page=1,this.newsDatas.list=[],this.newsDatas.timestamp=0,t.next=6,this.initData();case 6:uni.stopPullDownRefresh();case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{initData:function(){var t=o(n.default.mark(function t(){var e,i,a,s,u,o=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.category,i={},i.page=this.focusDatas[e].page||1,i.category=this.category,i.type=2,i.timestamp=this.focusDatas[e].timestamp||parseInt(Date.now()/100),t.next=8,this.$store.dispatch("postListGet",i);case 8:a=t.sent,0==a.code&&(s=a.data,this.focusDatas[e].page=s.page+1,this.focusDatas[e].count=s.count,this.focusDatas[e].timestamp=s.timestamp,u=s.rows,u.forEach(function(t){o.focusDatas[e].list.push(t)}));case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goToDetail:function(t){uni.navigateTo({url:"/pagesPost/posts/detail?id="+t.id})}},onLoad:function(){var t=o(n.default.mark(function t(e){var i;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.category,this.category=i,"activity"==i&&uni.setNavigationBarTitle({title:"焦点活动"}),this.focusDatas[i].list||(this.focusDatas[i].list=[]),t.next=6,this.initData();case 6:this.newsDatas=this.focusDatas[i];case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"621a":function(t,e,i){"use strict";i.r(e);var n=i("333d"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},b2da:function(t,e,i){"use strict";i.r(e);var n=i("ef22"),a=i("621a");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);var u=i("2877"),o=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,"05568cb0",null);e["default"]=o.exports},ef22:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-page-body"},[t.newsDatas&&t.newsDatas.list?i("v-uni-view",{},t._l(t.newsDatas.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-bg-white uni-border-top"},[i("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.goToDetail(e)}}},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{"lazy-load":"true",src:e.cover,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"uni-flex uni-bg-white uni-common-pa uni-left",on:{click:function(i){i=t.$handleEvent(i),t.goToDetail(e)}}},[i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-view",{staticClass:"uni-left uni-bold"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"uni-common-pt uni-text-gray uni-flex"},[i("v-uni-view",{staticStyle:{width:"36upx",height:"36upx","padding-top":"6upx"}},[i("v-uni-image",{staticStyle:{width:"36upx",height:"36upx"},attrs:{"lazy-load":"true",src:"/static/icon/posts/eye.png",mode:""}})],1),i("v-uni-view",{staticClass:"uni-flex-item uni-common-ml-sm"},[i("v-uni-text",[t._v(t._s(e.views))])],1),i("v-uni-view",{staticStyle:{width:"36upx",height:"36upx","padding-top":"6upx"}},[i("v-uni-image",{staticStyle:{width:"36upx",height:"36upx",display:"inline-block"},attrs:{"lazy-load":"true",src:"/static/icon/posts/zan.png",mode:""}})],1),i("v-uni-view",{staticClass:"uni-flex-item uni-common-ml-sm"},[i("v-uni-text",[t._v(t._s(e.likes))])],1),i("v-uni-view",{staticStyle:{width:"36upx",height:"36upx","padding-top":"6upx"}},[i("v-uni-image",{staticStyle:{width:"36upx",height:"36upx",display:"inline-block"},attrs:{"lazy-load":"true",src:"/static/icon/posts/share.png",mode:""}})],1),i("v-uni-view",{staticClass:"uni-flex-item uni-common-ml-sm"},[i("v-uni-text",[t._v(t._s(e.shares))])],1)],1)],1)],1)],1)})):t._e(),t.showLoadMore?i("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);