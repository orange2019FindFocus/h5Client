(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesUser-user-invite"],{"1e2e":function(i,e,t){"use strict";var n=t("8c7e"),r=t.n(n);r.a},"58ca":function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,".invite-top[data-v-62e974b4]{position:fixed;width:100%;height:%?500?%}.invite-qrcode[data-v-62e974b4]{\n  /* width: 540upx; */height:%?600?%;overflow:hidden}.invite-qrcode .qrcode-img[data-v-62e974b4]{position:relative;width:100%;height:%?200?%;top:%?-260?%;text-align:center}.invite-info[data-v-62e974b4]{position:relative;top:%?-20?%;overflow:hidden}.user-info-box[data-v-62e974b4]{position:relative;top:%?-320?%;height:0;margin:auto;width:%?600?%}",""])},5928:function(i,e,t){"use strict";t.r(e);var n=t("8425"),r=t("8b9c");for(var a in r)"default"!==a&&function(i){t.d(e,i,function(){return r[i]})}(a);t("1e2e");var o=t("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"62e974b4",null);e["default"]=s.exports},8425:function(i,e,t){"use strict";var n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"uni-page-body"},[t("v-uni-view",{staticClass:"invite-top uni-bg-red-linear"}),t("v-uni-view",{staticStyle:{position:"relative",height:"0",top:"-100upx"}},[t("v-uni-image",{staticStyle:{width:"750upx"},attrs:{src:"../../static/img/user/invite-bg.png",mode:"widthFix"}})],1),t("v-uni-view",{staticClass:"uni-center",staticStyle:{position:"relative"}},[t("v-uni-view",{staticClass:"invite-qrcode uni-center uni-common-mt"},[t("v-uni-image",{staticStyle:{width:"650upx",height:"800upx"},attrs:{"lazy-load":"true",src:"https://img-juren.oss-cn-shenzhen.aliyuncs.com/assets/images/hongbao.png",mode:"widthFix"}}),t("v-uni-view",{staticClass:"qrcode-img",staticStyle:{"margin-top":"-20upx"}},[t("v-uni-image",{staticStyle:{width:"160upx",height:"160upx","border-radius":"80upx"},attrs:{"lazy-load":"true",src:i.userInfo.avatar,mode:""}}),t("v-uni-view",{staticClass:"uni-center uni-text-white"},[i._v(i._s(i.userInfo.nickname))])],1)],1),t("v-uni-view",{staticClass:"invite-info"},[t("v-uni-view",{staticClass:"uni-inline-block",staticStyle:{width:"540upx",height:"323upx",overflow:"hidden"}},[t("v-uni-image",{staticStyle:{width:"540upx",height:"323upx","margin-left":"-4upx"},attrs:{"lazy-load":"true",src:"/static/img/user/invite-info.png",mode:"widthFix"}})],1),t("v-uni-view",{staticClass:"uni-common-pa user-info-box uni-flex uni-text-gray"},[t("v-uni-view",{staticClass:"uni-flex-item uni-center uni-common-mt",on:{click:function(e){e=i.$handleEvent(e),i.inviteShare("wx")}}},[t("v-uni-image",{staticStyle:{width:"140upx",height:"140upx","border-radius":"80upx"},attrs:{src:"../../static/icon/weixin.png",mode:""}}),t("v-uni-view",{},[i._v("邀请微信好友")])],1),t("v-uni-view",{staticClass:"uni-flex-item uni-center uni-common-mt uni-text-gray",on:{click:function(e){e=i.$handleEvent(e),i.inviteShare("fr")}}},[t("v-uni-image",{staticStyle:{width:"140upx",height:"140upx","border-radius":"80upx"},attrs:{src:"../../static/icon/friend.png",mode:""}}),t("v-uni-view",{},[i._v("分享到朋友圈")])],1)],1)],1)],1),t("v-uni-view",{staticClass:"uni-common-pa uni-center uni-text-gray"},[t("v-uni-navigator",{attrs:{url:"/pagesUser/user/inviteList"}},[i._v("点击查看邀请记录")])],1)],1)},r=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return r})},"8b9c":function(i,e,t){"use strict";t.r(e);var n=t("e827"),r=t.n(n);for(var a in n)"default"!==a&&function(i){t.d(e,i,function(){return n[i]})}(a);e["default"]=r.a},"8c7e":function(i,e,t){var n=t("58ca");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var r=t("4f06").default;r("947fdfe4",n,!0,{sourceMap:!1,shadowMode:!1})},b3f3:function(i,e,t){"use strict";function n(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function r(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function a(i,e,t){return e&&r(i.prototype,e),t&&r(i,t),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function i(){n(this,i)}return a(i,[{key:"qq",value:function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;uni.share({provider:"qq",type:0,title:i.title,summary:i.description,href:i.href,imageUrl:i.imgUrl,success:function(i){console.log("success:"+JSON.stringify(i)),e&&e()},fail:function(i){console.log("fail:"+JSON.stringify(i))}})}},{key:"wx",value:function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;uni.share({provider:"weixin",scene:0==e?"WXSceneSession":"WXSenceTimeline",type:0,title:i.title,summary:i.description,href:i.href,imageUrl:i.imgUrl,success:function(i){console.log("success:"+JSON.stringify(i)),t&&t()},fail:function(i){console.log("fail:"+JSON.stringify(i))}})}},{key:"mini",value:function(i){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;console.log("mini data：",JSON.stringify(i)),uni.share({provider:"weixin",scene:"WXSceneSession",type:5,title:i.title,summary:i.description,href:i.href,imageUrl:i.imgUrl,miniProgram:{id:i.miniAppId,path:i.miniPage,type:0,webUrl:i.href},success:function(i){console.log("success:"+JSON.stringify(i)),e&&e()},fail:function(i){console.log("fail:"+JSON.stringify(i))}})}}]),i}(),s=new o;e.default=s},e827:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t("2f62"),r=a(t("b3f3"));function a(i){return i&&i.__esModule?i:{default:i}}function o(i){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(e){s(i,e,t[e])})}return i}function s(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var u={computed:o({},(0,n.mapState)(["hasLogin","userInfo","webDomain","miniAppId","miniAppOrId"])),onNavigationBarButtonTap:function(i){0===i.index&&uni.navigateTo({url:"/pagesUser/user/inviteRule"})},methods:{inviteShare:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wx",e="pages/auth/register";e=e+"?invite=1&puid="+this.userInfo.id;var t=this.webDomain+"/"+e;console.log("inviteShare ：",t);var n={title:"发现焦点",description:"您的好友"+this.userInfo.nickname+"邀请您的注册",href:t,imgUrl:"http://img-juren.oss-cn-shenzhen.aliyuncs.com/assets/images/logo.png",miniAppId:this.miniAppOrId,miniPage:e};if(console.log("inviteShare ：",JSON.stringify(n)),"wx"==i){e="pages/auth/mp",e=e+"?invite=1&puid="+this.userInfo.id;this.webDomain;r.default.mini(n)}else"fr"==i&&r.default.wx(n,1)}}};e.default=u}}]);