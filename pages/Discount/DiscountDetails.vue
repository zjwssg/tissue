<!-- DiscountDetails.vue  商铺详情 -->
<template>
	<view class="DiscountDetails page">
		<view class="DiscountDetails_1 widths">
			<image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image>
			<view class="DiscountDetails_1_0_0"></view>
			<view class="DiscountDetails_1_0 displayFlex_center">
				<view class="">
					<image class="img100" :src="`http://47.98.243.156:8090/static/img/${datainfo.u_m_logo}`" mode=""></image>
				</view>
			</view>
		</view>
		<view class="DiscountDetails_2 widths">
			<view class="diandi30"></view>
			<view class="DiscountDetails_2_1 widths displayFlex_fen">
				<view class="DiscountDetails_2_1_1 Size28 fontWeight600 displayFlex_left"><image style="width: 40upx;height: 40upx;" src="../../static/dp.png" mode=""></image>{{datainfo.u_m_name}}</view>
				<view class="DiscountDetails_2_1_2 displayFlex_right">
					<!-- 关注 -->
					<view class="Size24 displayFlex_center">{{i18n.my.Follow}}</view>
				</view>
			</view>
			<!-- 店铺简介 -->
			<view class="DiscountDetails_2_2 Size26 displayFlex_left"><text style="margin-left: 30upx;color: #000000;">{{i18n.DiscountDetails.ShopProfile}}:{{datainfo.u_m_brief}}</text></view>
			<!-- 营业时间 -->
			<view class="DiscountDetails_2_2 Size24 displayFlex_left"><image style="width: 24upx;height: 24upx;" src="../../static/ysj.png" mode=""></image>{{i18n.DiscountDetails.BusinessHours}}: {{datainfo.u_m_starttime }}----{{datainfo.u_m_endtime}}</view>
			<!-- 位置 -->
			<view class="DiscountDetails_2_2 Size24 displayFlex_left"><image style="width: 24upx;height: 24upx;" src="../../static/weiz.png" mode=""></image>{{i18n.DiscountDetails.Location}}:{{datainfo.u_m_address}}</view>
		</view>
		
		<!-- 领取优惠券 -->
		<view class="DiscountDetails_3 widths Size28 fontWeight600 displayFlex_left">{{i18n.DiscountDetails.GetCoupons}}</view>
		
		
		<view class="DiscountDetails_4 widths">
			<view class="Margin030">
				<view class="DiscountDetails_4_1 widths">
					<view class="Margin020">
						<view class="DiscountDetails_4_1_1 widths"  v-for="(item,index) in datacouponinfo">
							<view class="DiscountDetails_4_1_1_1 widths displayFlex_left">
								<view class="DiscountDetails_4_1_1_1_1 displayFlex_left">
									<view class=" displayFlex_center"><image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view>
								</view>
								<view class="DiscountDetails_4_1_1_1_2">
									<!-- 店铺名称 -->
									<view class="Size28 fontWeight600 displayFlex_left">{{datainfo.u_m_name}}</view>
									<!-- 有效期至 -->
									<view class="Size24">{{i18n.DiscountDetails.ValidUntil}}:{{item.c_end_time}}</view>
								</view>
								<view class="DiscountDetails_4_1_1_1_3 displayFlex_center">
									<view class="Size32 fontWeight600">￥{{item.c_used_amount}}</view>
									<!-- 满15可用 -->
									<view class="Size24">满{{item.c_with_amount}}可用</view>
								</view>
							</view>
							<view class="DiscountDetails_4_1_1_2 widths displayFlex_fen">
								<!-- 剩余数量 -->
								<view class="Size22">{{i18n.DiscountDetails.BalanceAvailable}}:{{item.c_available_num}}</view>
								<!-- 已领取 -->
                                <view class="Size24 displayFlex_center" v-if="item.c_status == 2">{{i18n.DiscountDetails.Received}}</view>
								<view class="Size24 d1 displayFlex_center" v-if="item.c_status == 1" @tap="DiscountDetailsBtn(1,item.id,datainfo.id)">{{i18n.DiscountDetails.getNow}}</view>            
							</view>
						</view>
					</view>
				</view>


			</view>
		</view>
		
		
		<!-- 领取成功弹框 -->
		<view class="DiscountDetails_5_0" v-if="ISDiscount" @tap="DiscountDetailsBtn(3)"></view>
		<view class="DiscountDetails_5 widths" v-if="ISDiscount">
			<view class="DiscountDetails_5_1 displayFlex_center">
				<view class=""><image style="width: 120upx;height: 120upx;" src="../../static/dui.png" mode=""></image></view>
				<!-- 领取成功 -->
				<view class="Size24">{{i18n.popup.ReceivedSuccessfully}}</view>
			</view>
			<view class="DiscountDetails_5_2">
				<view class="Margin030">
					<view class="DiscountDetails_5_2_1 Size26 displayFlex_left">
						{{i18n.DiscountDetails.ValidUntil}}:{{endtime.c_end_time}}
					</view>
				</view>
			</view>
			<view class="DiscountDetails_5_3">
				<view class="Margin040">
					<view class="DiscountDetails_5_3_1 displayFlex_center">
						<!-- 确定 -->
						<view class="displayFlex_center Size26" @tap="DiscountDetailsBtn(2)">{{i18n.popup.confirm}}</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		
		
		<view class="diandi30"></view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				datainfo:[],
				datacouponinfo:[],
				c_with_sn:'',
				endtime:'',
				ISDiscount:false,
			}
		},
		onLoad:function(option) {
			//传过来的店铺id
			let id = option.id;
			//console.log(id);
			let account = option.account;
		    this.getinfo(id);//获取店铺列表
			this.getcouponinfo(id,account);//获取店铺列表
		},
		onShow() {
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.DiscountDetails.details
			});
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		methods: {
			
			getinfo(id){
					const token = uni.getStorageSync('token');
					let url = '/api/user/get_shop_info',
					params = {
							id:id,
					};
					//console.log(url, params)
					this.Http.Post(url, params)
					.then(data => {
							//console.log(data.data)
							this.datainfo=data.data
							this.account=this.datainfo.u_account
					})
			 
			},
			//优惠券
			getcouponinfo(shop_id,account){
					const token = uni.getStorageSync('token');
					const user_id = uni.getStorageSync("user_id");
					let url = '/api/coupon/get_coupon_list',
					params = {
						
							c_with_sn:account,
							shop_id:shop_id,
							user_id:user_id
					};
					//console.log(account);
					//console.log(shop_id);
					this.Http.Post(url, params)
					.then(data => {
							//console.log(data.data)
							this.datacouponinfo=data.data
					})
					
			 
			},
			DiscountDetailsBtn(index,c_id,shop_id){
				if(index == 1){ //点击领取优惠券
					// token = uni.getStorageSync('token');
					const user_id = uni.getStorageSync("user_id");
					//console.log(user_id);
					let url = '/api/coupon/receive_coupon',
					
					params = {
							c_id:c_id,
							shop_id:shop_id,
							user_id:user_id,
					};
					//console.log(url, params)
					this.Http.Post(url, params)
					.then(data => {
						//console.log(data);
						if(data.code == 200){
							this.endtime=data.data
				             this.ISDiscount = true
						}else{
							this.UNIEvolution.uniShowToast(data.msg);
						
						}
						
							
						
					})
					//;
				}else if(index == 2){
					this.ISDiscount = false;
				}else if(index == 3){
					this.ISDiscount = false;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.DiscountDetails_1{
		height: 512upx;
		background: #FFFFFF;
		position: relative;
		.DiscountDetails_1_0_0{
			width: 100%;
			height: 512upx;
			background: #000000;
			opacity: 0.4;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
		.DiscountDetails_1_0{
			width: 100%;
			height: 512upx;
			// background: #000000;
			position: absolute;
			top: 0;
			view{
				width: 200upx;
				height: 200upx;
				background: #F0AD4E;
			}
		}
	}
	.DiscountDetails_2{
		min-height: 286upx;
		background: #FFFFFF;
		.DiscountDetails_2_1{
			min-height: 63upx;
			// background: #C0C0C0;
			.DiscountDetails_2_1_1{
				width: 60%;
				height: 63upx;
				// background: #3F536E;
				image{
					margin-left: 30upx;
					margin-right: 15upx;
				}
			}
			.DiscountDetails_2_1_2{
				width: 40%;
				height: 63upx;
				// background: #C0C0C0;
				view{
					width: 120upx;
					height: 45upx;
					background: #cbcbcb;
					border-radius: 22upx;
					color: #FFFFFF;
					margin-right: 30upx;
				}
			}
		}
		.DiscountDetails_2_2{
			min-height: 63upx;
			// background: #F0AD4E;
			color: #4f4f4f;
			image{
				margin-left: 30upx;
				margin-right: 10upx;
			}
		}
	}
	
	.DiscountDetails_3{
		height: 60upx;
		// background: #F0AD4E;
		margin-top: 15upx;
		text-indent: 30upx;
	}
	
	.DiscountDetails_4{
		.DiscountDetails_4_1{
			height: 260upx;
			background: #FFFFFF;
			margin-top: 20upx;
			border-radius: 15upx;
			.DiscountDetails_4_1_1{
				height: 260upx;
				// background: #fff;
				.DiscountDetails_4_1_1_1{
					height: 165upx;
					// background: #3F536E;
					border-bottom: 2upx dashed #f2f2f2;
					.DiscountDetails_4_1_1_1_1{
						width: 25%;
						height: 165upx;
						// background: #C0C0C0;
						view{
							width: 120upx;
							height: 120upx;
							border-radius: 15upx;
							image{
								border-radius: 15upx;
							}
						}
					}
					.DiscountDetails_4_1_1_1_2{
						width: 50%;
						height: 165upx;
						// background: #F0AD4E;
						view:nth-child(1){
							margin-top: 24upx;
							height: 65upx;
							color: #000000;
						}
						view:nth-child(2){
							height: 60upx;
							color: #6a6a6a;
						}
					}
					.DiscountDetails_4_1_1_1_3{
						width: 25%;
						height: 165upx;
						// background: #C0C0C0;
						flex-direction: column;
						view:nth-child(1){
							color: #f11212;
						}
						view:nth-child(2){
							color: #6a6a6a;
						}
					}
				}
				.DiscountDetails_4_1_1_2{
					height: 88upx;
					// background: #F0AD4E;
					view:nth-child(1){
						color: #bcbcbc;
					}
					view:nth-child(2){
						width: 	154upx;
						height: 45upx;
						background: #cbcbcb;
						color: #FFFFFF;
						border-radius: 22upx;
					}
					.d1{
						width: 	154upx;
						height: 45upx;
						background: #f7dd4c !important;
						color: #FFFFFF;
						border-radius: 22upx;
					}
				}
			}
		}
	}
	
	.DiscountDetails_5_0{
		width: 100%;
		height: 100vh;
		background: #000000;
		opacity: 0.4;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.DiscountDetails_5{
		height: 520upx;
		background: #f7dd4c;
		position:fixed;
		bottom: 0;
		border-radius: 30upx 30upx 0 0;
		.DiscountDetails_5_1{
			width: 100%;
			height: 265upx;
			// background: #DD524D;
			flex-direction: column;
		}
		.DiscountDetails_5_2{
			width: 100%;
			height: 100upx;
			// background: #C0C0C0;
			.DiscountDetails_5_2_1{
				width: 100%;
				height: 96upx;
				// border: 2upx solid #f9e471;
				border-top:2upx solid #f9e471;
				border-bottom:2upx solid #f9e471;;
				color: #4a4f69;
				text-indent: 30upx;
			}
		}
		.DiscountDetails_5_3{
			width: 100%;
			height: 150upx;
			// background: #3F536E;
			.DiscountDetails_5_3_1{
				width: 100%;
				height: 150upx;
				view{
					width: 100%;height: 82upx;
					
					background: #18415d;
					border-radius: 41upx;
					color: #FFFFFF;
				}
			}
			
		}
	}
	
	
	
</style>
