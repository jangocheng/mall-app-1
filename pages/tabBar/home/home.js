(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"684a":function(t,e,o){"use strict";o.r(e);var n=o("d1b8"),a=o("7e10");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);o("a327");var i,r=o("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=u.exports},"74a4":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(o("15bb"));var n=o("e228"),a=o("9e95"),s=o("cf36");function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return o.e("components/uni-notice-bar/uni-notice-bar").then(o.bind(null,"937c"))},c={components:{uniNoticeBar:r},data:function(){return{provider:null,baseUrl:a.requestURL,page:{total:0,currentPage:0,pageSize:20,pages:0},showHeader:!1,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"上海",currentSwiper:0,swiperList:[{id:1,src:"url1",url:""}],adList:[{url:"",adHref:"",goodsId:""}],categoryList:[{id:1,name:"口红",url:""}],Promotion:[],productList:[{goodsId:0,img:"",name:"AUU口红",price:"￥599",slogan:"99人付款"}],loadingText:"正在加载...",noticeList:"",noticeShow:!1,swipperHight:"35px",dotStyle:!0,cardCur:0,userId:null,shareTitle:"我的态度就是AUU",shareUserId:null}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){var e="加载新商品";if(this.page.currentPage<this.page.pages)return e="已经到我底线了",this.loadingText=e,void t.showToast({title:e});this.page.currentPage+=1,t.showToast({title:e});var o=this.productList.length;if(o>=40)return this.loadingText="到底了",!1;this.loadGoodsList(!1)},onLoad:function(e){this.Timer(),this.loadAdList(),this.loadPromotion(),this.loadGoodsList(!0),this.loadCategory(),this.loadNotice(),this.shareUserId=null,this.userId=t.getStorageSync("userId"),console.log(e);var o=this.provider;null!=o&&""!=o||(t.getProvider({service:"oauth",success:function(t){o=t.provider[0]}}),this.provider=o),console.log(e.u);var n=e.u;if(null!=e.u)this.shareUserId=n;else if(null!=e.scene){var a=decodeURIComponent(e.scene);if(console.log(a),null!=a){var s=a.split("&");s.length>0&&(this.shareUserId=s[0].replace("u=",""))}}console.log(this.shareUserId),"weixin"!=o&&"toutiao"!=o||(t.showShareMenu({withShareTicket:!0,success:function(t){},fail:function(t){},complete:function(t){}}),this.checkLoginSession())},onShow:function(){console.log("onshow"),this.close,this.userId=t.getStorageSync("userId")},onShareAppMessage:function(t){return console.log("获取到的分享数据"),console.log(t),null!=t.u&&(this.shareUserId=u),console.log(t),"button"===t.from&&console.log(t),{title:this.shareTitle,path:"/pages/tabBar/home/home?u="+this.userId}},methods:{toAddShareIntegral:function(){var e={appCpde:getApp().globalData.APPNAME,formId:null==this.userId?0:this.userId,goodsId:0,userId:this.shareUserId,type:"SHARE"};console.log("开始发放分享积分"),console.log(e),(0,n.increaseIntegral)(e).then(function(e){console.log(e),0==e.data.code&&e.data.msg&&t.showToast({title:"好友获得"+e.data.data+"积分",icon:"none"})})},loadCategory:function(){var e=this;t.request({url:a.requestURL+"/mall/category/page",data:{current:1,size:4,level:1},header:{"custom-header":"hello"},success:function(t){e.categoryList=t.data.data.records;for(var o=0;o<e.categoryList.length;o++)e.categoryList[o].img=e.categoryList[o].img;e.text="request success"}})},loadGoodsList:function(e){var o=this;t.request({url:a.requestURL+"/mall/cabinet/page",data:{current:this.page.currentPage,size:this.page.pageSize,type:"0"},header:{"custom-header":"hello"},success:function(t){if(0==t.data.code&&null!=t.data.data){o.page.currentPage=t.data.data.current,o.page.total=t.data.data.total,o.page.pages=t.data.data.pages,e&&(o.productList=[]);for(var n=t.data.data.records,a=0;a<n.length;a++)n[a].img=n[a].imgs,o.productList.push(n[a])}else o.loadingText="加载完了..."}})},loadAdList:function(){var e=this;t.request({url:a.requestURL+"/mall/ad/list",data:{},header:{"custom-header":"hello"},method:"GET",success:function(t){0==t.data.code&&(e.swiperList=t.data.data.swipers,e.adList=t.data.data.adList,null!=t.data.data.promotion&&e.loadPromotion(t.data.data.promotion))}})},loadNotice:function(){var t=this;(0,s.getNoticeMsg)({status:"1",delFlag:"0"}).then(function(e){if(0==e.data.code&&null!=e.data.data&&e.data.data.length>0){t.noticeList="",t.noticeShow=!0;for(var o=e.data.data,n=0;n<o.length;n++)1==o.length?t.noticeList=o[n].content:t.noticeList+=n+"，"+o[n].content+"         "}else t.closeNotice()})},checkLoginSession:function(){console.log("当前登录用户"+this.userId),null==this.userId?(t.removeStorageSync("Authorization"),t.removeStorageSync("userId"),this.oauthLogin()):null!=this.shareUserId&&this.toAddShareIntegral()},oauthLogin:function(){var e=this.provider,o=this;t.login({provider:e,success:function(n){var s=getApp().globalData.PROVIDER[e];getApp().globalData.APPTYPE=s,console.log("开始登录"),t.request({url:a.requestURL+"/auth/mobile/token/social?grant_type=mobile&mobile="+s+"@"+n.code,method:"post",header:{Authorization:getApp().globalData.CLIENT},success:function(e){200==e.statusCode&&(console.log(e),t.setStorageSync("Authorization","Bearer "+e.data.access_token),t.setStorageSync("refreshToken",e.data.refresh_token),t.setStorageSync("refreshTokenTime",parseInt((new Date).getTime()/1e3)),t.setStorageSync("userId",e.data.user_id),t.setStorageSync("userName",e.data.username),o.userId=e.data.user_id,null!=o.shareUserId&&o.toAddShareIntegral())}})},fail:function(e){console.log("用户拒绝了授权: "+JSON.stringify(e)),t.hideLoading()}})},loadPromotion:function(t){var e=new Date,o=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),s=o+"/"+n+"/"+a+" 23:59:59",i=[{title:"活动专区一",name:"活动专区",url:"/static/img/s1.jpg",countdown:!1},{title:"活动专区二",name:"活动专区",url:"/static/img/s2.jpg",countdown:s}];if(null!=t&&t.length>0){i=t;for(var r=0;r<i.length;r++)i[r].urls=i[r].urls}for(var u=0;u<i.length;u++){var c=i[u],d=i[u].countdown;if(c.countdown){var l="00",h="00",g="00",f=new Date,p=new Date(d);if(!(f>=p)){var m=parseInt((p.getTime()-f.getTime())/1e3);l=parseInt(m/3600),h=parseInt(m%3600/60),g=m%60,l=l<10?"0"+l:l,h=h<10?"0"+h:h,g=g<10?"0"+g:g}i[u].countdown={h:l,m:h,s:g}}}this.Promotion=i},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var e=0;e<t.Promotion.length;e++){var o=t.Promotion[e];o.countdown&&(0==o.countdown.h&&0==o.countdown.m&&0==o.countdown.s||(o.countdown.s>0?(o.countdown.s--,o.countdown.s=o.countdown.s<10?"0"+o.countdown.s:o.countdown.s):o.countdown.m>0?(o.countdown.m--,o.countdown.m=o.countdown.m<10?"0"+o.countdown.m:o.countdown.m,o.countdown.s=59):o.countdown.h>0&&(o.countdown.h--,o.countdown.h=o.countdown.h<10?"0"+o.countdown.h:o.countdown.h,o.countdown.m=59,o.countdown.s=59),t.Promotion[e].countdown=o.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.showToast({title:"商品太少了，暂时不用搜索啦",icon:"none"})},toSwiper:function(t){this.toGoods(t)},toCategory:function(e){t.setStorageSync("catName",e.name),t.navigateTo({url:"../../goods/goods-list/goods-list?cid="+e.id+"&name="+e.name})},toPromotion:function(t){this.toGoods(t)},toGoods:function(e){var o=e.goodsId;t.navigateTo({url:"../../goods/goods?gid="+o})},swiperChange:function(t){this.currentSwiper=t.detail.current},closeNotice:function(){this.swipperHight="0px"},cardSwiper:function(t){this.cardCur=t.detail.current}}};e.default=c}).call(this,o("543d")["default"])},"7e10":function(t,e,o){"use strict";o.r(e);var n=o("74a4"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"98a4":function(t,e,o){"use strict";(function(t){o("3075");n(o("66fd"));var e=n(o("684a"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},a327:function(t,e,o){"use strict";var n=o("ade3"),a=o.n(n);a.a},ade3:function(t,e,o){},d1b8:function(t,e,o){"use strict";var n={"uni-notice-bar":()=>o.e("components/uni-notice-bar/uni-notice-bar").then(o.bind(null,"937c"))},a=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return s}),o.d(e,"a",function(){return n})}},[["98a4","common/runtime","common/vendor"]]]);