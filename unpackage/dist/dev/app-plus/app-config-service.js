
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/hs-scancode/hs-scancode","pages/scan-results/scan-results","pages/index/Successful","pages/mine/newsDetails","pages/mine/news","pages/mine/follow","pages/mine/modifyPhone","pages/mine/PersonalSettings","pages/Logon/Logon","pages/Logon/phoneNumber","pages/Discount/Discount","pages/Discount/DiscountDetails","pages/Discount/search"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#9A9A9A","selectedColor":"#F7DD4C","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"static/zhijin.png","selectedIconPath":"static/zhijin_1.png","text":"领纸巾"},{"pagePath":"pages/Discount/Discount","iconPath":"static/tuiguang.png","selectedIconPath":"static/tuiguang_1.png","text":"优惠推广"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"tissue","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom"}},{"path":"/pages/hs-scancode/hs-scancode","meta":{"isNVue":true},"window":{"navigationBarTitleText":"扫码","backgroundColor":"#000000","navigationStyle":"custom","titleNView":false}},{"path":"/pages/scan-results/scan-results","meta":{},"window":{"navigationBarTitleText":"扫码结果","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/index/Successful","meta":{},"window":{"navigationBarTitleText":"领取成功","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/mine/newsDetails","meta":{},"window":{"navigationBarTitleText":"消息详情","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/mine/news","meta":{},"window":{"navigationBarTitleText":"消息中心","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/mine/follow","meta":{},"window":{"navigationBarTitleText":"我的关注","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/mine/modifyPhone","meta":{},"window":{"navigationBarTitleText":"修改手机号","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/mine/PersonalSettings","meta":{},"window":{"navigationBarTitleText":"修改信息","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/Logon/Logon","meta":{},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom"}},{"path":"/pages/Logon/phoneNumber","meta":{},"window":{"navigationBarTitleText":"绑定手机号","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/Discount/Discount","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"优惠推广","navigationStyle":"custom"}},{"path":"/pages/Discount/DiscountDetails","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"black"}},{"path":"/pages/Discount/search","meta":{},"window":{"navigationBarTitleText":"搜索","navigationBarBackgroundColor":"#f7dd4c","backgroundColor":"#f7dd4c","navigationBarTextStyle":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
