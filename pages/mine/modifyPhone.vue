<!-- modifyPhone.vue  修改手机号 -->
<template>
	<view class="modifyPhone page">
		<view class="Logon_2">
			<view class="Margin030">
				<view class="Logon_2_1 widths">
					
					
					
					<view class="Logon_2_1_3 displayFlex_left">
						<view class="Logon_2_1_3_1 displayFlex_right" style="width: 90%;">
							<!-- 请输入手机号 -->
							<input type="text" value="" v-model="inputUserName"  :placeholder="i18n.my.inputUserName" />
						</view>
					</view>
					
					<view class="Logon_2_1_3 displayFlex_left">
						<view class="Logon_2_1_3_1 displayFlex_right">
							<!-- 请输入验证码 -->
							<input type="text" value=""v-model="inputUserCode" :placeholder="i18n.my.inputVerificationCode" />
						</view>
						<view class="Logon_2_1_3_2 displayFlex_right">
							<!-- 获取验证码 -->
							<view class="Size22 displayFlex_center"  @tap="LogonBtn(1)">{{i18n.my.GetCaptcha}}</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		
		<view class="diandi100"></view>
		<view class="diandi100"></view>
		<view class="diandi100"></view>
		<view class="diandi100"></view>
		<view class="">
			<view class="Margin020">
				<!-- 绑定 -->
				<view class="Logon_2_1_5 Size28 displayFlex_center"  @tap="LogonBtn(2)" >{{i18n.my.binding}}</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				inputUserName:"",
				inputUserCode:""
			}
		},
		onLoad() {
		
		},
		onShow() {
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.my.EditMobileNumber
			});
		},
		computed: {
		    i18n() {
		        return this.$t('message');
		    }
		},
		methods: {
				LogonBtn(index){
					
					console.log(this.inputUserName);
					if(index == 1){
						//获取验证码
							if(this.inputUserName == ""  || this.inputUserName == 'undefined'){
								this.UNIEvolution.uniShowToast("请输入电话号码")
								return false
							};
							this.UNIEvolution.uniShowLoading()
							const user_id = uni.getStorageSync('user_id');
							uni.request({
								url:"http://47.98.243.156:8090/api/client/getverificationcode",
								data:{
									user_phone:this.inputUserName,
									type:0,
									user_id:user_id,
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
						
					}else if(index==2){
						
						//修改手机号
							if(this.inputUserName == ""  || this.inputUserName == 'undefined'){
								this.UNIEvolution.uniShowToast("请输入电话号码")
								return false
							};
							if(this.inputUserCode == ""  || this.inputUserCode == 'undefined'){
								this.UNIEvolution.uniShowToast("请输入验证码")
								return false
							};
							const code = uni.getStorageSync('code');
							if(this.inputUserCode !== code){
								uni.showToast({
									title: '验证码不正确',
									image:'../../static/xx.png',
									duration: 2000
								});
								return false
							}
							this.UNIEvolution.uniShowLoading()
							
							const user_id = uni.getStorageSync('user_id');
							uni.request({
								url:"http://47.98.243.156:8090/api/client/update_user_phone",
								data:{
									user_phone:this.inputUserName,
									user_code:this.inputUserCode,
									user_id:user_id,
								},
								header: {'content-Type': 'application/x-www-form-urlencoded'},
								method: 'POST',
								//header:"Content-type: application/x-www-form-urlencoded",
								success(msg) {		
									console.log(msg);
									if(msg.data.code == 200){
										//this.UNIEvolution.uniShowToast("验证码获取成功");
									    //this.UNIEvolution.uniShowToast(msg.data);
										uni.switchTab({
											url:"../index/index" 
										});
										uni.showToast({
											title: '修改成功',
											duration: 2000
										});	
										
									}else if(msg.data.code == 400){
										uni.showToast({
											title: '修改失败',
											image:'../../static/xx.png',
											duration: 2000
										});
									}else if(msg.data.code == 401){
										uni.showToast({
											title: '该手机号已存在',
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
					}
		}
	}
</script>

<style lang="scss" scoped>
	.Logon_2{
		background: #FFFFFF;
		.Logon_2_1{
			min-height: 100upx;
			// background: #DD524D;
		
			.Logon_2_1_3{
				width: 100%;
				height: 105upx;
				// border-radius: 45upx;
				background: #FFFFFF;
				border-bottom: 2upx solid #f2f2f2;
				.Logon_2_1_3_1{
					width: 70%;
					height: 105upx;
					// background: #4CD964;
					input{
						width:98%;
						height:50upx;
						// background: #007AFF;
						font-size: 26upx;
						border: 0;
					}
				}
				.Logon_2_1_3_2{
					width: 30%;
					height: 105upx;
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
			
			
			
			
		}
	}
	.Logon_2_1_5{
		width: 100%;
		height: 82upx;
		background: #f7dd4c;
		border-radius: 41upx;
		color: #FFFFFF;
	}
</style>
