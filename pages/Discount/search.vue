<!-- search.vue   搜索 -->
<template>
	<view class="search">

		
		<view class="Discount_2">
			<view class="Margin030">
				<view class="Discount_2_1 displayFlex_center">
					<view class="Discount_2_1_1 displayFlex_left">
						<view class="displayFlex_center"><image src="../../static/fd.png" mode=""></image></view>
						<view class="">
					             <input type="text" v-model="searchString" placeholder="输入搜索内容" />
							<!-- <input v-on:keyup.enter.native="submit"><input type="text" value="" v-model="searchVal" :placeholder="i18n.Discount.Search"/> -->
						</view>
					

					</view>
				</view>
			</view>
		</view>

		
		
		<view class="Discount_3">
			<view class="Margin030">
				<view class="Discount_3_1 widths displayFlex_fen">
					
					<view class="Discount_3_1_1" @tap="searchBtn(1)" v-for="item in filteredArticles">
					<!-- 	<view class="Discount_3_1_1_1 widths"><image class="img100" src="../../static/6f25700c29258a9f.jpg" mode=""></image></view>
						<view class="Discount_3_1_1_2 widths Size26 fontWeight600 displayFlex_center">{{i18n.Discount.shopName}}</view> -->
						
						<view class="Discount_3_1_1_1 widths"><image class="img100" :src="`http://47.98.243.156:8090/static/img/${item.u_m_logo}`" mode=""></image></view>
						<view class="Discount_3_1_1_2 widths Size26 fontWeight600 displayFlex_center">{{item.u_m_name}}</view>
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
				title: 'Hello',
				   searchString: "",
				 
				        // 数据模型，实际环境你可以根据 Ajax 来获取
				 
				        articles: [ ]
			
				
			}
		},
		onLoad() {
	        
	        this.getlist();//获取店铺列表
		},
		onShow() {
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.Discount.Search
			});
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    },
	// 计算数学，匹配搜索
	        filteredArticles: function () {
	            var articles_array = this.articles,
	                searchString = this.searchString;
	 
	            if(!searchString){
	                return articles_array;
	            }


	            searchString = searchString.trim();
               console.log(searchString);
			   
	
	            articles_array = articles_array.filter(function(item){
	                if(item.u_m_name.indexOf(searchString) != -1){
						
					
	                    return item;
	                }
	            })
	 
	            // 返回过来后的数组
	            return articles_array;;
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
						this.articles=data.data
					})
		 
				},
			searchBtn(index){
				if(index == 1){
					uni.navigateTo({
						url:"./DiscountDetails"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.Discount_2{
		width: 100%;
		height: 88upx;
		background: #f7dd4c;
		.Discount_2_1{
			width: 100%;
			height: 88upx;
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
