(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesMain-user-addressUpdate"],{"1eab":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},2369:function(t,e,n){"use strict";n.r(e);var r=n("a231"),i=n("e801");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var o=n("2877"),a=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,"57417286",null);e["default"]=a.exports},"63c7":function(t,e,n){"use strict";n.r(e);var r=n("1eab"),i=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);e["default"]=i.a},"7efa":function(t,e,n){"use strict";n.r(e);var r=n("fde5"),i=n("63c7");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var o=n("2877"),a=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},a231:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[n("v-uni-view",{staticClass:"uni-border-top"},[n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-bg-white uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-text-dark input-label"},[t._v("收货人")]),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-input",{attrs:{type:"text",placeholder:"姓名"},model:{value:t.postData.name,callback:function(e){t.$set(t.postData,"name",e)},expression:"postData.name"}})],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-bg-white uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-text-dark input-label"},[t._v("联系方式")]),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-input",{attrs:{type:"text",placeholder:"电话号码"},model:{value:t.postData.mobile,callback:function(e){t.$set(t.postData,"mobile",e)},expression:"postData.mobile"}})],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-bg-white uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-text-dark input-label"},[t._v("所在地区")]),n("v-uni-view",{staticClass:"uni-flex-item uni-flex"},[n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-picker",{attrs:{value:t.provinceIndex,range:t.privincesArr},on:{change:function(e){e=t.$handleEvent(e),t.chooseProvince(e)}}},[n("v-uni-view",{},[t._v(t._s(t.privincesArr[t.provinceIndex]||""))])],1)],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-picker",{attrs:{value:t.cityIndex,range:t.citysArr},on:{change:function(e){e=t.$handleEvent(e),t.chooseCity(e)}}},[n("v-uni-view",{},[t._v(t._s(t.citys[t.cityIndex]?t.citys[t.cityIndex].name:""))])],1)],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-picker",{attrs:{value:t.countyIndex,range:t.countysArr},on:{change:function(e){e=t.$handleEvent(e),t.chooseCounty(e)}}},[n("v-uni-view",{},[t._v(t._s(t.countys[t.countyIndex]?t.countys[t.countyIndex].name:""))])],1)],1),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-picker",{attrs:{value:t.townIndex,range:t.townsArr},on:{change:function(e){e=t.$handleEvent(e),t.chooseTown(e)}}},[n("v-uni-view",{},[t._v(t._s(t.towns[t.townIndex]?t.towns[t.townIndex].name:""))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-bg-white uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-text-dark input-label"},[t._v("详细地址")]),n("v-uni-view",{staticClass:"uni-flex-item"},[n("v-uni-textarea",{staticStyle:{width:"500upx",height:"200upx"},attrs:{type:"text",placeholder:"详细地址请填写到楼栋号"},model:{value:t.postData.info,callback:function(e){t.$set(t.postData,"info",e)},expression:"postData.info"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-common-pa "},[n("v-uni-button",{attrs:{type:"warn",formType:"submit"}},[t._v("保存")])],1),t.postData.id?n("v-uni-view",{staticClass:"uni-common-pa uni-center uni-text-light ",on:{click:function(e){e=t.$handleEvent(e),t.addressDel(e)}}},[t._v("删除")]):t._e()],1)],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},a763:function(t,e,n){"use strict";t.exports={error:"",check:function(t,e){for(var n=0;n<e.length;n++){if(!e[n].checkType)return!0;if(!e[n].name)return!0;if(!e[n].errorMsg)return!0;if(!t[e[n].name])return this.error=e[n].errorMsg,!1;switch(e[n].checkType){case"string":var r=new RegExp("^.{"+e[n].checkRule+"}$");if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"int":r=new RegExp("^(-[1-9]|[1-9])[0-9]{"+e[n].checkRule+"}$");if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"between":if(!this.isNumber(t[e[n].name]))return this.error=e[n].errorMsg,!1;var i=e[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),t[e[n].name]>i[1]||t[e[n].name]<i[0])return this.error=e[n].errorMsg,!1;break;case"betweenD":r=/^-?[1-9][0-9]?$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;i=e[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),t[e[n].name]>i[1]||t[e[n].name]<i[0])return this.error=e[n].errorMsg,!1;break;case"betweenF":r=/^-?[0-9][0-9]?.+[0-9]+$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;i=e[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),t[e[n].name]>i[1]||t[e[n].name]<i[0])return this.error=e[n].errorMsg,!1;break;case"same":if(t[e[n].name]!=e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"notsame":if(t[e[n].name]==e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"email":r=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"phoneno":r=/^1[0-9]{10,10}$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"zipcode":r=/^[0-9]{6}$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"reg":r=new RegExp(e[n].checkRule);if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"in":if(-1==e[n].checkRule.indexOf(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"notnull":if(null==t[e[n].name]||t[e[n].name].length<1)return this.error=e[n].errorMsg,!1;break}}return!0},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}},e801:function(t,e,n){"use strict";n.r(e);var r=n("ec8c"),i=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);e["default"]=i.a},ec8c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=n("2f62"),s=o(n("7efa"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var s=t.apply(e,n);function o(t){a(s,r,i,o,c,"next",t)}function c(t){a(s,r,i,o,c,"throw",t)}o(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){h(t,e,n[e])})}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=n("a763"),l={components:{uniIcon:s.default},data:function(){return{postData:{name:"",mobile:"",info:"",province:0,city:0,county:0,town:0,address:""},privinces:[],citys:[],countys:[],towns:[],privincesArr:[],citysArr:[],countysArr:[],townsArr:[],address:[],provinceIndex:0,cityIndex:0,countyIndex:0,townIndex:0,rules:[{name:"name",checkType:"string",checkRule:"1,64",errorMsg:"姓名不能为空"},{name:"mobile",checkType:"phoneno",checkRule:"",errorMsg:"请输入正确的手机号码"},{name:"info",checkType:"string",checkRule:"1,255",errorMsg:"详细地址不能为空"}]}},computed:u({},(0,i.mapState)(["hasLogin","userAddressList","userAddressCurrent"])),methods:u({},(0,i.mapActions)(["goToLoginPage"]),{formSubmit:function(){var t=c(r.default.mark(function t(){var e,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.postData.address=this.address.join(""),e=this.postData,console.log(e),n=d.check(e,this.rules),n){t.next=7;break}return uni.showToast({title:d.error,icon:"none"}),t.abrupt("return");case 7:return t.next=9,this.$store.dispatch("userAddressUpdate",e);case 9:return t.next=11,this.$store.dispatch("userAddressGet");case 11:uni.navigateBack({delta:1});case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getProvices:function(){var t=c(r.default.mark(function t(){var e,n=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getAddressLevel("province",0);case 2:return e=t.sent,this.provinces=e,this.provinces.forEach(function(t,e){n.privincesArr.push(t.name),t.id==n.postData.province&&(n.provinceIndex=e)}),this.postData.province=this.provinces[this.provinceIndex]?this.provinces[this.provinceIndex].id:0,this.address[0]=this.provinces[this.provinceIndex]?this.provinces[this.provinceIndex].name:"",t.abrupt("return",this.provinceIndex);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),chooseProvince:function(){var t=c(r.default.mark(function t(e){var n,i,s=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.detail),this.provinceIndex=e.detail.value||0,this.postData.province=this.provinces[this.provinceIndex]?this.provinces[this.provinceIndex].id:0,this.address[0]=this.provinces[this.provinceIndex]?this.provinces[this.provinceIndex].name:"",n=this.postData.province||0,n){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,this.getAddressLevel("city",n);case 9:return i=t.sent,this.citys=i,this.citysArr=[],console.log("this.postData.city ========="+this.postData.city),this.citys.forEach(function(t,e){s.citysArr.push(t.name),t.id==s.postData.city&&(s.cityIndex=e)}),this.postData.city=this.citys[this.cityIndex]?this.citys[this.cityIndex].id:0,this.address[1]=this.citys[this.cityIndex]?this.citys[this.cityIndex].name:"",t.abrupt("return",this.cityIndex);case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),chooseCity:function(){var t=c(r.default.mark(function t(e){var n,i,s=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.cityIndex=e.detail.value,this.postData.city=this.citys[this.cityIndex]?this.citys[this.cityIndex].id:0,this.address[1]=this.citys[this.cityIndex]?this.citys[this.cityIndex].name:"",n=this.postData.city||0,n){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,this.getAddressLevel("county",n);case 8:return i=t.sent,this.countys=i,this.countysArr=[],console.log("this.postData.county ========="+this.postData.county),this.countys.forEach(function(t,e){s.countysArr.push(t.name),t.id==s.postData.county&&(s.countyIndex=e)}),console.log("this.countyIndex ========="+this.countyIndex),this.postData.county=this.countys[this.countyIndex]?this.countys[this.countyIndex].id:0,this.address[2]=this.countys[this.countyIndex]?this.countys[this.countyIndex].name:"",t.abrupt("return",this.countyIndex);case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),chooseCounty:function(){var t=c(r.default.mark(function t(e){var n,i,s=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.countyIndex=e.detail.value,this.postData.county=this.countys[this.countyIndex]?this.countys[this.countyIndex].id:0,this.address[2]=this.countys[this.countyIndex]?this.countys[this.countyIndex].name:"",n=this.postData.county||0,n){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,this.getAddressLevel("town",n);case 8:return i=t.sent,console.log("list==========",i),this.towns=i,this.townsArr=[],this.towns.forEach(function(t,e){console.log(t.name),s.townsArr.push(t.name),t.id==s.postData.town&&(s.townIndex=e)}),console.log("this.townsArr==========",this.townsArr),this.postData.town=this.towns[this.townIndex]?this.towns[this.townIndex].id:0,this.address[3]=this.towns[this.townIndex]?this.towns[this.townIndex].name:"",t.abrupt("return",this.townIndex);case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),chooseTown:function(){var t=c(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.townIndex=e.detail.value,this.postData.town=this.towns[this.townIndex]?this.towns[this.townIndex].id:0,this.address[3]=this.towns[this.townIndex]?this.towns[this.townIndex].name:"";case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getAddressLevel:function(){var t=c(r.default.mark(function t(e,n){var i,s;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getAddressLevel",{type:e,id:n});case 2:if(i=t.sent,0!=i.code){t.next=8;break}return s=i.data,t.abrupt("return",s);case 8:return t.abrupt("return",[]);case 9:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),chooseAddress:function(){var t=this;uni.chooseLocation({success:function(e){console.log("位置名称："+e.name),console.log("详细地址："+e.address),console.log("纬度："+e.latitude),console.log("经度："+e.longitude),t.postData.info=e.address+e.name}})},addressDel:function(){var t=this;uni.showActionSheet({itemList:["确认删除"],success:function(){var e=c(r.default.mark(function e(n){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!=n.tapIndex){e.next=7;break}return console.log("删除地址"),e.next=4,t.$store.dispatch("userAddressDelete",{address_id:t.postData.id});case 4:return e.next=6,t.$store.dispatch("userAddressGet");case 6:uni.navigateBack({delta:1});case 7:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()})}}),onLoad:function(){var t=c(r.default.mark(function t(e){var n,i,s,o,a,c=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasLogin){t.next=3;break}return this.goToLoginPage(),t.abrupt("return");case 3:return e.id&&(console.log("onload =========",e.id),n=this.userAddressList,n.forEach(function(t){t.id==e.id&&(c.postData={name:t.name,mobile:t.mobile,info:t.info,id:t.id,province:t.province,city:t.city,county:t.county,town:t.town},c.$store.state.userAddressCurrent=t)})),t.next=6,this.getProvices();case 6:return i=t.sent,t.next=9,this.chooseProvince({detail:{value:i}});case 9:return s=t.sent,console.log("cityIndex ==========="+s),t.next=13,this.chooseCity({detail:{value:s}});case 13:return o=t.sent,console.log("countyIndex ==========="+o),t.next=17,this.chooseCounty({detail:{value:o}});case 17:return a=t.sent,t.next=20,this.chooseTown({detail:{value:a}});case 20:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},fde5:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})}}]);