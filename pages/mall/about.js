(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mall/about"],{5395:function(t,n,e){"use strict";var a=e("f12c"),o=e.n(a);o.a},c0cf:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("9e95");var a=e("cf36"),o=function(){return e.e("components/uni-notice-bar/uni-notice-bar").then(e.bind(null,"937c"))},c={components:{uniNoticeBar:o},data:function(){return{name:"AUU旗舰店",logImg:"/static/img/face.jpg",kefuPhone:"",desc:"",ad:{noticeShow:!0,text:"商业合作，请联系XXXX"},shopName:getApp().globalData.APPNAME}},onLoad:function(){this.about(),this.kefu(),this.description(),this.getAd()},methods:{about:function(){var t=this;(0,a.getParam)("_LOGO").then(function(n){t.logImg=n.data.data})},kefu:function(){var t=this;(0,a.getParam)("_KF").then(function(n){console.log(n),t.kefuPhone=n.data.data})},description:function(){var t=this;(0,a.getParam)("_DESC").then(function(n){t.desc=n.data.data})},getAd:function(){var t=this;(0,a.getParam)("_AD").then(function(n){0==n.data.code&&null!=n.data.data&&(t.ad=JSON.parse(n.data.data))})},gotoTab:function(n){t.navigateTo({url:"../../user/address/address?type=select"})},makePhoneCall:function(){t.makePhoneCall({phoneNumber:this.kefuPhone,success:function(){console.log("成功拨打电话")}})}}};n.default=c}).call(this,e("543d")["default"])},cd59:function(t,n,e){"use strict";e.r(n);var a=e("c0cf"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=o.a},cd71:function(t,n,e){"use strict";var a={"uni-notice-bar":()=>e.e("components/uni-notice-bar/uni-notice-bar").then(e.bind(null,"937c"))},o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})},e5fc:function(t,n,e){"use strict";e.r(n);var a=e("cd71"),o=e("cd59");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("5395");var u,i=e("f0c5"),r=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=r.exports},ea64:function(t,n,e){"use strict";(function(t){e("3075");a(e("66fd"));var n=a(e("e5fc"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f12c:function(t,n,e){}},[["ea64","common/runtime","common/vendor"]]]);