(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-mp"],{"050a":function(t,n,e){"use strict";e.r(n);var i=e("906e"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"752f":function(t,n,e){"use strict";e.r(n);var i=e("9ec9"),o=e("050a");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);var u=e("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"2fbdbbdb",null);n["default"]=r.exports},"906e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a")),o=a(e("57e2"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,i,o,a,u){try{var r=t[a](u),s=r.value}catch(c){return void e(c)}r.done?n(s):Promise.resolve(s).then(i,o)}function r(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var a=t.apply(n,e);function r(t){u(a,i,o,r,s,"next",t)}function s(t){u(a,i,o,r,s,"throw",t)}r(void 0)})}}var s={data:function(){return{isInvite:0,puid:0,jscode:"",openid:"",oauth_info:{platform:"",device:"",avatar:"",nickname:"",openid:"",type:""}}},methods:{login:function(){var t=r(i.default.mark(function t(){var n=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:uni.login({provider:"weixin",success:function(t){console.log("login res =========",JSON.stringify(t));var e=t.code;console.log("login jscode =====",e),n.jscode=e}});case 1:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getOpenId:function(){var t=r(i.default.mark(function t(){var n,e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("login 小程序，去后台取openid"),n=this.jscode,n){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.$store.dispatch("authCodeToSession",{jscode:n});case 6:if(e=t.sent,0!=e.code){t.next=12;break}return this.oauth_info.openid=e.data.openid,t.abrupt("return",!0);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),oauthReq:function(){var t=r(i.default.mark(function t(){var n,e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(JSON.stringify(this.oauth_info)),t.next=3,o.default.post("auth/loginOauth",this.oauth_info);case 3:n=t.sent,0==n.code?(uni.showToast({title:"授权登录成功",duration:1500,icon:"success"}),e=n.data.token,console.log("loginOauth token",e),uni.setStorageSync("user_auth_token",e),this.$store.state.hasLogin=!0,this.$store.dispatch("userInfoGet"),setTimeout(function(){uni.navigateBack({delta:1})},1e3)):2==n.code?(this.$store.state.oAuthId=n.data.oauth_id,this.goAuthBind(3)):uni.showToast({title:"授权登录失败,请稍后重试",duration:1500,icon:"none"});case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),authUser:function(){var t=r(i.default.mark(function t(n){var e,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.detail.userInfo,this.oauth_info.avatar=e.avatarUrl,this.oauth_info.nickname=e.nickName,t.next=5,this.getOpenId();case 5:o=t.sent,o||uni.showToast({icon:"none",title:"小程序授权获取openid失败，请稍后重试",mask:!1,duration:1500}),this.oauthReq();case 8:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),oauth:function(){var t=r(i.default.mark(function t(){var n=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("oauth type :",type),uni.login({provider:"weixin",success:function(t){uni.getUserInfo({provider:type,withCredentials:!0,success:function(){var t=r(i.default.mark(function t(e){var o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log(JSON.stringify(e)),o=e.userInfo,n.oauth_info.avatar=o.avatarUrl,n.oauth_info.nickname=o.nickName,o.openid&&(n.oauth_info.openid=o.openid),o.openId&&(n.oauth_info.openid=o.openId);case 6:case"end":return t.stop()}},t,this)}));function e(n){return t.apply(this,arguments)}return e}(),fail:function(t){console.error("授权登录失败，",JSON.stringify(t)),uni.showToast({title:"授权登录失败,获取用户信息出错",duration:1500,icon:"none"})}})},fail:function(t){console.error("授权登录失败:"+JSON.stringify(t)),uni.showToast({title:"授权登录失败, "+t.errMsg||!1,duration:1500,icon:"none"})}});case 2:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),goAuthBind:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n="/pages/auth/register";this.isInvite?(n+="?isInvite=1&puid="+this.puid,uni.setStorageSync("auth_reg_type",t),uni.navigateTo({url:n})):(uni.setStorageSync("auth_reg_type",t),uni.redirectTo({url:n}))}},onLoad:function(){var t=r(i.default.mark(function t(n){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.isInvite=n.isInvite||0,this.puid=n.puid||0,console.log(this.isInvite,this.puid),this.login();case 4:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var t=uni.getSystemInfoSync();console.log("onShow systemInfo:"+JSON.stringify(t)),this.oauth_info.platform=t.platform,this.oauth_info.device=t.model,this.oauth_info.type="mpwx"}};n.default=s},"9ec9":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-page-body uni-bg-white uni-center"},[e("v-uni-view",{staticClass:"uni-common-ma"},[e("v-uni-view",{staticClass:"uni-common-pa"},[e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-image",{staticStyle:{width:"200upx",height:"200upx"},attrs:{src:"/static/logo.png",mode:""}})],1),e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-view",{staticClass:"uni-h3"},[t._v("发现焦点")]),e("v-uni-view",{staticClass:"uni-h4"},[t._v("人人都是焦点")])],1),e("v-uni-view",{staticClass:"uni-common-pa"},[e("v-uni-view",{staticClass:"uni-common-pa"},[e("v-uni-button",{staticClass:"uni-border-btn-radius",attrs:{type:"warn","open-type":"getUserInfo"},on:{getuserinfo:function(n){n=t.$handleEvent(n),t.authUser(n)}}},[t._v("授权登录")])],1)],1)],1)],1)],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}}]);