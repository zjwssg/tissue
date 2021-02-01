<!-- Logon.vue   登录 -->
<template>
	<view class="Logon">
		
		<view class="Logon_0 displayFlex_right">
			<text class="Size28 fontWeight600" @tap="langBtn()">{{ i18n.tabBar.language }}</text>
		</view>
		<view class="Logon_1">
			<view class="diandi40"></view>
			<view class="Logon_1_1 displayFlex_center">
				<view class="" @tap="langBtn()"><image class="img100" :src="`http://47.98.243.156:8090/static/logo.png`" mode=""></image></view>
			</view>
		</view>
		
		<view class="Logon_2">
			<view class="Margin040">
				<view class="Logon_2_1 widths">
					<!-- 登录 -->
					<view class="Logon_2_1_1 widths Size48 fontWeight600 displayFlex_left">{{ i18n.login.logonTitle }}</view>
					<view class="diandi40"></view>
					<!-- {{ i18n.login.language }}  电话号码-->
					<view class="Logon_2_1_2 widths Size24 displayFlex_left">{{ i18n.login.TelephoneNumber }}</view>
					<view class="Logon_2_1_3 displayFlex_left">
						<view class="Logon_2_1_3_1 displayFlex_right" style="width: 90%;">
							<!-- 请输入手机号 -->
							<input type="text"  v-model="inputUserName" value="" :placeholder="i18n.login.inputUserName" />
						</view>
					</view>
					<view class="diandi40"></view>
					<!-- 验证码 -->
					<view class="Logon_2_1_2 widths Size24 displayFlex_left">{{ i18n.login.VerificationCode }}</view>
					<view class="Logon_2_1_3 displayFlex_left">
						<view class="Logon_2_1_3_1 displayFlex_right">
							<!-- 请输入验证码 -->
							<input type="text" v-model="inputVerificationCode" value="" :placeholder="i18n.login.inputVerificationCode" />
						</view>
						<view class="Logon_2_1_3_2 displayFlex_left">
							<!-- 获取验证码 -->
							<view class="Size22 displayFlex_center"><text  @tap="LogonBtn(6)">{{i18n.login.GetCaptcha}}</text></view>
						</view>
					</view>
					
					<view class="Logon_2_1_4">
						<view class="Margin020">
							<view class="Logon_2_1_4_1 displayFlex_fen">
								<!-- 登录即代表您已同意 -->
								<view class="Size22">*{{i18n.login.LoginProtocol}}<text @tap="LogonBtn(1)">《x隐私协议》</text></view>
								<!-- 未注册将自动注册 -->
								<view class="Size22">{{i18n.login.automaticLogon}}</view>
							</view>
						</view>
					</view>
					
					<view class="diandi60"></view>
					<!-- 登录 -->
					<view class="Logon_2_1_5 Size28 displayFlex_center" @tap="LogonBtn(5)">{{i18n.login.login}}</view>
					<view class="diandi100"></view><view class="diandi50"></view>
					
					<view class="Logon_2_1_6 displayFlex_center">
						<view class=""></view>
						<!-- 其他登录方式 -->
						<view class="Size26">{{i18n.login.OtherLoginMethods}}</view>
						<view class=""></view>
					</view>
				</view>
			</view>
		</view>
		<view class="diandi60"></view>
		<view class="Logon_3">
			<view class="Margin0100">
				<view class="Logon_3_1 displayFlex_fen">
					<view class="displayFlex_left Size26" @tap="LogonBtn(3)"><image style="width: 48upx;height: 48upx;" src="../../static/fak.png" mode=""></image>Facebook</view>
					<!-- 微信 -->
					<view class="displayFlex_center Size26"  @tap="LogonBtn(4)"><image style="width: 48upx;height: 48upx;margin-left: -20upx;" src="../../static/wxs.png" mode=""></image>{{i18n.login.WeChat}}</view>
				</view>
			</view>
		</view>
		
		
		<view class="Logon_4_0" v-if="ISagreement" @tap="LogonBtn(2)"></view>
		<view class="Logon_4" v-if="ISagreement">
			<view class="Logon_4_1 Size32 displayFlex_center">
				某某某协议
				<view class="Logon_4_1_1 displayFlex_center">
					<view class="" @tap="LogonBtn(2)"><image class="img100" src="../../static/x.png" mode=""></image></view>
				</view>
			</view>
			<view class="Margin025">
				<view class="Size24">协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议</view>
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputUserName:"",
				inputVerificationCode:"",

				ISagreement:false,
			}
		},
		onLoad() {
	
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		methods: {
			LogonBtn(index){
				
				console.log(index);
				if(index == 1){
					this.ISagreement = true;
				}else if(index ==2){ 
					this.ISagreement = false;
				}else if(index ==3){ //fak
					
				}else if(index ==4){ //微信
					uni.switchTab({
						url:"../index/index" 
					})
					//注释跳转首页
					// uni.navigateTo({
					// 	url:"./phoneNumber"
					// })
				}else if(index ==5){ //直接登录
					if(this.inputUserName == ""){
						this.UNIEvolution.uniShowToast("请输入电话号码")
						return false
					};
					if(this.inputVerificationCode == ""){
						this.UNIEvolution.uniShowToast("请输入验证码")
						return false
					};
					this.UNIEvolution.uniShowLoading()
					const code = uni.getStorageSync('code');
					console.log(code);
					if(this.inputVerificationCode !== code){
						uni.showToast({
							title: '验证码不正确',
							image:'../../static/xx.png',
							duration: 2000
						});
						return false
					}
					console.log(code);
					uni.request({
						url:"http://47.98.243.156:8090/api/client/login",
						data:{
							user_phone:this.inputUserName,
							user_code:this.inputVerificationCode,
							type:0,
						},
						header: {'content-Type': 'application/x-www-form-urlencoded'},
						method: 'POST',
						//header:"Content-type: application/x-www-form-urlencoded",
						success(data) {
							console.log(data);
							console.log(data.data.data[0]['user_id']);
						if(data.data.code == 200){
								//this.UNIEvolution.uniShowToast("验证码获取成功");
							    //this.UNIEvolution.uniShowToast(msg.data);
								uni.showToast({
									title: '登陆成功',
									duration: 2000
								});		
								
								uni.setStorageSync('user_id', data.data.data[0]['user_id']);
								uni.switchTab({
									url:"../index/index" 
								})
								//console.log(uni.getStorageSync('code'));
							}else if(data.data.code == 400){
								uni.showToast({
									title: '登陆失败',
									image:'../../static/xx.png',
									duration: 2000
								});
								
							} 
						},
							
					})

				}else if(index==6){
					//获取验证码
					if(this.inputUserName == ""){
						this.UNIEvolution.uniShowToast("请输入电话号码")
						return false
					};
					this.UNIEvolution.uniShowLoading()
					//const token = uni.getStorageSync('token');
					//url = 'api/client/getverificationcode',
					
					uni.request({
						url:"http://47.98.243.156:8090/api/client/getverificationcode",
						data:{
							user_phone:this.inputUserName,
							type:0,
						},
						header: {'content-Type': 'application/x-www-form-urlencoded'},
						method: 'POST',
						//header:"Content-type: application/x-www-form-urlencoded",
						success(msg) {		
							console.log(msg.data.data);
							if(msg.data.code == 200){
								//this.UNIEvolution.uniShowToast("验证码获取成功");
							    //this.UNIEvolution.uniShowToast(msg.data);
								uni.showToast({
									title: '验证码获取成功',
									duration: 2000
								});		
								try {
								    uni.setStorageSync('code', msg.data.data);
								} catch (e) {
								    // error
								}
								console.log(uni.getStorageSync('code'));
							}else if(msg.data.code == 400){
								uni.showToast({
									title: '验证码获取失败',
									image:'../../static/xx.png',
									duration: 2000
								});
							}
							/* if(msg.data.errorCode == 0){
								uni.navigateTo({
									url: '../index/Successful'
								});
							} */
						},
							
					})
				}
			},
			langBtn(){  //语言切换
				uni.navigateTo({
					url:"./lang"
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	
	.Logon{
		width: 100%;
		height: 100vh;
		background: #FFFFFF;
	}
	
	.Logon_0{
		width: 100%;
		height: 100upx;
		// background: #D2F1F0;
		text{
			margin-right: 40upx;
		}
	}
	.Logon_1{
		width: 100%;
		height: 280upx;
		// background: #007AFF;
		.Logon_1_1{
			width: 100%;
			height: 240upx;
			// background: #C0C0C0;
			view{
				width: 280upx;
				height: 156upx;
				// background: #F0AD4E;
			}
		}
	}
	.Logon_2{
		.Logon_2_1{
			min-height: 100upx;
			// background: #DD524D;
			.Logon_2_1_1{
				height: 150upx;
				// background: #DD524D;
			}
			.Logon_2_1_2{
				height: 57upx;
				// background: #007AFF;
				text-indent: 40upx;
			}
			.Logon_2_1_3{
				width: 100%;
				height: 90upx;
				border-radius: 45upx;
				background: #edf0f7;
				.Logon_2_1_3_1{
					width: 70%;
					height: 90upx;
					// background: #4CD964;
					input{
						width:90%;
						height:50upx;
						// background: #007AFF;
						font-size: 26upx;
						border: 0;
					}
				}
				.Logon_2_1_3_2{
					width: 30%;
					height: 90upx;
					// background: #DD524D;
					view{
						width: 165upx;
						height: 50upx;
						border-radius: 25upx;
						background: #f7dd4c;
						color: #FFFFFF;
					}
				}
			}
			.Logon_2_1_4{
				width: 100%;
				// height: 63upx;
				// background: #C0C0C0;
				.Logon_2_1_4_1{
					width: 100%;
					// height: 63upx;
					// background: #DD524D;
					view:nth-child(1){
						color: #808391;
						text{
							color: #000;
						}
					}
					view:nth-child(2){
						color: #808391;
						
					}
				}
			}
			.Logon_2_1_5{
				width: 100%;
				height: 82upx;
				background: #f7dd4c;
				border-radius: 41upx;
				color: #FFFFFF;
			}
			.Logon_2_1_6{
				width: 100%;
				height: 60upx;
				// background: #007AFF;
				view:nth-child(1){
					width:200upx;
					height: 4upx;
					background: #f2f2f2;
				}
				view:nth-child(2){
					margin-left: 20upx;
					margin-right: 20upx;
				}
				view:nth-child(3){
					width:200upx;
					height: 4upx;
					background: #f2f2f2;
				}
			}
			
		}
	}
	
	.Logon_3{
		width: 100%;
		height: 80upx;
		// background: #DD524D;
		.Logon_3_1{
			width: 100%;
			height: 80upx;
			// background: #C0C0C0;
			view{
				width: 220upx;
				height: 65upx;
				background: #edf0f7;
				border-radius: 32upx;
				image{
					margin-left: 24upx;
					margin-right: 17upx;
				}
			}
		}
	}
	
	.Logon_4_0{
		width: 100%;
		height: 100vh;
		background: #000000;
		opacity: 0.6;
		position: fixed;
		top: 0;
		left:0;
		right: 0;
		bottom: 0;
	}
	.Logon_4{
		width: 100%;
		height: 1000upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		border-radius: 20upx 20upx 0 0;
		.Logon_4_1{
			width: 100%;
			height: 110upx;
			// background: #C0C0C0;
			// position: relative;
			.Logon_4_1_1{
				width:110upx;
				height: 110upx;
				// background: #3F536E;
				position: absolute;
				right: 0;
				top: 0;
				view{
					width: 32upx;
					height: 32upx;
					// background: #F0AD4E;
				}
			}
		}
	}
	
</style>
