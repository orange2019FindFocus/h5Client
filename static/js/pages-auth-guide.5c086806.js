(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-guide"],{1520:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-page-body",staticStyle:{background:"#f7f8fa"}},[e("v-uni-view",{staticClass:"uni-center",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%"},on:{click:function(n){n=t.$handleEvent(n),t.download(n)}}},[e("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:"https://img-juren.oss-cn-shenzhen.aliyuncs.com/assets/images/guide.jpeg",mode:"widthFix"}})],1)],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"1eab":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},"39d9":function(t,n,e){"use strict";e.r(n);var i=e("a0ae"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"63c7":function(t,n,e){"use strict";e.r(n);var i=e("1eab"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"7efa":function(t,n,e){"use strict";e.r(n);var i=e("fde5"),o=e("63c7");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);var u=e("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},a0ae:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("7efa"));function o(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{isWeixin:0}},components:{uniIcon:i.default},methods:{download:function(){var t=uni.getSystemInfoSync();console.log("divice info:"+JSON.stringify(t)),"ios"==t.platform?location.href="https://itunes.apple.com/cn/app/发现焦点/id1439012110":"android"==t.platform&&(location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.dfn.newdiscoverfocusnews")}},onLoad:function(t){function n(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}this.isWeixin=n(),t.operate&&this.download()}};n.default=a},e4ff:function(t,n,e){"use strict";e.r(n);var i=e("1520"),o=e("39d9");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);var u=e("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"56b62bec",null);n["default"]=r.exports},fde5:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(n){n=t.$handleEvent(n),t.onClick()}}})},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}}]);