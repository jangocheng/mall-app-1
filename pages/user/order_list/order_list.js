(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order_list/order_list"],{"0c1e":function(e,t,n){"use strict";n.r(t);var a=n("41b8"),r=n("9069");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("3645");var o,s=n("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=d.exports},"129c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("9e95");var a=n("39f7"),r=n("7416"),i=function(){return n.e("components/uni-collapse/uni-collapse").then(n.bind(null,"71f8"))},o=function(){return n.e("components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"69fe"))},s=function(){return n.e("components/uni-steps/uni-steps").then(n.bind(null,"cbcd"))},d={components:{uniCollapse:i,uniCollapseItem:o,uniSteps:s},data:function(){return{page:{total:0,current:1,size:100,pages:1,descs:"create_time",orders:[]},userId:"",headerPosition:"fixed",headerTop:"0px",typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家已发货",received:"等待用户评价",completed:"交易已完成",refunds:"商品退货处理中",cancelled:"订单已取消"},orderType:["全部","待付款","待发货","待收货","待评价","已完成","退款","已取消"],typeList:["","UNPAID","BACK","UNRECEIVED","RECEIVED","COMPLETED","REFUNDS","CANCELLED"],orderList:[[],[],[],[],[]],list:[],tabbarIndex:null,tabIndex:0,scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,tabBars:[{name:"全部",id:null},{name:"待付款",id:"UNPAID"},{name:"待发货",id:"BACK"},{name:"待收货",id:"UNRECEIVED"},{name:"待评价",id:"RECEIVED"},{name:"已完成",id:"COMPLETED"},{name:"退货",id:"REFUNDS"},{name:"已取消",id:"CANCELLED"}],active:0,orderSteps:[{title:"已下单",desc:"2018-11-11"},{title:"已完成",desc:"2018-11-14"}],likeList:[],likeMarginTop:"1px"}},onLoad:function(t){this.userId=e.getStorageSync("userId");var n=t.tbIndex;this.tabbarIndex=null==n?null:n,this.list.length<3&&this.loadGoodsList()},onShow:function(){this.loadOrderList(this.tabbarIndex);for(var e=0;e<this.tabBars.length;e++)if(this.tabBars[e].id==this.tabbarIndex)return this.switchTab(e),!1},onPageScroll:function(e){},methods:{loadGoodsList:function(){var e=this,t={current:1,size:6,type:"2"};(0,r.getGoodsList)(t).then(function(t){if(0==t.data.code&&null!=t.data.data&&(e.page.currentPage=t.data.data.current,e.page.pages=t.data.data.pages,(e.page.current=1)&&(e.likeList=[]),t.data.data.records.length>0)){var n=t.data.data.records;n.length%2!=0&&n.pop();var a=!0,r=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var d=o.value;e.likeList.push(d)}}catch(c){r=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}}e.loadingText=""})},loadOrderList:function(e){var t=this,n={userId:this.userId,status:""==e?null:e,delFlag:0};Object.assign(n,this.page),(0,a.getOrdersList)(n).then(function(e){if(0==e.data.code&&e.data.data.records.length>0){t.page.current<=1&&(t.list=[]);var n=!0,a=!1,r=void 0;try{for(var i,o=e.data.data.records[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value,d={type:s.status,ordersn:s.orderSn,orderNo:s.orderNo,goods_id:s.goodsId,imgs:null!=s.coverImgs?s.coverImgs:"/static/img/noorder.png",name:s.goodsName,price:""+s.goodsPrice,payment:""+s.paymentPrice,freight:""+s.freight,spec:"规格:"+s.specsNames,numner:s.number,createTime:s.createTime,id:s.id,progressList:null==s.progressList?[]:s.progressList,active:0};d.active=d.progressList.length,t.list.push(d)}}catch(c){a=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}}else 0==e.data.code&&0==e.data.data.records.length&&(t.list=[])})},showLogistics:function(e){},gotoComments:function(t){e.navigateTo({url:"./comments?goodsId="+t.goods_id+"&spec="+t.spec+"&orderId="+t.id})},togoOrderSteps:function(e){console.log(e)},remindDeliver:function(t,n){var r=this,i={payOrderId:n.ordersn,type:t};(0,a.dealOrder)(i,n.id).then(function(t){setTimeout(function(){e.showToast({title:null!=t.data.msg?t.data.msg:"处理成功",icon:0==t.data.code?"success":"none"})},300),0==t.data.code&&r.loadOrderList(r.tabbarIndex)})},cancelOrder:function(t){var n=this;e.showModal({title:"取消订单",content:"确定取消此订单？",success:function(e){e.confirm?n.doCancelOrder(t):e.cancel}})},doComments:function(e){},doCancelOrder:function(t){for(var n=this.orderList.length,r=0;r<n;r++){var i=this.orderList[r],o=i.length;if(o>0&&"unpaid"==i[0].type)for(var s=0;s<o;s++)if(this.orderList[r][s].ordersn==t.ordersn){this.orderList[r][s].type="cancelled";break}}var d={id:t.id,delFlag:"1"};(0,a.updateOrder)(d).then(function(n){0==n.data.code&&null!=n.data.data&&(setTimeout(function(){e.showToast({title:"取消成功",icon:"none"})},300),e.hideLoading()),document.getElementById(t.id).remove()})},toPayment:function(t){e.showLoading({title:"正在获取订单..."});var n=[];n.push(t),setTimeout(function(){e.setStorage({key:"paymentOrder",data:n,success:function(){e.hideLoading(),e.navigateTo({url:"../../pay/payment/payment?amount="+t.payment+"&goodsId="+t.goods_id+"&orderName="+t.name+"&orderId="+t.id})}})},500)},ontabtap:function(e){var t=e.target.dataset.current||e.currentTarget.dataset.current;this.switchTab(t),this.tabbarIndex=e.currentTarget.id,this.loadOrderList(this.tabbarIndex)},switchTab:function(e){this.tabIndex!==e&&(this.tabIndex=e,this.scrollInto=this.tabBars[e].id)}}};t.default=d}).call(this,n("543d")["default"])},3645:function(e,t,n){"use strict";var a=n("4bb0"),r=n.n(a);r.a},"41b8":function(e,t,n){"use strict";var a={"uni-collapse":()=>n.e("components/uni-collapse/uni-collapse").then(n.bind(null,"71f8")),"uni-collapse-item":()=>n.e("components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"69fe")),"uni-steps":()=>n.e("components/uni-steps/uni-steps").then(n.bind(null,"cbcd"))},r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})},"4bb0":function(e,t,n){},5800:function(e,t,n){"use strict";(function(e){n("3075");a(n("66fd"));var t=a(n("0c1e"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},9069:function(e,t,n){"use strict";n.r(t);var a=n("129c"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a}},[["5800","common/runtime","common/vendor"]]]);