<!-- news.vue   消息中心 -->
<template>
	<view class="news">
		
		<view class="news_1">
			<view class="Margin030">
				<view class="news_1_1 widths" @tap="newsDetailsBtn()">
					<view class="news_1_1_1 displayFlex_left">
						<view class="news_1_1_1_1 displayFlex_left"><view class=""><image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view></view>
						<view class="news_1_1_1_2">
							<!-- 店铺名称 -->
							<view class="Size28 fontWeight600 displayFlex_left">{{i18n.Discount.shopName}}</view>
							<view class="Size24">消息预览</view>
						</view>
						<view class="news_1_1_1_3 Size24 textAlignRight"><text>上午9:45</text></view>
					</view>
				</view>
				<view class="news_1_1 widths">
					<view class="news_1_1_1 displayFlex_left">
						<view class="news_1_1_1_1 displayFlex_left"><view class=""><image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view></view>
						<view class="news_1_1_1_2">
							<view class="Size28 fontWeight600 displayFlex_left">{{i18n.Discount.shopName}}</view>
							<view class="Size24">消息预览</view>
						</view>
						<view class="news_1_1_1_3 Size24 textAlignRight"><text>上午9:45</text></view>
					</view>
				</view>
				<view class="news_1_1 widths">
					<view class="news_1_1_1 displayFlex_left">
						<view class="news_1_1_1_1 displayFlex_left"><view class=""><image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view></view>
						<view class="news_1_1_1_2">
							<view class="Size28 fontWeight600 displayFlex_left">{{i18n.Discount.shopName}}</view>
							<view class="Size24">消息预览</view>
						</view>
						<view class="news_1_1_1_3 Size24 textAlignRight"><text>上午9:45</text></view>
					</view>
				</view>
				<view class="news_1_1 widths">
					<view class="news_1_1_1 displayFlex_left">
						<view class="news_1_1_1_1 displayFlex_left"><view class=""><image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view></view>
						<view class="news_1_1_1_2">
							<view class="Size28 fontWeight600 displayFlex_left">{{i18n.Discount.shopName}}</view>
							<view class="Size24">消息预览</view>
						</view>
						<view class="news_1_1_1_3 Size24 textAlignRight"><text>上午9:45</text></view>
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
			    title: this.i18n.my.informationCenter
			});
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		methods: {
			newsDetailsBtn(){
				uni.navigateTo({
					url:"./newsDetails"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news_1{
		.news_1_1{
			min-height: 100upx;
			// background: #007AFF;
			.news_1_1_1{
				width: 100%;
				height: 128upx;
				// background: #DD524D;
				border-bottom: 2upx solid #f3f3f3;
				.news_1_1_1_1{
					width: 16%;
					height: 128upx;
					// background: #C0C0C0;
					view{
						width: 80upx;
						height: 80upx;
						border-radius: 10upx;
						image{
							border-radius: 10upx;
						}
					}
				}
				.news_1_1_1_2{
					width: 54%;
					height: 128upx;
					// background: #DD524D;
					view:nth-child(1){
						color: #000;
						height: 46upx;
						margin-top: 25upx;
					}
					view:nth-child(2){
						color: #939393;
						height: 46upx;
					}
				}
				.news_1_1_1_3{
					width: 30%;
					height: 128upx;
					// background: #3F536E;
					color: #939393;
					text{
						margin-top: 25upx;
						display: block;
					}
				}
			}
		}
	}
	
	
</style>
