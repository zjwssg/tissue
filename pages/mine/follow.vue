<!-- follow.vue  关注 -->
<template>
	<view class="follow">
		<view class="news_1">
			<view class="Margin030">
				
				<view class="news_1_1 widths"  v-for="(item,index) in datalist">
					<view class="news_1_1_1 displayFlex_left">
						<view class="news_1_1_1_1 displayFlex_left"><view class=""><image class="img100" :src="`http://www.zhijin.com/static/img/${item.u_m_logo}`" mode=""></image></view></view>
						<view class="news_1_1_1_2">
							<!-- 店铺名称 -->
							<view class="Size28 fontWeight600 displayFlex_left">{{item.u_m_name}}</view>
						</view>
						<view class="news_1_1_1_3 Size24 displayFlex_right">   
							<!-- 已关注 -->
			  
							<view class="displayFlex_center">{{i18n.my.Following}}</view>
							<view class="displayFlex_center F1"  @tap="DiscountDetailsBtn(1,item.id,datainfo.id)" >{{i18n.my.Follow}}</view>
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
				title: 'Hello',
				atalist:"",
				datalist:"",
				user:""
			}
		},
		onLoad() {
	        this.getshopinfo();//获取店铺列表
			  this.getinfo();//获取店铺列表
		},
		onShow() {
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.my.myFollow
			});
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		methods: {
			getshopinfo(){
					//const token = uni.getStorageSync('token');
					let url = '/api/user/get_shop_list',
					params = {};
					console.log(url, params)
					this.Http.Post(url, params)
					.then(data => {
							console.log(data.data)
							this.datalist=data.data
					})
			 
			},
			getinfo(){
				// console.log(11111111);
				//const token = uni.getStorageSync('token');
				let url = '/api/client/get_info',
					params = {
						user_id:uni.getStorageSync("user_id"),
						
					};
				console.log(url, params)
				this.Http.Post(url, params)
					.then(data => {
						console.log(data.data),
						this.user=data.data
					})
			},
			DiscountDetailsBtn(index,c_id,shop_id){
				if(index == 1){ //点击关注
					const token = uni.getStorageSync('token');
					let url = '/api/coupon/receive_coupon',
					params = {
							c_id:c_id,
							shop_id:shop_id,
							user_id:sessionStorage.getItem("user_id"),
					};
					console.log(url, params)
					this.Http.Post(url, params,token)
					.then(data => {
						
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
					view{
						color: #000;
						height: 128upx;
					}
					
				}
				.news_1_1_1_3{
					width: 30%;
					height: 128upx;
					// background: #3F536E;
					color: #939393;
					view{
						width:140upx;
						height: 50upx;
						border-radius: 25upx;
						background: #cbcbcb;
						color: #FFFFFF;
					}
					.F1{
						background: #f7dd4c;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
