(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-guide"],{"1eab":function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=e},"39d9":function(n,t,i){"use strict";i.r(t);var e=i("a0ae"),u=i.n(e);for(var r in e)"default"!==r&&function(n){i.d(t,n,function(){return e[n]})}(r);t["default"]=u.a},"63c7":function(n,t,i){"use strict";i.r(t);var e=i("1eab"),u=i.n(e);for(var r in e)"default"!==r&&function(n){i.d(t,n,function(){return e[n]})}(r);t["default"]=u.a},"7efa":function(n,t,i){"use strict";i.r(t);var e=i("fde5"),u=i("63c7");for(var r in u)"default"!==r&&function(n){i.d(t,n,function(){return u[n]})}(r);var a=i("2877"),o=Object(a["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=o.exports},"93d4":function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"uni-page-body uni-bg-white"},[n.isWeixin?i("v-uni-view",{staticClass:"uni-common-pa uni-right"},[i("uni-icon",{attrs:{type:"arrowthinup",size:"80"}}),i("v-uni-view",{},[n._v("点击在safari中打开")])],1):n._e(),i("v-uni-view",{staticClass:"uni-common-pa uni-common-mt uni-center"},[i("v-uni-image",{staticStyle:{width:"200upx",height:"200upx","margin-top":"100upx"},attrs:{src:"/static/logo.png",mode:""}}),i("v-uni-view",{},[n._v("下载发现焦点APP")]),n.isWeixin?n._e():i("v-uni-view",{staticClass:"uni-common-pa"},[i("v-uni-button",{staticClass:"uni-border-btn-radius",attrs:{type:"warn"}},[n._v("点击下载")])],1)],1)],1)},u=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return u})},a0ae:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=u(i("7efa"));function u(n){return n&&n.__esModule?n:{default:n}}var r={data:function(){return{isWeixin:0}},components:{uniIcon:e.default},onLoad:function(){function n(){var n=window.navigator.userAgent.toLowerCase();return"micromessenger"==n.match(/MicroMessenger/i)}this.isWeixin=n()}};t.default=r},e4ff:function(n,t,i){"use strict";i.r(t);var e=i("93d4"),u=i("39d9");for(var r in u)"default"!==r&&function(n){i.d(t,n,function(){return u[n]})}(r);var a=i("2877"),o=Object(a["a"])(u["default"],e["a"],e["b"],!1,null,"31e04a22",null);t["default"]=o.exports},fde5:function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+n.type],style:{color:n.color,"font-size":n.fontSize},on:{click:function(t){t=n.$handleEvent(t),n.onClick()}}})},u=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return u})}}]);