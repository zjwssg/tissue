!
function(e, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : e.uni = i()
} (this,
function() {
    "use strict";
    var e = {},
    o = [],
    s = /uni-app/i.test(navigator.userAgent),
    i = function(e, i) {
        if (0 === o.length && s) {
            var n = plus.webview.currentWebview();
            if (!n) throw new Error("plus.webview.currentWebview() is undefined");
            var t = n.parent();
            if (!t) throw new Error("plus.webview.currentWebview().parent() is undefined");
            o.push(t.id)
        }
        var a = {
            options: {
                timestamp: +new Date
            },
            name: e,
            arg: i
        };
        if (s) {
            var r = JSON.stringify(a);
            plus.webview.getLaunchWebview().evalJS('UniPlusBridge.subscribeHandler("WEB_INVOKE_APPSERVICE",' + r + "," + JSON.stringify(o) + ");")
        } else window.parent.postMessage({
            type: "WEB_INVOKE_APPSERVICE",
            data: a,
            pageId: ""
        },
        "*")
    };
    e.navigateTo = function() {
        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).url;
        i("navigateTo", {
            url: encodeURI(e)
        })
    },
    e.navigateBack = function() {
        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).delta;
        i("navigateBack", {
            delta: parseInt(e) || 1
        })
    },
    e.switchTab = function() {
        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).url;
        i("switchTab", {
            url: encodeURI(e)
        })
    },
    e.reLaunch = function() {
        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).url;
        i("reLaunch", {
            url: encodeURI(e)
        })
    },
    e.redirectTo = function() {
        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).url;
        i("redirectTo", {
            url: encodeURI(e)
        })
    },
    e.getEnv = function(e) {
        e(s ? {
            plus: !0
        }: {
            h5: !0
        })
    },
    e.postMessage = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        i("postMessage", e.data || {})
    };
    var n = {};
    "undefined" != typeof wx && wx.miniProgram && (n.navigateTo = wx.miniProgram.navigateTo, n.navigateBack = wx.miniProgram.navigateBack, n.switchTab = wx.miniProgram.switchTab, n.reLaunch = wx.miniProgram.reLaunch, n.redirectTo = wx.miniProgram.redirectTo, n.postMessage = wx.miniProgram.postMessage, n.getEnv = wx.miniProgram.getEnv);
    var t = {}; - 1 < navigator.userAgent.indexOf("AlipayClient") && "undefined" != typeof my && (t.navigateTo = my.navigateTo, t.navigateBack = my.navigateBack, t.switchTab = my.switchTab, t.reLaunch = my.reLaunch, t.redirectTo = my.redirectTo, t.postMessage = my.postMessage, t.getEnv = my.getEnv);
    var a = {};
    "undefined" != typeof swan && swan.webView && (a.navigateTo = swan.webView.navigateTo, a.navigateBack = swan.webView.navigateBack, a.switchTab = swan.webView.switchTab, a.reLaunch = swan.webView.reLaunch, a.redirectTo = swan.webView.redirectTo, a.postMessage = swan.webView.postMessage, a.getEnv = swan.webView.getEnv);
    var r = {};
    "undefined" != typeof tt && tt.miniProgram && (r.navigateTo = tt.miniProgram.navigateTo, r.redirectTo = tt.miniProgram.redirectTo, r.reLaunch = tt.miniProgram.reLaunch, r.switchTab = tt.miniProgram.switchTab, r.navigateBack = tt.miniProgram.navigateBack);
    var d = navigator.userAgent,
    c = /uni-app/i.test(d),
    g = /micromessenger/i.test(d),
    w = /AlipayClient/.test(d),
    u = /swan/i.test(d),
    v = /toutiaomicroapp/i.test(d),
    m = {},
    p = function() {
        window.UniAppJSBridge = !0,
        document.dispatchEvent(new CustomEvent("UniAppJSBridgeReady", {
            bubbles: !0,
            cancelable: !0
        }))
    };
    return c ? (m = e, window.plus && /complete|loaded|interactive/.test(document.readyState) ? p() : document.addEventListener("plusready", p)) : g ? (m = n, window.WeixinJSBridge && WeixinJSBridge.invoke ? p() : document.addEventListener("WeixinJSBridgeReady", p)) : (m = w ? t: u ? a: v ? r: e, document.addEventListener("DOMContentLoaded", p)),
    m
});