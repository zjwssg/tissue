<!-- newsDetails.vue  消息详情 -->
<template>
	<view class="newsDetails page">
		
		<view class="newsDetails_1">
			<view class="diandi40"></view>
			<view class="newsDetails_1_1 displayFlex_center Size24">3-14 15:20</view>
			<view class="newsDetails_1_2">
				<view class="newsDetails_1_2_1"><view class=""><image class="img100 borderRadius" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view></view>
				<view class="newsDetails_1_2_2">
					<view class="newsDetails_1_2_2_1 Size26">
						<view class="Margin020">
							<view class="">
								<view class="diandi10"></view>
								我们店新推出了新菜品熬~ 优惠多多,快来抢购吧！
								<view class="diandi10"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="diandi40"></view>
			<view class="newsDetails_1_1 displayFlex_center Size24">3-14 15:20</view>
			<view class="newsDetails_1_2">
				<view class="newsDetails_1_2_1"><view class=""><image class="img100 borderRadius" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view></view>
				<view class="newsDetails_1_2_2">
					<view class="newsDetails_1_2_2_1 Size26">
						<view class="Margin020">
							<view class="">
								<view class="diandi10"></view>
								我们店新推出了新菜品熬~ 优惠多多,快来抢购吧！
								<view class="diandi10"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
	
		},
		onShow() {
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.my.MessageDetails
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
	.newsDetails_1{
		width: 100%;
		min-height: 100upx;
		// background: #007AFF;
		.newsDetails_1_1{
			width: 100%;
			height: 80upx;
			color: #979797;
			// background: #DD524D;
		}
		.newsDetails_1_2{
			display: flex;
			.newsDetails_1_2_1{
				width: 20%;
				min-height:120upx;
				// background: #3F536E;
				display: flex;
				justify-content: center;
				view{
					width: 80upx;
					height: 80upx;
					// background: #F0AD4E;
					border-radius: 50%;
					
				}
			}
			.newsDetails_1_2_2{
				width: 70%;
				min-height:120upx;
				// background: #C0C0C0;
				.newsDetails_1_2_2_1{
					width: 100%;
					min-height:120upx;
					background:#FFFFFF;
					border-radius: 0 15upx 15upx 15upx;
					line-height: 50upx;
				}
			}
		}
	}
</style>
