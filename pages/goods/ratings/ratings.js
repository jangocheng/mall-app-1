(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{1943:function(t,e,a){},"71bb":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},8478:function(t,e,a){"use strict";a.r(e);var n=a("71bb"),i=a("a5f8");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("e09f");var c,s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=r.exports},a5f8:function(t,e,a){"use strict";a.r(e);var n=a("d0c0"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},c226:function(t,e,a){"use strict";(function(t){a("3075");n(a("66fd"));var e=n(a("8478"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},d0c0:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("9e95"),i=a("cf36"),o={data:function(){return{goodsId:"0",page:{total:0,currentPage:1,pageSize:20},labelList:[{name:"全部",number:0,type:"all"},{name:"好评",number:0,type:"good"},{name:"中评",number:0,type:"secondary"},{name:"差评",number:0,type:"poor"}],labelIndex:0,ratingsList:[],ratingsListx:[{id:1,username:"大黑哥",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"good",first:{content:"好看，可以，不愧是专业的，才拿到手上就研究了半天才装上",img:["https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg","https://ae01.alicdn.com/kf/HTB1sL7hTjDpK1RjSZFrq6y78VXaw.jpg","https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]},append:{extDays:65,content:"用了一段时间，质量很好，体验很流畅，推荐购买",img:["https://ae01.alicdn.com/kf/HTB1dKZtTgHqK1RjSZFEq6AGMXXaS.jpg","https://ae01.alicdn.com/kf/HTB18h3oTmzqK1RjSZFjq6zlCFXap.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4"}]}},{id:2,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"poor",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"系统默认好评",img:[],video:[]}}],videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:""}},onLoad:function(t){console.log(t),this.goodsId=t.gid,this.loadRatingData(t.gid)},onReady:function(e){this.videoContext=t.createVideoContext("myVideo")},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showToast({title:"触发上拉加载"})},methods:{loadRatingData:function(t){var e=this,a={goodsId:t,current:this.page.currentPage,size:this.page.pageSize};(0,i.getGoodsRatingList)(a).then(function(t){if(0==t.data.code&&t.data.data.records.length>0){var a=!0,i=!1,o=void 0;try{for(var c,s=e.labelList[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var r=c.value;"all"==r.type&&(r.number=t.data.data.total),"good"==r.type&&(r.number=t.data.data.total)}}catch(g){i=!0,o=g}finally{try{a||null==s.return||s.return()}finally{if(i)throw o}}for(var d=t.data.data.records,f=0;f<d.length;f++){var l={id:d[f].id,username:d[f].username,face:d[f].avatar?d[f].avatar:"/static/img/face.jpg",date:d[f].createTime,spec:"规格: XL",grade:"secondary",first:d[f].first,append:null!=d[f].append?d[f].append:null};if(null!=l.first.img&&l.first.img.length>0)for(f=0;f<l.first.img.length;f++)l.first.img[f]=n.requestURL+l.first.img[f].value;if(null!=l.first.video&&l.first.video.length>0)for(f=0;f<l.first.video.length;f++)l.first.video[f]={img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4"};if(null!=l.append&&l.append.length>0)for(var p=0;p<l.append.length;p++)if(null!=l.append[p].img&&l.append[p].img.length>0)for(var u=0;u<l.append[p].img.length;u++)l.append[p].img[u]=n.requestURL+l.append[p].img[u].value;e.ratingsList.push(l)}}console.log(e.ratingsList)})},loadRatings:function(e){this.labelIndex=e,t.showToast({title:"切换评论列表"})},playVideo:function(t){this.videoSrc=t,this.$nextTick(function(){this.videoContext.requestFullScreen({direction:0})})},stopPlayVideo:function(){this.videoContext.pause()},videoPause:function(){this.videoSrc=""},viderFullscreen:function(t){t.detail.fullScreen?this.videoContext.play():this.stopPlayVideo()},showBigImg:function(e,a){t.previewImage({current:e,urls:a})}}};e.default=o}).call(this,a("543d")["default"])},e09f:function(t,e,a){"use strict";var n=a("1943"),i=a.n(n);i.a}},[["c226","common/runtime","common/vendor"]]]);