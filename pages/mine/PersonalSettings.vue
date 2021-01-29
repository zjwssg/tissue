<!-- PersonalSettings.vue  个人设置 -->
<template>
	<view class="page">
		<view class="diandi15"></view><view class="diandi10"></view>
		<view class="PersonalSettings_1">
			<view class="Margin020">
				<view class="PersonalSettings_1_1">
					<view class="Margin020">
						<view class="PersonalSettings_1_1_1">
							<!-- PersonalSettingsBtn(1) -->
							<view class="PersonalSettings_1_1_1_1 displayFlex_left" @tap="AvatarUpload()">
								<!-- 头像 -->
								<view class="PersonalSettings_1_1_1_1_1">{{ i18n.my.ProfilePicture }}</view>
								<view class="PersonalSettings_1_1_1_1_2 displayFlex_right">
									
									<view class="displayFlex_center borderRadius">
										<image class="img100 borderRadius" v-model="XGuserIcon" :src="`http://47.98.243.156:8090/static/img/${user.user_icon}`" mode=""></image>
									</view>
									
									
								</view>
								<view class="PersonalSettings_1_1_1_1_3 displayFlex_right">
									<view class="displayFlex_center"><image class="img100" src="../../static/yo.png" mode=""></image></view>
								</view>
							</view>
							<view class="PersonalSettings_1_1_1_1 displayFlex_left" style="height: 88upx;" @tap="PersonalSettingsBtn(2)">
								<!-- 昵称 -->
								<view class="PersonalSettings_1_1_1_1_4">{{ i18n.my.Nickname }}</view>
								<view class="PersonalSettings_1_1_1_1_5 displayFlex_right">{{user.user_nickname ? user.user_nickname : i18n.my.NoNickname}}</view>
								<view class="PersonalSettings_1_1_1_1_6 displayFlex_right">
									<view class="displayFlex_center"><image class="img100" src="../../static/yo.png" mode=""></image></view>
								</view>
							</view>
							<view class="PersonalSettings_1_1_1_1 displayFlex_left" style="height: 88upx;" @tap="PersonalSettingsBtn(4)">
								<!-- 手机号 -->
								<view class="PersonalSettings_1_1_1_1_4">{{ i18n.my.PhoneNumber }}</view>
								<view class="PersonalSettings_1_1_1_1_5 displayFlex_right">{{user.user_phone ? user.user_phone : i18n.my.NoPhoneNumber}}</view>
								<view class="PersonalSettings_1_1_1_1_6 displayFlex_right">
									<view class="displayFlex_center"><image class="img100" src="../../static/yo.png" mode=""></image></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="diandi15"></view><view class="diandi10"></view>
		
		
		
		
		<view class="diandi100"></view><view class="diandi100"></view>
	
		
		
		<view class="PersonalSettings_4_0" v-if="changeUsername" @tap="guanbixiugai()"></view>
		<view class="PersonalSettings_4" v-if="changeUsername">
			<view class="Margin040">
				<view class="PersonalSettings_4_1">
					<!-- 修改用户昵称 -->
					<view class="PersonalSettings_4_1_1">{{ i18n.my.EditUserNickname }}</view>
					<view class="PersonalSettings_4_1_2">
						<view class="Margin050">
							<view class="diandi20"></view>
							<view class="PersonalSettings_4_1_2_1 displayFlex_center">
								<!-- 请输入修改的昵称 -->
								<input type="text" v-model="XGusername" value="" :placeholder="i18n.my.EditNickname"/>
							</view>
						</view>
					</view>
					<view class="PersonalSettings_4_1_3 displayFlex_center">
						<!-- 修改 -->
						<view class="" @tap="modifyBtn()">{{ i18n.my.Edit }}</view>
					</view>
					
				</view>
			</view>
		</view>
		
		
	
		
	</view>
</template>

<script>
	export default {
		inject:['reload'],
		data() {
			return {
				user:[],
				img:"../../static/logo.png",
				Image:"",
				apiHost:"",
				changeUsername:false,
				XGusername:"",
				XGuserIcon:"",
			}
		},

		onLoad() {
			this.Image = this.Http.apiIMG;  //图片展示
			this.apiHost = this.Http.apiHost;  //图片上传
			this.getinfo();//需要触发的函数
			console.log(this.apiHost)
		},
		onShow() {
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.my.PersonalSetting
			});
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		methods: {
			
		  getinfo(){
				// console.log(11111111);
				//const token = uni.getStorageSync('token');
				let url = '/api/client/get_info',
					params = {
						user_id:uni.getStorageSync('user_id'),
						
					};
				console.log(url, params)
				this.Http.Post(url, params)
					.then(data => {
						console.log(data.data)
						this.user=data.data
					})
		 
				},
		

			modifyBtn(){  //修改昵称
			
				console.log(this)
				if(this.XGusername == ""){
					this.UNIEvolution.uniShowToast("请输入昵称")
					return false
				};
				this.UNIEvolution.uniShowLoading()
				//const token = uni.getStorageSync('token');
				let url = '/api/client/update_user_nickname',
					params = {
						   user_nickname:this.XGusername,
						   user_id:uni.getStorageSync('user_id'),
					};
				console.log(url, params)
				this.Http.Post(url, params)
					.then(data => {
						console.log(data)
						if(data.code == 200){
		                    this.user.user_nickname=this.XGusername
							this.changeUsername = false;
						    this.UNIEvolution.uniShowToast("修改成功");
					        this.UNIEvolution.uniHideLoading(1);
				
							 
						}else{
							this.UNIEvolution.uniShowToast(data.msg);
							this.UNIEvolution.uniHideLoading();
						}
					})
			},
			guanbixiugai(){ //关闭修改框
				this.changeUsername = false;
			},

			AvatarUpload(){ //头像上传
				//const token = uni.getStorageSync('token');
				let that = this;
				uni.chooseImage({
					sourceType: ["camera", "album"],
					sizeType: ['compressed'],
					count: 1,
					success: (res) => {
						var filePaths = res.tempFilePaths;
						var fileData = res.tempFiles;
						const user_id = uni.getStorageSync('user_id');
						console.log(filePaths[0]);
						console.log(fileData[0]);
						 uni.uploadFile({
						        url:"http://47.98.243.156:8090/api/upload/upload",    
						        filePath:filePaths[0],
						        name:'file',
								formData:{
										'user_icon':'test',
								},
								header: {'content-Type': 'application/x-www-form-urlencoded'},
								method:"POST",
						        success: (res) =>{
									console.log(res);
									let url = '/api/upload/upload_img',
										params = {
											user_icon:res.data,
											user_id:user_id,
										};
									console.log(url, params)
									this.Http.Post(url, params)
										.then(data => {
											console.log(data)
											if(data.code == 200){
											    this.user.user_nickname=this.XGuserIcon
												this.UNIEvolution.uniShowToast("修改成功");
												// this.$store.dispatch('u_img',arrs.data.img);
											}else{
												this.UNIEvolution.uniShowToast(data.msg);
											}
										}) 
						        }
						    })
						
					}
				
				})	
			},
			PersonalSettingsBtn(index){
				if(index == 1){ //头像
					
				}else if(index == 2){ //昵称
					this.changeUsername = true;
				}else if(index == 3){ //性别
					
				}else if(index == 4){ //手机号
					this.UNIEvolution.uniShowToast("手机号不可修改")
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.PersonalSettings_1{
		width: 100%;
		// height: 400upx;
		// background: #007AFF;
		.PersonalSettings_1_1{
			width: 100%;
			// height: 400upx;
			background: #FFFFFF;
			border-radius: 15upx;
			.PersonalSettings_1_1_1{
				width: 100%;
				min-height: 100upx;
				// background: #F0AD4E;
				.PersonalSettings_1_1_1_1{
					width: 100%;
					height: 127upx;
					// background: #2C405A;
					border-bottom: 2upx solid #f8f8f8;
					.PersonalSettings_1_1_1_1_1{
						width: 50%;
						height: 127upx;
						// background: #C0C0C0;
						line-height: 127upx;
						font-size: 26upx;
						color: #000;
						text-indent: 10upx;
					}
					.PersonalSettings_1_1_1_1_4{
						width: 50%;
						height:88upx;
						// background: #C0C0C0;
						line-height: 88upx;
						font-size: 26upx;
						color: #000;
						text-indent: 10upx;
					}
					.PersonalSettings_1_1_1_1_2{
						width: 40%;
						height: 127upx;
						// background: #2F165C;
						view{
							width: 80upx;
							height: 80upx;
							// background: #C0C0C0;
						}
					}
					.PersonalSettings_1_1_1_1_5{
						width: 40%;
						height: 88upx;
						// background: #2F165C;
						line-height: 88upx;
						font-size: 25upx;
						color: #000;
					}
					.PersonalSettings_1_1_1_1_3{
						width: 10%;
						height: 127upx;
						// background: #3F536E;
						view{
							width: 32upx;
							height: 32upx;
							// background: #DD524D;
						}
					}
					.PersonalSettings_1_1_1_1_6{
						width: 10%;
						height: 88upx;
						// background: #3F536E;
						view{
							width: 32upx;
							height: 32upx;
							margin-right: 10upx;
							// background: #DD524D;
						}
					}
				}
			}
		}
	}
	
	.PersonalSettings_2{
		width: 100%;
		height: 100upx;
		// background: #DD524D;
		.PersonalSettings_2_1{
			width: 100%;
			height: 100upx;
			border-radius: 15upx;
			background: #FFFFFF;
			.PersonalSettings_1_1_1_1_4{
				width: 50%;
				height:88upx;
				// background: #C0C0C0;
				line-height: 88upx;
				font-size: 26upx;
				color: #000;
				text-indent: 32upx;
			}
			.PersonalSettings_1_1_1_1_5{
				width: 40%;
				height: 88upx;
				// background: #2F165C;
				line-height:44upx;
				font-size: 25upx;
				color: #000;
			}
			.PersonalSettings_1_1_1_1_6{
				width: 10%;
				height: 88upx;
				// background: #3F536E;
				view{
					width:25upx;
					height: 25upx;
					margin-right: 30upx;
					// background: #DD524D;
				}
			}
		}
	}
	
	.PersonalSettings_3{
		width: 100%;
		height: 90upx;
		// background: #007AFF;
		.PersonalSettings_3_1{
			width: 100%;
			height: 90upx;
			border-radius: 15upx;
			line-height: 90upx;
			color: #FFFFFF;
			text-align: center;
			font-size: 27upx;
			background: #56bf33;
		}
	}
	
	
	.PersonalSettings_4_0{
		width: 100%;
		height: 100vh;
		background: #000000;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.7;
	}
	.PersonalSettings_4{
		width: 100%;
		height: 400upx;
		// background: #007AFF;
		position:fixed;
		top: 30%;
		.PersonalSettings_4_1{
			width: 100%;
			height: 400upx;
			background: #FFFFFF;
			border-radius: 15upx;
			.PersonalSettings_4_1_1{
				width: 100%;
				height: 100upx;
				// background: #007AFF;
				line-height: 100upx;
				text-align: center;
				color: #000000;
				font-size: 32upx;
				font-weight: 600;
			}
			.PersonalSettings_4_1_2{
				width: 100%;
				height: 150upx;
				// background: #3F536E;
				.PersonalSettings_4_1_2_1{
					width: 100%;
					height: 100upx;
					// background: #F0AD4E;
					border-bottom: 2upx solid #C0C0C0;
					input{
						width: 100%;
						height: 70upx;
						// background: #4CD964;
						line-height: 70upx;
						font-size: 30upx;
						color: #000000;
						text-align: center;
					}
				}
			}
			.PersonalSettings_4_1_3{
				width: 100%;
				height: 150upx;
				// background: #C0C0C0;
				view{
					width: 60%;
					height: 100upx;
					background: #007AFF;
					border-radius: 20upx;
					font-size:36upx;
					color: #FFFFFF;
					line-height: 100upx;
					text-align: center;
				}
			}
		}
	}
	
	
	
	
	
</style>
