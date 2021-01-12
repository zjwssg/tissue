<template>
	<view>
		<!-- <cu-custom :isBack="false" bg-color="bg-custom">
			<view slot="left" class="action back" @tap="backPage">
				<text class="cuIcon-close"></text>
			</view>
			<view slot="content" class="text-bold">扫描结果</view>
		</cu-custom>
		<view class="padding-top padding-lr text-lg">
			<text class="text-msg">{{msg||"扫码结果为空"}}</text>
		</view> -->
		
		{{msg||"扫码结果为空"}} 
		
	</view>
</template>
<script>
	let _webview;
	import cuCustom from '@/components/cu-custom/cu-custom.vue'
	export default {
		components: {
			cuCustom
		},
		data() {
			return {
				msg: "",
				weberror: false
			}
		},
		computed: {
			isUrl() {
				return (/^https?:\/\//i).test(this.msg) && !this.weberror;
			}
		},
		onLoad(p) {
			this.msg = decodeURIComponent(p.msg);
			if (this.isUrl) {
				
				// #ifdef APP-PLUS 
				this.loadURL(this.msg);
				// #endif
				
				// #ifdef MP
				//小程序 可以使用 webview 打开网站，不过有太多限制 
				// #endif
			}
		},
		onUnload() {},
		onBackPress() {},
		methods: {
			backPage() {
				uni.navigateBack();
			},
			// #ifdef APP-PLUS
			createWebview() {
				_webview = plus.webview.create("", "custom-webview", {
					titleNView: {
						backgroundColor: "#F0F0F0",
						titleText: this.msg,
						progress: {
							color: '#00df00'
						},
						autoBackButton: false,
						buttons: [{
							type: "close",
							float: "left",
							width: "44px",
							onclick: e => this.backPage()
						}, {
							type: "back",
							float: "left",
							width: "0px",
							onclick: e => _webview.back()
						}, {
							type: "share",
							width: "44px",
							onclick: e => plus.runtime.openURL(_webview.getURL())
						}]
					},
					popGesture: "none",
					plusrequire: "none",
					disablePlus: true,
					'uni-app': 'none',
					scalable: true,
					top: 0
				});
				this.$mp.page.$getAppWebview().append(_webview);
			},
			loadURL(url) {
				this.createWebview();
				_webview.onloaded = e => {
					this.setTitleText();
				}
				_webview.addEventListener('rendering', e => {
					this.webviewShowBack();
					this.setTitleText();
				}, false);
				_webview.loadURL(url || this.msg);
			},
			webviewShowBack() {
				_webview.canBack(e => _webview.setTitleNViewButtonStyle(1, {
					width: e.canBack ? "30px" : "0px"
				}));
			},
			setTitleText() {
				const title = _webview.getTitle();
				if (this.__titleText === title) return
				this.__titleText = title
				_webview.setStyle({
					titleNView: {
						titleText: title
					}
				})
			}
			// #endif
		}
	}
</script>

<style>
	page {
		width: 750rpx;
		height: 100vh;
		background-color: #FFFFFF;
	}

	.bg-custom {
		background-color: #F0F0F0;
	}

	.text-msg {
		user-select: auto;
	}

	.cu-custom .action.back {
		padding-left: 15px;
		margin-left: 0;
		width: 44px;
	}

	.cu-custom .action.back .cuIcon-close {
		font-size: 1.5em;
		color: #000000;
		text-align: center;
	}
</style>
