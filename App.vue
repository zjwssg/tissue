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
			console.log('App Launch')
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
