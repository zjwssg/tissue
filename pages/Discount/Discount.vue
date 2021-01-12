<!-- Discount.vue  优惠推广-->
<template>
	<view class="Discount page">
		<view class="diandi100"></view><view class="diandi100"></view><view class="diandi30"></view>
		<view class="Discount_0">
			<heads @headPortraitBtn="headPortraitBtn(['slide-left'])"></heads>
		</view>
		<view class="Discount_2">
			<view class="Margin030">
				<view class="Discount_2_1 displayFlex_center">
					<view class="Discount_2_1_1 displayFlex_left" @tap="DiscountBtn(1)">
						<view class="displayFlex_center"><image src="../../static/fd.png" mode=""></image></view>
						<view class="">
							<input type="text" disabled="" value="" :placeholder="i18n.Discount.Search"/>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="Discount_3">
			<view class="Margin030">
				<view class="Discount_3_1 widths displayFlex_fen" >
					
					<view class="Discount_3_1_1"  v-for="(item,index) in user">
						
						<view @tap="DiscountBtn(2,item.id,item.u_account)">
							<view class="Discount_3_1_1_1 widths"><image class="img100" :src="`http://www.zhijin.com/static/img/${item.u_m_logo}`" mode=""></image></view>
							<view class="Discount_3_1_1_2 widths Size26 fontWeight600 displayFlex_center">{{item.u_m_name}}</view>
						</view>

					</view>
					
				</view>
			</view>
		</view>	
		<view class="diandi30"></view>
		
		
		<uni-transition :mode-class="['fade']" :styles="maskClass" :show="show" @click="onTap" />
		<uni-transition :duration="500" :mode-class="modeClass" :styles="transfromClass" :show="transShow" @click="onTap" @change="change"> 
			<mine @mineClick="mineClick($event,['slide-left'])"></mine>
		</uni-transition>
		
		<!-- <button type="primary" style="width: 100%;margin-top: 100px;" @click="scan">扫码</button> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:[],
				show: false,
				transShow: false,
				modeClass: ['fade'],
				// 遮照层样式： 
				maskClass: {'position': 'fixed','bottom': 0,'top': 0,'left': 0,'right': 0,'background-color': 'rgba(0, 0, 0, 0.4)','z-index': '999998'},
				// 主元素样式 
				transfromClass: {'position': 'fixed','bottom': "0",'top': 0,'left': 0,'right': 0,'display': 'flex','justify-content': 'center','align-items': 'center','z-index': '999999'},
			}
		},
		onLoad() {
			
			  this.getlist();//获取店铺列表
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		
		methods: {
			
			
			getlist(){
							// console.log(11111111);
									const token = uni.getStorageSync('token');
							let url = '/api/user/get_shop_list',
								params = {
								
									
								};
							console.log(url, params)
							this.Http.Post(url, params,token)
								.then(data => {
									console.log(data.data)
									this.user=data.data
								})
					 
							},
			
			
			mask() {
				this.show = true
			},
			onTap() {
				// this.transShow = this.show = false
			},
			change(e) {
				console.log(e.detail);
			},
			DiscountBtn(index,shop_id,account){
				console.log('shop_id'+shop_id)
				if(index == 1){  //搜索
					uni.navigateTo({
						url:'./search'
					})
				}else if(index == 2){ //详情
			
					uni.navigateTo({
						url:'./DiscountDetails?id='+shop_id+'&&account='+account
					})
				}
			},
			headPortraitBtn(mode){//点击头像
				console.log("点击1")
				this.show = !this.show
				this.modeClass = mode
				this.transShow = !this.transShow
							
			},
			mineClick(e,mode){  //我的
				if(e == 1){  //修改资料
					uni.navigateTo({
						url:"../mine/PersonalSettings"
					})
				}else if(e == 2){ //修改信息
					uni.navigateTo({
						url:"../mine/PersonalSettings"
					})
				}else if(e == 3){ //修改手机号
					uni.navigateTo({
						url:"../mine/modifyPhone"
					})
				}else if(e == 4){ //信息中心
					uni.navigateTo({
						url:"../mine/news"
					})
				}else if(e == 5){  //我的关注
					uni.navigateTo({
						url:"../mine/follow"
					})
				}else if(e == 6){  //联系客服
					this.UNIEvolution.uniPhoneCall("15135703567")
				}else if(e == 7){  //退出登录
					uni.redirectTo({
						url:"../Logon/Logon"
					})
				}else if(e == 0){  //关闭弹框
					this.show = !this.show
					this.modeClass = mode
					this.transShow = !this.transShow
				}
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Discount_0{
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	// .Discount_1{
	// 	width:100%;
	// 	height:130upx;
	// 	background: #f7dd4c;
	// 	.Discount_1_1{
	// 		width: 100%;
	// 		height:90upx;
	// 		// background: #C0C0C0;
	// 		position: relative;
	// 		.Discount_1_1_1{
	// 			width: 20%;
	// 			height: 90upx;
	// 			// background: #3F536E;
	// 			position: absolute;
	// 			top: 0;
	// 			view{
	// 				width: 60upx;
	// 				height: 60upx;
	// 				// background: #00b650;
	// 				border-radius: 50%;
	// 				border: 3upx solid #40c255;
	// 			}
	// 		}
	// 		.Discount_1_1_2{
	// 			width: 100%;
	// 			height: 90upx;
	// 			// background: #F0AD4E;
	// 			view{
	// 				width: 102upx;
	// 				height: 57upx;
	// 				// background: #DD524D;
	// 				border-radius: 28upx;
	// 				image{
	// 					border-radius: 28upx;	
	// 				}
	// 			}
				
	// 		}
	// 	}
	// }
	
	.Discount_2{
		width: 100%;
		height: 87upx;
		background: #f7dd4c;
		position: fixed;
		top: 130upx;
		z-index: 10000;
		.Discount_2_1{
			width: 100%;
			height: 87upx;
			// background: #F0AD4E;
			.Discount_2_1_1{
				width: 100%;
				height: 56upx;
				background: #FFFFFF;
				border-radius: 27upx;
				
				view:nth-child(1){
					width: 10%;
					height: 56upx;
					// background: #C0C0C0;
					image{
						width: 40upx;
						height: 40upx;
					}
				}
				view:nth-child(2){
					width: 90%;
					height: 56upx;
					// background: #DD524D;
					input{
						width:90%;
						height: 56upx;
						border: 0;
						font-size: 26upx;
						color: #000000;
					}
				}
			}
		}
	}
	
	
	.Discount_3{
		.Discount_3_1{
			min-height: 100upx;
			// background: #C0C0C0;
			flex-wrap: wrap;
			.Discount_3_1_1{
				width: 48%;
				height: 484upx;
				background: #FFFFFF;
				margin-top: 20upx;
				border-radius: 15upx;
				box-shadow: 0upx 5upx 10upx #e4e5e9;
				.Discount_3_1_1_1{
					height: 400upx;
					// background: #4CD964;
					image{
						border-radius: 15upx 15upx 0 0; 
					}
				}
				.Discount_3_1_1_2{
					height: 84upx;
				}
			}
		}
	}
	
	
</style>
