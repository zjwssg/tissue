<!-- phoneNumber.vue  绑定手机号 -->
<template>
	<view class="phoneNumber">
		<view class="Logon_2">
			<view class="Margin040">
				<view class="Logon_2_1 widths">
					
					
					<view class="diandi40"></view>
					<!-- 绑定手机号 -->
					<view class="Logon_2_1_2 widths Size24 displayFlex_left">{{ i18n.bindingPhone.TelephoneNumber }}</view>
					<view class="Logon_2_1_3 displayFlex_left">
						<view class="Logon_2_1_3_1 displayFlex_right" style="width: 90%;">
							<!-- 请输入手机号 -->
							<input type="text" value="" :placeholder="i18n.bindingPhone.inputUserName" />
						</view>
					</view>
					<view class="diandi40"></view>
					<!-- 验证码 -->
					<view class="Logon_2_1_2 widths Size24 displayFlex_left">{{ i18n.bindingPhone.VerificationCode }}</view>
					<view class="Logon_2_1_3 displayFlex_left">
						<view class="Logon_2_1_3_1 displayFlex_right">
							<!-- 请输入验证码 -->
							<input type="text" value="" :placeholder="i18n.bindingPhone.inputVerificationCode" />
						</view>
						<view class="Logon_2_1_3_2 displayFlex_left">
							<!-- 获取验证码 -->
							<view class="Size22 displayFlex_center">{{ i18n.bindingPhone.GetCaptcha }}</view>
						</view>
					</view>
					
					
					<view class="diandi60"></view>
					<!-- 绑定 -->
					<view class="Logon_2_1_5 Size28 displayFlex_center">{{ i18n.bindingPhone.binding }}</view>
					<view class="diandi100"></view><view class="diandi50"></view>
					
					
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
			// 导航栏多语言
			uni.setNavigationBarTitle({
			    title: this.i18n.bindingPhone.BindingMobileNumber
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
	.phoneNumber{
		width: 100%;
		height: 100vh;
		background: #FFFFFF;
	}
	.Logon_2{
		.Logon_2_1{
			min-height: 100upx;
			// background: #DD524D;
			
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
			
			.Logon_2_1_5{
				width: 100%;
				height: 82upx;
				background: #f7dd4c;
				border-radius: 41upx;
				color: #FFFFFF;
			}
			
			
		}
	}
</style>
