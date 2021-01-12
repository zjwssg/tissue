
<!-- 

使用方法：

	 main.js 中引入 ： 
	
	//验证码获取封装
	import whCaptcha from 'common/wh-captcha/wh-captcha.vue';
	Vue.component("whCaptcha", whCaptcha)
 
	使用组件中引入
 
 
	 // <wh-captcha
	 //   ref="captcha"
	 //   :secord="30"
	 //   title="获取验证码"
	 //   waitTitle="稍等(SECORD)秒"
	 //   normalClass="captcha-normal"
	 //   disabledClass="captcha-disabled"
	 //   @click="getCaptcha"
	 // ></wh-captcha>
 
	
	// getCaptcha() {  //获取验证码
	// 	if(this.$refs.captcha.canSend()) this.$refs.captcha.begin();
	// },
 
 
 -->



<template>
	<view class="">
	  <view v-if="flag == 0" @click="clickAction" :class="[state === 'normal' ? normalClass : disabledClass]">{{ state === 'normal' ? title : waitTitle.replace('SECORD', currSecord) }}</view>
	  <view v-if="flag == 1" class="coo">{{ state === 'normal' ? title : waitTitle.replace('SECORD', currSecord) }}</view>
	</view>
</template>

<script>
	
	
	// <wh-captcha
	//   ref="captcha"
	//   :secord="30"
	//   title="获取验证码"
	//   waitTitle="稍等(SECORD)秒"
	//   normalClass="captcha-normal"
	//   disabledClass="captcha-disabled"
	//   @click="getCaptcha"
	// ></wh-captcha>
	
	// import whCaptcha from '../../components/wh-captcha/wh-captcha.vue';
	
	// components: {
	//   whCaptcha
	// },
	
	
	// getCaptcha() {  //获取验证码
	// 	if(this.$refs.captcha.canSend()) this.$refs.captcha.begin();
	// },
	
	
/*
 * 获取验证码组件
 * @param title 正常状态下显示文字
 * @param waitTitle 等待状态下的显示文字，文字中需要包含SECORD字段以替换倒计时秒数
 * @param secord 等待时长
 * @param normalClass 正常状态下样式
 * @param disabledClass 禁用状态下样式
 */
export default {
  props: {
    title: {
      type: String,
      default: '获取验证码'
    },
    waitTitle: {
      type: String,
      default: '稍等（SECORD）秒'
    },
    secord: {
      type: Number,
      default: 60
    },
    normalClass: {
      type: String,
      default: 'normal'
    },
    disabledClass: {
      type: String,
      default: 'disabled'
    },
	
  },
  data() {
    return {
      state: 'normal',
      currSecord: 0,
	  flag:"0"
	  
    };
  },
  methods: {
    clickAction() {
      this.$emit('click');
	  // this.flag = "1"
    },
    canSend() {
      return this.state === 'normal';
    },
    begin() {
      this.currSecord = this.secord;
	   this.flag = "1"
      this.state = 'wait';
      this.beginInterval();
    },
    beginInterval() {
      this.currSecord = this.currSecord - 1;
      if (this.currSecord <= 0) {
        this.state = 'normal';
		this.flag = "0"
		
      } else {
		  
        setTimeout(this.beginInterval, 1000);
      }
    }
  }
};
</script>

<style scoped>
.normal {
  background: rgba(246, 246, 246, 1);
  width: 219upx;
  height: 76upx;
  line-height: 76upx;
  border-radius: 10upx;
  border: 2upx solid rgba(63, 67, 70, 1);
  font-size: 28upx;
  font-weight: 400;
  color: rgba(27, 27, 27, 1);
  text-align: center;
}
.disabled {
  background: rgba(246, 246, 246, 1);
  width: 219upx;
  height: 76upx;
  line-height: 76upx;
  border-radius: 10upx;
  font-size: 28upx;
  font-weight: 400;
  text-align: center;
  color: rgba(127, 127, 127, 1);
  border-color: rgba(127, 127, 127, 1);
}
.coo{
	color: #C0C0C0;
}
</style>
