<!-- Successful.vue   领取成功 -->
<template>
	<view class="Successful_1">
		<view class="DiscountDetails_5 widths">
			<view class="DiscountDetails_5_1 displayFlex_center">
				<view class=""><image style="width: 120upx;height: 120upx;" src="../../static/dui.png" mode=""></image></view>
				<!-- 恭喜你,领取成功 -->
				<view class="Size26">{{ i18n.popup.successfullyReceived }}</view>
			</view>	
		</view>
		
		<view class="DiscountDetails_5_3">
			<view class="Margin040">
				<view class="DiscountDetails_5_3_1 displayFlex_center">
					<!-- 确定 -->
					<view class="displayFlex_center Size26" @tap="DiscountDetailsBtn(2)">{{ i18n.popup.Confirm }}</view>
				</view>
			</view>
		</view>
		
		
		<view class="Successful_2_0" v-if="ISadvertisement"></view>
		<view class="Successful_2" v-if="ISadvertisement">
			<view class="Margin030">
				<view class="Successful_2_1">
					<view class="Successful_2_1_1"><image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view>
					<!-- 取消 -->
					<view class="Successful_2_1_2 displayFlex_center Size24">{{ i18n.popup.cancel }}</view>
				</view>
			</view>
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ISadvertisement:false
			}
		},
		onLoad() {
	
		},
		onShow() {
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.popup.ReceivedSuccessfully
			});
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		methods: {
	
		}
	}
</script>

<style lang="scss" scoped>
	.DiscountDetails_5{
		height:630upx;
		// background: #f7dd4c;
		// position:fixed;
		// bottom: 0;
		// border-radius: 30upx 30upx 0 0;
		.DiscountDetails_5_1{
			width: 100%;
			height: 630upx;
			// background: #DD524D;
			flex-direction: column;
			view:nth-child(2){
				line-height: 100upx;
			}
		}
	}
	.DiscountDetails_5_3{
		width: 100%;
		height: 88upx;
		// background: #3F536E;
		.DiscountDetails_5_3_1{
			width: 100%;
			height: 88upx;
			view{
				width: 100%;height: 82upx;
				
				background: #CBCBCB;
				border-radius: 41upx;
				color: #FFFFFF;
			}
		}
		
	}
	
	.Successful_2_0{
		width: 100%;
		height: 100vh;
		background: #000000;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.5;
	}
	.Successful_2{
		width: 100%;
		height: 400upx;
		// background: #007AFF;
		position: fixed;
		top: 30%;
		.Successful_2_1{
			width: 100%;
			height: 400upx;
			border-radius: 15upx;
			background: #DD524D;
			position: relative;
			.Successful_2_1_1{
				width: 100%;
				height: 400upx;
				// background: #4CD964;
				position: absolute;
				top: 0;
				image{
					border-radius: 15upx;
				}
			}
			.Successful_2_1_2{
				width: 130upx;
				height: 50upx;
				border-radius:25upx;
				background: #000000;
				color: #FFFFFF;
				position: absolute;
				top: 20rpx;
				right: 20upx;
			}
		}
	}
</style>
