<!-- 
 
 前端页面开发者：杨晓龙  
 
 对接项目 :后台 浦妍-PHP-刘美琦
 
项目名称：共享纸巾
 
https://app.mockplus.cn/s/HDEzOSxB5  UI   彬彬
 

 暂无
 
 未备份
 
 
 export default {
 	data() {
 		return {
 			title: 'Hello'
 		}
 	},
 	onLoad() {
 
 	},
 	methods: {
 
 	}
 }
 -->




<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			//app启动时打开启动广告页
			var w = plus.webview.open(
				'./hybrid/html/advertise/advertise.html',
				'本地地址',
				{ top: 0, bottom: 0, zindex: 999 },
				'fade-in',
				500
			); 
			//设置定时器，4s后关闭启动广告页
			// setTimeout(function() {
			// 	plus.webview.close(w);
			// }, 4000);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	@import url("./common/UniversalCSS.css");

	
	/* #ifndef APP-PLUS-NVUE */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	/* #endif */
</style>
