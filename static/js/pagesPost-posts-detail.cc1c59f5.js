(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPost-posts-detail"],{"09bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["uni-popup","uni-popup-"+t.type]},[t._v(t._s(t.msg)),t._t("default")],2)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"1eab":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"2c8c":function(t,e,n){"use strict";n.r(e);var i=n("7928"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},"2f28":function(t,e,n){"use strict";n.r(e);var i=n("c984"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},"340a":function(t,e,n){"use strict";n.r(e);var i=n("a779"),o=n("2c8c");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("6607");var a=n("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"2749bd9f",null);e["default"]=r.exports},"3e22":function(t,e,n){"use strict";n.r(e);var i=n("fec9"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},"3f0f":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".score-show[data-v-6a930c89]{position:fixed;width:80%;left:10%;bottom:%?100?%;z-index:1000;background:rgba(0,0,0,.6);border-radius:%?8?%;line-height:%?80?%;text-align:center;color:#fff}",""])},4024:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"score-show"},[n("v-uni-text",[t._v(t._s(t.info))])],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"5baf":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-mask[data-v-4f136e98]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-4f136e98]{position:absolute;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-4f136e98]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:%?380?%;height:%?380?%;border-radius:%?10?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?30?%}.uni-popup-top[data-v-4f136e98]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-4f136e98]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}",""])},"600b":function(t,e,n){"use strict";var i=n("c9e9"),o=n.n(i);o.a},"63c7":function(t,e,n){"use strict";n.r(e);var i=n("1eab"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},6607:function(t,e,n){"use strict";var i=n("efe6"),o=n.n(i);o.a},"784d":function(t,e,n){"use strict";n.r(e);var i=n("4024"),o=n("2f28");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("600b");var a=n("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"6a930c89",null);e["default"]=r.exports},7928:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("a34a")),o=n("2f62"),s=c(n("b3f3")),a=c(n("7efa")),r=c(n("91c9")),u=c(n("784d"));function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e,n,i,o,s,a){try{var r=t[s](a),u=r.value}catch(c){return void n(c)}r.done?e(u):Promise.resolve(u).then(i,o)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var s=t.apply(e,n);function a(t){l(s,i,o,a,r,"next",t)}function r(t){l(s,i,o,a,r,"throw",t)}a(void 0)})}}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={components:{uniIcon:a.default,uniPopup:r.default,scoreShow:u.default},data:function(){return{info:{},commentText:"写评论...",commentTextVal:"",commentTextPlaceholder:"写评论...",commentPopupShow:!1,commentId:0,commentList:[],commentCount:0,scoreInfo:""}},computed:f({},(0,o.mapState)(["hasLogin","userInfo","postInfo","webDomain","miniAppId","miniAppOrId","viewActionOpen"]),{shareId:function(){return this.$store.state.inviteShareId}}),methods:{scoreShowPop:function(t){var e=this;this.scoreInfo=t,setTimeout(function(){e.scoreInfo=""},3e3)},postComments:function(){this.hasLogin?this.commentPopupShow=!0:uni.navigateTo({url:"/pages/auth/login"})},commentReply:function(t){this.commentId=t.id,this.commentTextPlaceholder="回复评论...",this.postComments()},commentPost:function(t){this.commentId=0,this.commentTextPlaceholder="写评论...",this.postComments()},commentLike:function(){var t=p(i.default.mark(function t(e){var n,o,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasLogin){t.next=3;break}return uni.navigateTo({url:"/pages/auth/login"}),t.abrupt("return");case 3:return n={comment_id:e.id},console.log("commentLike",n),uni.showLoading({mask:!0,title:"提交中..."}),t.next=8,this.$store.dispatch("postCommentLikeAction",n);case 8:o=t.sent,uni.hideLoading(),0==o.code?(o.data&&(s=o.data.score||0,s&&this.scoreShowPop("点赞评论获得"+o.data.score+"积分")),this.commentListGet()):uni.showToast({title:o.message,icon:"none"});case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),commentConfirm:function(){var t=p(i.default.mark(function t(){var e,n;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={},e.post_id=this.postInfo.uuid,e.pid=this.commentId,e.info=this.commentTextVal,""!==e.info){t.next=7;break}return uni.showToast({title:"还未写下评论",icon:"none"}),t.abrupt("return");case 7:return uni.showLoading({title:"提交中..."}),console.log("commentConfirm postData",e),t.next=11,this.$store.dispatch("postCommentConfirm",e);case 11:n=t.sent,console.log("postCommentConfirm ret",JSON.stringify(n)),uni.hideLoading(),0==n.code?(uni.showToast({title:"发布评论成功",icon:"success"}),n.data.score&&this.scoreShowPop("发布评论获得"+n.data.score+"积分"),this.commentTextVal="",this.commentPopupHide(),this.commentListGet()):uni.showToast({title:n.message,icon:"none"});case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),commentPopupHide:function(){this.commentPopupShow=!1,this.commentText=this.commentTextVal||"写评论..."},goToCommentList:function(){uni.navigateTo({url:"/pagesPost/posts/commentList?post_id="+this.postInfo.uuid})},goToCommentDetail:function(t){uni.navigateTo({url:"/pagesPost/posts/commentDetail?post_id="+this.postInfo.uuid+"&comment_id="+t.id})},postCollection:function(){var t=p(i.default.mark(function t(){var e,n,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasLogin){t.next=3;break}return uni.navigateTo({url:"/pages/auth/login"}),t.abrupt("return");case 3:return console.log("postCollection"),e={category:"posts",type:this.postInfo.type,post_id:this.postInfo.id},uni.showLoading({mask:!0,title:"提交中..."}),t.next=8,this.$store.dispatch("userCollectionAction",e);case 8:n=t.sent,console.log("userCollectionAction ret",JSON.stringify(n)),uni.hideLoading(),0==n.code?(uni.showToast({title:n.message||"收藏成功",icon:"success"}),o=n.data&&n.data.score||0,o&&this.scoreShowPop("收藏文章获得"+n.data.score+"积分"),this.$store.dispatch("postInfoGet",{id:this.postInfo.id}),console.log("postInfoGet again postInfo",this.postInfo)):uni.showToast({title:n.message,icon:"none"});case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),postLike:function(){var t=p(i.default.mark(function t(){var e,n,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasLogin){t.next=3;break}return uni.navigateTo({url:"/pages/auth/login"}),t.abrupt("return");case 3:return console.log("postLike"),e={post_id:this.postInfo.uuid},uni.showLoading({mask:!0,title:"提交中..."}),t.next=8,this.$store.dispatch("postLikeAction",e);case 8:if(n=t.sent,console.log("postLikeAction ret",n),uni.hideLoading(),0!=n.code){t.next=20;break}return uni.showToast({title:"点赞成功",icon:"success"}),o=n.data&&n.data.score||0,o&&this.scoreShowPop("点赞文章获得"+n.data.score+"积分"),t.next=17,this.$store.dispatch("postInfoGet",{id:this.postInfo.id});case 17:console.log("postInfoGet again postInfo",this.postInfo),t.next=21;break;case 20:uni.showToast({title:n.message,icon:"none"});case 21:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),viewAction:function(){var t=p(i.default.mark(function t(){var e,n,o,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("viewAction=========================start"),e=this.$store.state.viewActionOpen,console.log("viewAction=========================",e),e&&this.hasLogin){t.next=5;break}return t.abrupt("return");case 5:return n={post_id:this.postInfo.uuid},t.next=8,this.$store.dispatch("postViewAction",n);case 8:o=t.sent,console.log("viewAction ============= ret",o),0==o.code&&o.data&&(s=o.data.score||0,s&&this.scoreShowPop("阅读文章获得"+o.data.score+"积分"));case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),postShare:function(){var t=p(i.default.mark(function t(){var e,n,o,a,r,u,c,l,p;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return uni.navigateTo({url:"/pages/auth/guide"}),t.abrupt("return");case 5:return e=0,n={},n.category="posts",n.post_id=this.postInfo.id,n.goods_id=this.postInfo.goods_id||0,t.next=12,this.$store.dispatch("userShareInfoGet",n);case 12:if(o=t.sent,console.log("userShareInfoGet shareRet:"+JSON.stringify(o)),0!=o.code){t.next=19;break}a=o.data.info,e=a.id,t.next=21;break;case 19:return uni.showToast({icon:"none",title:"分享发生错误，请稍后重试"}),t.abrupt("return");case 21:r="pagesPost/posts/detail",r=r+"?id="+this.postInfo.id+"&puid="+this.userInfo.user_id+"&share_id="+e,u=this.webDomain+"/"+r,c=this.postInfo.type,console.log("分享 postType",c,u),l=this.postInfo.cover,1!=c&&(l+="!goodsCover"),p={title:this.postInfo.title,description:this.postInfo.description,href:u,imgUrl:l,miniAppId:this.miniAppOrId,miniPage:r},uni.showActionSheet({itemList:["分享给QQ好友","分享到微信朋友圈","分享到微信好友"],success:function(t){var e=t.tapIndex;0==e?s.default.qq(p):1==e?s.default.wx(p,1):2==e&&s.default.mini(p,0)}});case 30:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),commentListGet:function(){var t=p(i.default.mark(function t(){var e,n;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={post_id:this.postInfo.uuid},t.next=3,this.$store.dispatch("postCommentListGet",e);case 3:return n=t.sent,console.log("commentListGet ret",n),0==n.code&&(this.commentList=n.data.rows,this.commentCount=n.data.count),t.abrupt("return",n);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pageScroll:function(t){console.log("onPageScroll==================",t.detail.scrollTop),this.$store.state.viewActionOpen=!0}},onLoad:function(){var t=p(i.default.mark(function t(e){var n,o,s,a,r=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("onLoad ============= "),this.$store.state.postInfo={},n=e.share_id||0,n&&(this.$store.state.inviteShareId=n),o=e.puid||0,o&&(this.$store.state.inviteUserId=o),s=e.id,t.next=9,this.$store.dispatch("postInfoGet",{id:s,share_id:n});case 9:a=t.sent,console.log("onLoad postInfoGet ret ==============",a),this.commentListGet(),0==this.postInfo.status&&uni.redirectTo({url:"/pagesPost/posts/error"}),uni.setNavigationBarTitle({title:this.postInfo.title}),setTimeout(function(){r.viewAction()},6e3);case 15:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=p(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("============= onShow"),console.log(this.postInfo.id),!this.postInfo.id){t.next=8;break}return t.next=5,this.$store.dispatch("postInfoGet",{id:this.postInfo.id});case 5:e=t.sent,console.log("onShow postInfoGet ret ==============",e),this.commentListGet();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onNavigationBarButtonTap:function(t){0===t.index&&this.postShare()},onPullDownRefresh:function(){var t=p(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("postInfoGet",{id:this.postInfo.id});case 2:e=t.sent,console.log("onPullDownRefresh postInfoGet ret ==============",e),this.commentListGet(),uni.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onHide:function(){this.$store.state.viewActionOpen=!1,console.log("onHide ============",this.$store.state.viewActionOpen)},onReachBottom:function(){console.log("到底部")},onUnload:function(){this.$store.state.viewActionOpen=!1,console.log("onUnload ============",this.$store.state.viewActionOpen)},onPageScroll:function(){this.$store.state.viewActionOpen=!0}};e.default=m},"7dce":function(t,e,n){var i=n("5baf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("39ce243f",i,!0,{sourceMap:!1,shadowMode:!1})},"7efa":function(t,e,n){"use strict";n.r(e);var i=n("fde5"),o=n("63c7");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var a=n("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"91c9":function(t,e,n){"use strict";n.r(e);var i=n("09bc"),o=n("3e22");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("e580");var a=n("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"4f136e98",null);e["default"]=r.exports},a779:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-page-body uni-bg-white",attrs:{sstyle:"height: 100%;"}},[n("v-uni-view",{staticClass:"uni-bg-white uni-common-pa",attrs:{id:"post-content uni-border-top"}},[n("v-uni-view",{staticClass:"uni-bold uni-h4"},[t._v(t._s(t.postInfo.title))]),n("v-uni-view",{staticClass:"uni-common-mt-sm uni-text-gray uni-text-small"},[t._v("发布时间: "+t._s(t.postInfo.publish_time))]),n("v-uni-view",{staticClass:"uni-common-mt-sm uni-text-gray uni-flex "},[n("v-uni-view",{staticStyle:{width:"36upx",height:"36upx","padding-top":"6upx"}},[n("v-uni-image",{staticStyle:{width:"36upx",height:"36upx"},attrs:{"lazy-load":"true",src:"/static/icon/posts/eye.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item uni-common-ml-sm"},[n("v-uni-text",[t._v(t._s(t.postInfo.views))])],1),n("v-uni-view",{staticStyle:{width:"36upx",height:"36upx","padding-top":"6upx"}},[n("v-uni-image",{staticStyle:{width:"36upx",height:"36upx",display:"inline-block"},attrs:{"lazy-load":"true",src:"/static/icon/posts/zan.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item uni-common-ml-sm"},[n("v-uni-text",[t._v(t._s(t.postInfo.likes))])],1),n("v-uni-view",{staticStyle:{width:"36upx",height:"36upx","padding-top":"6upx"}},[n("v-uni-image",{staticStyle:{width:"36upx",height:"36upx",display:"inline-block"},attrs:{"lazy-load":"true",src:"/static/icon/posts/share.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item uni-common-ml-sm"},[n("v-uni-text",[t._v(t._s(t.postInfo.shares))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-bg-white uni-border-top"},[t.postInfo.video?n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-view",{},[n("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:t.postInfo.video,controls:""}})],1)],1):t._e(),t.postInfo.audio?n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-audio",{attrs:{src:t.postInfo.audio,name:t.postInfo.title,controls:""}})],1):t._e(),n("v-uni-view",{staticClass:"uni-common-pa post-content"},[n("v-uni-rich-text",{staticClass:"content-html",attrs:{nodes:t.postInfo.content}})],1)],1),t.postInfo.goods_id?n("v-uni-view",{staticClass:"uni-bg-white uni-common-pa uni-border-top"},[n("v-uni-navigator",{attrs:{url:"/pagesMall/mall/goods?id="+t.postInfo.goods_id+"&post_id="+t.postInfo.id+"&share_id="+t.shareId}},[n("v-uni-button",{staticClass:"uni-border-btn-radius",attrs:{type:"warn"}},[t._v("产品链接")])],1)],1):t._e(),t.commentList.length?n("v-uni-view",{staticClass:"uni-bg-white uni-common-mt post-comments uni-border-top"},[n("v-uni-view",{staticClass:"uni-center uni-common-pa"},[t._v("全部评论")]),n("v-uni-view",{},t._l(t.commentList,function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-flex uni-common-pa"},[n("v-uni-view",{staticClass:"uni-common-pr"},[n("v-uni-image",{staticStyle:{width:"100upx",height:"100upx","border-radius":"50upx"},attrs:{"lazy-load":"true",src:e.user_info.avatar,mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-view",{staticClass:"uni-flex"},[n("v-uni-view",{staticClass:"uni-flex-item uni-text-blue uni-text-h4"},[t._v(t._s(e.user_info.nickname))]),n("v-uni-view",{staticClass:"uni-right",on:{click:function(n){n=t.$handleEvent(n),t.commentLike(e)}}},[n("v-uni-image",{staticStyle:{width:"40upx",height:"40upx"},attrs:{"lazy-load":"true",src:"../../static/icon/posts/zan.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-right uni-text-gray uni-common-ml-sm uni-common-pr",on:{click:function(n){n=t.$handleEvent(n),t.commentLike(e)}}},[t._v(t._s(e.likes))]),n("v-uni-view",{staticClass:"uni-right",on:{click:function(n){n=t.$handleEvent(n),t.commentReply(e)}}},[n("v-uni-image",{staticStyle:{width:"40upx",height:"40upx"},attrs:{"lazy-load":"true",src:"../../static/icon/posts/comment.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-right uni-text-gray uni-common-ml-sm",on:{click:function(n){n=t.$handleEvent(n),t.commentReply(e)}}},[t._v(t._s(e.replys.length))])],1),n("v-uni-view",{staticClass:"uni-text-gray uni-text-small"},[t._v(t._s(e.create_date))]),n("v-uni-view",{staticClass:"uni-comment-content uni-text-light"},[t._v(t._s(e.info))]),e.replys.length?n("v-uni-view",{staticClass:"uni-common-pa-md uni-bg-gray uni-common-mt-sm",on:{click:function(n){n=t.$handleEvent(n),t.goToCommentDetail(e)}}},t._l(e.replys,function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-common-mb-sm"},[n("v-uni-view",{staticClass:"uni-text-blue"},[t._v(t._s(e.user_info.nickname||""))]),n("v-uni-view",{staticClass:"uni-text-small uni-text-light"},[t._v(t._s(e.info))])],1)})):t._e()],1)],1)})),t.commentCount>10?n("v-uni-view",{staticClass:"uni-center uni-border-top uni-common-pa"},[n("v-uni-navigator",{attrs:{url:"/pagesPost/posts/commentList?post_id="+t.postInfo.uuid}},[t._v("查看更多")])],1):t._e()],1):n("v-uni-view",{staticClass:"uni-bg-white uni-common-mt post-comments"},[n("v-uni-view",{staticClass:"uni-common-pa uni-center uni-border-top"},[t._v("暂无评论")])],1),n("v-uni-view",{staticStyle:{height:"120upx"}}),n("v-uni-view",{staticClass:"uni-bg-white uni-flex uni-common-pt uni-common-pb post-bottom uni-border-top"},[n("v-uni-view",{staticClass:"uni-flex-item uni-common-pl uni-common-pr",on:{click:function(e){e=t.$handleEvent(e),t.commentPost(e)}}},[n("v-uni-view",{staticClass:"comment-text uni-bg-gray uni-ellipsis",staticStyle:{width:"350upx"}},[n("v-uni-text",{staticClass:"uni-text-gray"},[t._v(t._s(t.commentText))])],1)],1),n("v-uni-view",{staticClass:"uni-flex-item uni-flex uni-center uni-common-pr"},[n("v-uni-view",{staticClass:"uni-flex-item",staticStyle:{height:"48upx"},on:{click:function(e){e=t.$handleEvent(e),t.postLike(e)}}},[1==t.postInfo.isLike?n("v-uni-image",{staticStyle:{width:"48upx",height:"48upx"},attrs:{"lazy-load":"true",src:"/static/icon/posts/zan-a.png",mode:""}}):n("v-uni-image",{staticStyle:{width:"48upx",height:"48upx"},attrs:{"lazy-load":"true",src:"/static/icon/posts/zan.png",mode:""}})],1),n("v-uni-view",{staticClass:"uni-flex-item",on:{click:function(e){e=t.$handleEvent(e),t.postCollection(e)}}},[1==t.postInfo.isCollection?n("uni-icon",{attrs:{type:"star-filled",size:"24",color:"#d81e06"}}):t._e(),0==t.postInfo.isCollection?n("uni-icon",{attrs:{type:"star",size:"24",color:"#999999"}}):t._e(),-1==t.postInfo.isCollection?n("uni-icon",{attrs:{type:"star",size:"24",color:"#999999"}}):t._e()],1),n("v-uni-view",{staticClass:"uni-flex-item",staticStyle:{height:"48upx"},on:{click:function(e){e=t.$handleEvent(e),t.postShare(e)}}},[n("v-uni-image",{staticStyle:{width:"48upx",height:"48upx"},attrs:{"lazy-load":"true",src:"/static/icon/posts/share.png",mode:""}})],1)],1)],1),n("uni-popup",{attrs:{msg:"",show:t.commentPopupShow,type:"bottom"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.commentPopupHide(e)}}},[n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-view",{staticClass:"uni-flex"},[n("v-uni-view",{},[n("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.commentPopupHide(e)}}},[t._v("取消")])],1),n("v-uni-view",{staticClass:"uni-right uni-flex-item"},[n("v-uni-text",{staticStyle:{background:"#d81e06",color:"#FFFFFF",padding:"8upx 16upx","border-radius":"8upx"},on:{click:function(e){e=t.$handleEvent(e),t.commentConfirm(e)}}},[t._v("发布")])],1)],1),n("v-uni-view",{staticClass:"uni-left uni-bg-gray uni-common-pa uni-common-mt"},[n("v-uni-textarea",{staticStyle:{height:"100upx","line-height":"50upx","font-size":"24upx"},attrs:{placeholder:t.commentTextPlaceholder,maxlength:"140","placeholder-class":"uni-text-small"},model:{value:t.commentTextVal,callback:function(e){t.commentTextVal=e},expression:"commentTextVal"}})],1)],1)],1),n("score-show",{attrs:{info:t.scoreInfo}})],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},afb3:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.post-bottom[data-v-2749bd9f]{position:fixed;width:100%;bottom:0}.post-bottom .comment-text[data-v-2749bd9f]{border-radius:%?24?%;padding:0 %?24?%}',""])},b3f3:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(){i(this,t)}return s(t,[{key:"qq",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;uni.share({provider:"qq",type:0,title:t.title,summary:t.description,href:t.href,imageUrl:t.imgUrl,success:function(t){console.log("success:"+JSON.stringify(t)),e&&e()},fail:function(t){console.log("fail:"+JSON.stringify(t))}})}},{key:"wx",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;uni.share({provider:"weixin",scene:0==e?"WXSceneSession":"WXSenceTimeline",type:0,title:t.title,summary:t.description,href:t.href,imageUrl:t.imgUrl,success:function(t){console.log("success:"+JSON.stringify(t)),n&&n()},fail:function(t){console.log("fail:"+JSON.stringify(t))}})}},{key:"mini",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;console.log("mini data：",JSON.stringify(t)),uni.share({provider:"weixin",scene:"WXSceneSession",type:5,title:t.title,summary:t.description,href:t.href,imageUrl:t.imgUrl,miniProgram:{id:t.miniAppId,path:t.miniPage,type:0,webUrl:t.href},success:function(t){console.log("success:"+JSON.stringify(t)),e&&e()},fail:function(t){console.log("fail:"+JSON.stringify(t))}})}}]),t}(),r=new a;e.default=r},c984:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{info:{type:String,default:""}}};e.default=i},c9e9:function(t,e,n){var i=n("3f0f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("14cd5f7c",i,!0,{sourceMap:!1,shadowMode:!1})},e580:function(t,e,n){"use strict";var i=n("7dce"),o=n.n(i);o.a},efe6:function(t,e,n){var i=n("afb3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("4a73f3d8",i,!0,{sourceMap:!1,shadowMode:!1})},fde5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},fec9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var t=0;return t=44,{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=i}}]);