(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scan-results-scan-results"],{"1c98":function(t,a,n){"use strict";n.r(a);var e=n("d8a0"),u=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);a["default"]=u.a},2439:function(t,a,n){"use strict";n("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,n=this.bgImage,e="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(e="".concat(e,"background-image:url(").concat(n,");")),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})}}};a.default=e},"47b2":function(t,a,n){"use strict";n.r(a);var e=n("56b3"),u=n("1c98");for(var c in u)"default"!==c&&function(t){n.d(a,t,(function(){return u[t]}))}(c);n("7f09");var o,r=n("f0c5"),i=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,"9827135a",null,!1,e["a"],o);a["default"]=i.exports},"56b3":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return u})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return e}));var u=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[t._v(t._s(t.msg||"扫码结果为空"))])},c=[]},"7e59":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return u})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return e}));var u=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"",t.bgColor],style:t.style},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t._t("left"),n("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)],1)},c=[]},"7f09":function(t,a,n){"use strict";var e=n("a040"),u=n.n(e);u.a},"8d3a":function(t,a,n){"use strict";n.r(a);var e=n("2439"),u=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);a["default"]=u.a},a040:function(t,a,n){var e=n("abd7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var u=n("4f06").default;u("6cf2c769",e,!0,{sourceMap:!1,shadowMode:!1})},abd7:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-9827135a]{width:%?750?%;height:100vh;background-color:#fff}.bg-custom[data-v-9827135a]{background-color:#f0f0f0}.text-msg[data-v-9827135a]{-webkit-user-select:auto;user-select:auto}.cu-custom .action.back[data-v-9827135a]{padding-left:15px;margin-left:0;width:44px}.cu-custom .action.back .cuIcon-close[data-v-9827135a]{font-size:1.5em;color:#000;text-align:center}body.?%PAGE?%[data-v-9827135a]{background-color:#fff}",""]),t.exports=a},b965:function(t,a,n){"use strict";n.r(a);var e=n("7e59"),u=n("8d3a");for(var c in u)"default"!==c&&function(t){n.d(a,t,(function(){return u[t]}))}(c);var o,r=n("f0c5"),i=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,"5718d35a",null,!1,e["a"],o);a["default"]=i.exports},d8a0:function(t,a,n){"use strict";var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=e(n("b965")),c={components:{cuCustom:u.default},data:function(){return{msg:"",weberror:!1}},computed:{isUrl:function(){return/^https?:\/\//i.test(this.msg)&&!this.weberror}},onLoad:function(t){this.msg=decodeURIComponent(t.msg),this.isUrl},onUnload:function(){},onBackPress:function(){},methods:{backPage:function(){uni.navigateBack()}}};a.default=c}}]);