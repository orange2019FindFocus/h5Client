(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesMall-mall-cartConfirm"],{"0264":function(t,e,i){"use strict";i.r(e);var n=i("3377"),s=i("d7ff");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var r=i("2877"),a=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"95ef3184",null);e["default"]=a.exports},"0eea":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{num:{type:Number|String,default:0},size:{type:String,default:"24"},nums:{type:Array,default:function(){return[]}}},data:function(){return{money:"0"}},methods:{formatNum:function(){if(this.num||0===this.num||"0"===this.num){var t=parseFloat(this.num).toFixed(2);console.log(t),this.money=" ￥"+t}},formatNums:function(){if(this.nums.length){var t=0;this.nums.forEach(function(e){console.log("formatNums =========== n",e),t+=parseFloat(e)}),console.log("formatNums =========== num",t);var e=parseFloat(t).toFixed(2);e=e.toString(),this.money=" ￥"+e}}},created:function(){this.formatNum(),this.formatNums()},watch:{num:function(t,e){console.log("newVal",t),this.formatNum()},nums:function(t,e){this.formatNums()}}};e.default=n},"1eab":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},3377:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-flex uni-bg-white uni-common-pt uni-common-pb uni-border-top"},[i("v-uni-view",{staticClass:"uni-center",staticStyle:{width:"120upx","line-height":"100upx"},on:{click:function(e){e=t.$handleEvent(e),t.choose(e)}}},[t.current===t.address.id&&0!==t.current?i("uni-icon",{attrs:{type:"location",size:"22",color:"#d81e06"}}):i("uni-icon",{attrs:{type:"location",size:"22"}})],1),i("v-uni-view",{staticClass:"uni-flex-item",on:{click:function(e){e=t.$handleEvent(e),t.choose(e)}}},[i("v-uni-view",{staticClass:"uni-text-dark"},[i("v-uni-text",{staticClass:"uni-h4"},[t._v(t._s(t.address.name))]),i("v-uni-text",{staticClass:"uni-common-pl"},[t._v(t._s(t.address.mobile))])],1),i("v-uni-view",{staticClass:"uni-ellipsis uni-text-small uni-text-light",staticStyle:{width:"500upx"}},[t._v(t._s(t.address.address)+t._s(t.address.info))])],1),t.modify?i("v-uni-view",{staticClass:"uni-center",staticStyle:{width:"120upx","line-height":"100upx"},on:{click:function(e){e=t.$handleEvent(e),t.goToAddress(e)}}},[i("uni-icon",{attrs:{type:"arrowright",size:"22"}})],1):t._e()],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"63c7":function(t,e,i){"use strict";i.r(e);var n=i("1eab"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},"63e5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(i("a34a")),s=i("2f62"),o=c(i("bbf7")),r=c(i("0264")),a=c(i("7efa")),u=c(i("89f3"));function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e,i,n,s,o,r){try{var a=t[o](r),u=a.value}catch(c){return void i(c)}a.done?e(u):Promise.resolve(u).then(n,s)}function d(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var o=t.apply(e,i);function r(t){l(o,n,s,r,a,"next",t)}function a(t){l(o,n,s,r,a,"throw",t)}r(void 0)})}}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){h(t,e,i[e])})}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={data:function(){return{postData:{score:0,total:0,remark:""},cartList:[],address:{},score:0,total:0,type:0,isVipOrder:0,jdOrder:0}},components:{userAddress:r.default,uniIcon:a.default,money:u.default},computed:f({},(0,s.mapState)(["hasLogin","isVip","userInfo","userAddressList","userAddressCurrent","mallOrderConfirm","userInvoice"])),methods:f({},(0,s.mapActions)(["goToLoginPage","userInfoGet"]),{orderCreate:function(){var t=d(n.default.mark(function t(){var e,i,s,r,a,u,c;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(uni.showLoading({title:"订单提交中"}),e=this.cartList,i=[],e.forEach(function(t,e){t.length&&i.push({order_type:e,items:t})}),s=this.postData,s.orders=i,s.score=1e3*this.postData.score,s.address=this.userAddressCurrent||{},s.invoice=this.mallOrderConfirm.invoice?this.userInvoice:"",s.express_fee=this.mallOrderConfirm.priceExpress||0,console.log("orderCreate postData",s),s.address.id){t.next=14;break}return uni.showToast({title:"请选择收货地址",icon:"none",duration:2e3}),t.abrupt("return");case 14:return t.next=16,this.$store.dispatch("mallOrderCreate",s);case 16:r=t.sent,0===r.code?(uni.hideLoading(),a=r.data.ids,u=r.data.totals,this.$store.state.mallPayment.orderIds=a,this.$store.state.mallPayment.totals=parseFloat(u).toFixed(2),console.log("this.$store.state.mallPayment",this.$store.state.mallPayment),0==this.type&&o.default.listCheckedClear(),c="/pagesMall/mall/payment",this.isVipOrder&&(c+="?isVipOrder=1"),uni.showToast({title:"生成订单成功",duration:2e3,success:function(){uni.redirectTo({url:c})},icon:"success"})):(uni.hideLoading(),uni.showToast({title:r.message,icon:"none",duration:2e3}));case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),invoiceChoose:function(){var t=this;uni.showActionSheet({itemList:["不开发票","填写发票信息"],success:function(e){console.log(e.tapIndex),0==e.tapIndex?t.mallOrderConfirm.invoice=0:uni.navigateTo({url:"/pagesMain/user/invoice"})}})},scoreUse:function(){if(1e3*this.score>this.userInfo.score)uni.showToast({title:"积分余额不足",icon:"none"});else{this.postData.score=0==this.postData.score?1:0;var t=0,e=0;if(0==this.type)t=this.isVip?o.default.totalVip:o.default.total,e=this.isVip?o.default.scoreVip:o.default.score;else{var i=this.$store.state.cartListBuyItem;e=this.isVip?i.price_score_vip*i.num:i.price_score_sell*i.num,t=this.isVip?i.price_vip*i.num:i.price_sell*i.num}this.postData.score?this.total=parseFloat(t).toFixed(2):this.total=parseFloat(t+e).toFixed(2)}}}),onLoad:function(t){if(console.log("onLoad ===================="),this.hasLogin){this.userInfoGet(),this.userAddressList.length||this.$store.dispatch("userAddressGet"),console.log("userAddressCurrent",this.userAddressCurrent);var e=t.type||0,i=t.isVipOrder||0;if(console.log("onLoad======= isVipOrder :"+i),0==e){var n=o.default.info();console.log("cartInfo",n),this.score=this.isVip?n.scoreVip:n.score,this.total=this.isVip?n.totalVip+this.score:n.total+this.score,this.cartList=o.default.listChecked(),console.log("cartList",this.cartList)}else if(1==e){var s=this.$store.state.cartListBuyItem;console.log("onLoad add item",s);var r=[[],[],[]];r[s.type].push(s),this.cartList=r,this.score=this.isVip?s.price_score_vip*s.num:s.price_score_sell*s.num,this.total=this.isVip?s.price_vip+this.score*s.num:s.price_sell+this.score*s.num}console.log("onLoad this.cartList:"+JSON.stringify(this.cartList)),this.score=parseFloat(this.score).toFixed(2),this.total=parseFloat(this.total).toFixed(2),console.log("this.total =============",this.total),this.type=e,this.isVipOrder=i,this.jdOrder=t.jdOrder||0}else this.goToLoginPage()}};e.default=v},7226:function(t,e,i){"use strict";i.r(e);var n=i("bd25"),s=i("a15d");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var r=i("2877"),a=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"ca89f112",null);e["default"]=a.exports},"7efa":function(t,e,i){"use strict";i.r(e);var n=i("fde5"),s=i("63c7");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var r=i("2877"),a=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},"89f3":function(t,e,i){"use strict";i.r(e);var n=i("e41a"),s=i("d0f1");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var r=i("2877"),a=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"0ca51cda",null);e["default"]=a.exports},a15d:function(t,e,i){"use strict";i.r(e);var n=i("63e5"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},bbf7:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="mall_cart_data",a=function(){function t(e){n(this,t);var i=uni.getStorageSync(r);i||(uni.setStorageSync(r,JSON.stringify([])),i=uni.getStorageSync(r)),this.cart=JSON.parse(i),this._init()}return o(t,[{key:"_init",value:function(){this.count=0,this.total=0,this.totalVip=0,this.score=0,this.scoreVip=0,this.checkAll=!1,this.checkAllType=[!1,!1,!1]}},{key:"_setData",value:function(){console.log("set cart data",JSON.stringify(this.cart)),uni.setStorageSync(r,JSON.stringify(this.cart))}},{key:"info",value:function(){var t=this.list();return{list:t,count:this.count,total:this.total,totalVip:this.totalVip,score:this.score,scoreVip:this.scoreVip,checkAll:this.checkAll,checkAllType:this.checkAllType}}},{key:"list",value:function(){var t=this,e=[[],[],[]],i=0,n=[0,0,0];return this._init(),this.cart.forEach(function(s){var o=s.type;if([0,1,2].indexOf(o)>-1){e[o].push(s);var r=s.num;t.count+=r,s.check&&(t.total+=s.price_sell*r,console.log("+total",t.total),t.totalVip+=s.price_vip*r,t.score+=s.price_score_sell*r,t.scoreVip+=s.price_score_vip*r,i++,n[o]++)}}),this.total=parseFloat(this.total).toFixed(2),this.totalVip=parseFloat(this.totalVip).toFixed(2),this.score=parseFloat(this.score).toFixed(2),this.scoreVip=parseFloat(this.scoreVip).toFixed(2),i>0&&i==this.cart.length&&(this.checkAll=!0),[0,1,2].forEach(function(i){n[i]&&n[i]==e[i].length&&(t.checkAllType[i]=!0)}),console.log("checkCountType",n),e}},{key:"check",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.cart.forEach(function(i){t.id===i.id&&(t.check=""!==e?e:!t.check)}),this._setData()}},{key:"checkAllAction",value:function(){var t=0;this.cart.forEach(function(e){e.check&&t++});var e=!1;t<this.cart.length&&(e=!0),this.cart.forEach(function(t){null!==t.check&&(t.check=e)}),this._setData()}},{key:"listChecked",value:function(){var t=[[],[],[]];return this.cart.forEach(function(e){var i=e.type;[0,1,2].indexOf(i)>-1&&e.check&&t[i].push(e)}),t}},{key:"listCheckedClear",value:function(){var t=[];this.cart.forEach(function(e){e.check||t.push(e)}),this.cart=t,this._setData()}},{key:"checkAllByType",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=[];if(this.cart.forEach(function(i){i.type==t&&e.push(i)}),e.length){var i=0;e.forEach(function(t){t.check&&i++});var n=!1;i<e.length&&(n=!0),e.forEach(function(t){t.check=n}),this._setData()}}},{key:"plus",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0;console.log(e),this.cart.forEach(function(n){console.log(n),t.id===n.id&&(n.num+=e,t.share_id&&(n.share_id=t.share_id),t.post_id&&(n.post_id=t.post_id),i=1),console.log(n)}),i||(t.num=e,this.cart.push(t)),this._setData()}},{key:"minus",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.cart.forEach(function(n,s){t.id===n.id&&(n.num<=i?e.cart.splice(s,1):n.num-=i)}),this._setData()}},{key:"clear",value:function(){this.cart=[],this._setData()}}]),t}(),u=new a;e.default=u},bd25:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[t.isVipOrder?t._e():i("v-uni-view",{staticClass:"uni-border-top"},[1==t.jdOrder?i("v-uni-view",[i("user-address",{attrs:{address:t.userAddressCurrent,modify:!1}})],1):i("v-uni-view",[t.userAddressCurrent.id?i("user-address",{attrs:{address:t.userAddressCurrent}}):i("user-address")],1)],1),i("v-uni-view",{staticClass:"uni-common-mt-md uni-bg-white "},t._l(t.cartList,function(e,n){return i("v-uni-view",{key:n},[e.length?i("v-uni-view",{},[i("v-uni-view",{staticClass:"uni-bold"},[1==n?i("v-uni-view",{staticClass:"uni-common-pa"},[t._v("自营商城")]):t._e(),2==n?i("v-uni-view",{staticClass:"uni-common-pa uni-border-top"},[t._v("京选商城")]):t._e()],1),t._l(e,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-common-pl uni-common-pr"},[i("v-uni-view",{staticClass:"uni-flex uni-border-top uni-common-pt uni-common-pb"},[i("v-uni-view",{staticStyle:{height:"160upx"}},[i("v-uni-image",{staticStyle:{width:"160upx",height:"160upx","border-radius":"8upx"},attrs:{"lazy-load":"true",src:e.cover,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-flex-item uni-common-pl"},[i("v-uni-view",{staticClass:"uni-ellipsis-2 uni-bold",staticStyle:{height:"80upx","line-height":"40upx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"uni-flex "},[i("v-uni-view",{staticClass:"uni-flex-item uni-text-small uni-text-gray"},[i("v-uni-text",[t._v("积分可抵扣:")]),i("v-uni-view",{staticClass:"uni-inline-block uni-text-small"},[t.isVip?i("money",{attrs:{num:e.price_score_vip}}):i("money",{attrs:{num:e.price_score_sell}}),i("v-uni-text",{staticClass:"uni-common-ml-sm"},[t._v("x "+t._s(e.num))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-flex "},[i("v-uni-view",{staticClass:"uni-flex-item uni-text-red"},[t.isVip?i("money",{attrs:{num:e.price_vip,size:"28"}}):i("money",{attrs:{num:e.price_sell,size:"28"}})],1),i("v-uni-view",{staticClass:"uni-flex-item uni-right uni-text-light"},[i("v-uni-text",[t._v("x")]),i("v-uni-text",{staticStyle:{"margin-left":"10upx"}},[t._v(t._s(e.num))])],1)],1)],1)],1)],1)})],2):t._e()],1)})),t.isVipOrder?i("v-uni-view",{staticClass:"uni-common-pa uni-bg-white uni-right uni-border-top"},[i("v-uni-text",{staticStyle:{"margin-left":"10upx"}},[t._v("小计")]),i("v-uni-view",{staticClass:"uni-inline-block uni-text-red"},[i("money",{attrs:{num:[t.total,t.mallOrderConfirm.priceExpress],size:"36"}})],1)],1):i("v-uni-view",{staticClass:"uni-common-mt-md uni-common-pl uni-common-pr uni-bg-white uni-border-top"},[i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb uni-border-bottom "},[i("v-uni-view",{staticClass:"uni-flex-item input-label"},[t._v("运费")]),i("v-uni-view",{staticClass:"uni-flex-item uni-right"},[i("money",{attrs:{num:t.mallOrderConfirm.priceExpress,size:"28"}})],1)],1),i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb uni-border-bottom "},[i("v-uni-view",{staticClass:"uni-flex-item input-label"},[t._v("积分余额")]),i("v-uni-view",{staticClass:"uni-flex-item uni-right"},[t._v(t._s(t.userInfo.score))])],1),i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb uni-border-bottom ",on:{click:function(e){e=t.$handleEvent(e),t.scoreUse(e)}}},[i("v-uni-view",{staticClass:"uni-flex-item input-label"},[t._v("使用积分")]),i("v-uni-view",{staticClass:"uni-flex-item uni-right"},[i("v-uni-text",{staticStyle:{"margin-right":"10upx"}},[t._v(t._s(1e3*t.score))]),t.postData.score?i("uni-icon",{attrs:{type:"checkbox-filled",size:"22",color:"#d81e06"}}):i("uni-icon",{attrs:{type:"circle",size:"22"}})],1)],1),i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb "},[i("v-uni-view",{staticClass:"uni-flex-item uni-right"},[t.postData.score?i("v-uni-view",{staticClass:"uni-inline-block uni-text-small uni-text-gray"},[i("v-uni-text",[t._v("积分抵扣:")]),i("money",{attrs:{num:t.score}})],1):t._e(),i("v-uni-text",{staticStyle:{"margin-left":"10upx"}},[t._v("小计")]),i("v-uni-view",{staticClass:"uni-inline-block uni-text-red"},[i("money",{attrs:{nums:[t.total,t.mallOrderConfirm.priceExpress],size:"36"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-common-mt-md uni-common-pl uni-common-pr uni-bg-white uni-border-top"},[i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb"},[i("v-uni-view",{staticClass:"uni-flex-item input-label"},[t._v("发票信息")]),i("v-uni-view",{staticClass:"uni-flex-item uni-right",on:{click:function(e){e=t.$handleEvent(e),t.invoiceChoose(e)}}},[t.mallOrderConfirm.invoice?i("v-uni-view",{},[t._v("已选择"),i("uni-icon",{attrs:{type:"arrowright",size:"22"}})],1):i("v-uni-view",{},[t._v("不开发票")])],1)],1),t.isVipOrder?t._e():i("v-uni-view",{staticClass:"uni-flex uni-common-pt uni-common-pb uni-border-top"},[i("v-uni-view",{staticClass:"input-label"},[t._v("备注")]),i("v-uni-view",{staticClass:"uni-flex-item uni-right uni-common-pa uni-bg-gray uni-text-small"},[i("v-uni-textarea",{staticStyle:{width:"500upx"},attrs:{type:"text",placeholder:"填写备注信息(非必填)","auto-height":"true","placeholder-class":"uni-text-small",maxlength:"255"},model:{value:t.postData.remark,callback:function(e){t.$set(t.postData,"remark",e)},expression:"postData.remark"}})],1)],1)],1),i("v-uni-view",{staticStyle:{height:"120upx"}}),i("v-uni-view",{staticClass:"uni-fixed-bottom uni-center uni-bg-red",on:{click:function(e){e=t.$handleEvent(e),t.orderCreate(e)}}},[t._v("提交")])],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},ccdc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("7efa"));function s(t){return t&&t.__esModule?t:{default:t}}var o={props:{address:{type:Object,default:function(){return{name:"还未填写姓名",mobile:"****",info:"还未填写收货地址",id:0}}},toPage:{type:String,default:"/pagesMain/user/address"},current:{type:Number,default:0},modify:{type:Boolean,default:!0}},components:{uniIcon:n.default},methods:{goToAddress:function(){uni.navigateTo({url:this.toPage})},choose:function(){var t=this.address;console.log("address",t),this.$emit("choose",t)}}};e.default=o},d0f1:function(t,e,i){"use strict";i.r(e);var n=i("0eea"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},d7ff:function(t,e,i){"use strict";i.r(e);var n=i("ccdc"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},e41a:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"inline"}},[i("v-uni-text",{style:{fontSize:t.size/2+"px"}},[t._v(t._s(t.money))])],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},fde5:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})}}]);