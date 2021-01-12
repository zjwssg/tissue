<!-- 
 
 使用方法：
 
 main.js 中引入 ： 
 
 // 暂无列表

	import NoList from './common/No-List.vue';
	Vue.component("NoList", NoList)
 
 
 使用组件中引入
 
 <No-List :NoTitle="NoTitle" :NoStat="NoStat" :NoImage="NoImage" :Nostyle="Nostyle"></No-List>
 
 data() {
 	return {
 		NoTitle: "暂无这个消息",    //暂无消息的文字标题
 		NoStat:null,               //暂无消息是否显示控制
 		NoImage:"../../static/zanwu.png", //暂无消息的图标显示
 		Nostyle:"width: 100upx;height: 100upx;", //暂无消息的图标大小控制
 	}
 },
 

 -->

<template>
	<view style="width: 100%;height: 500upx;" v-if="NoStat == null">
		<view class="diandi60"></view>
		<view style="width:100%;height: 300upx; align-items:flex-end;display: flex;justify-content: center;">
			<view :style="Nostyle">
				<image class="img100" :src="NoImage" mode=""></image>
			</view>
		</view>
		<view style="width: 100%;height: 50upx;line-height: 50upx;font-size: 24upx;color: #C1C1C1;text-align: center;">
			{{NoTitle}}
		</view>
	</view>
</template>

<script>
	// NoTitle: "暂无这个消息",    //暂无消息的文字标题
	// NoStat:null,               //暂无消息是否显示控制
	// NoImage:"../../static/zanwu.png", //暂无消息的图标显示
	// Nostyle:"width: 100upx;height: 100upx;", //暂无消息的图标大小控制
	
	export default {
		props:["NoTitle","NoStat","NoImage","Nostyle"],
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
	
		}
	}
</script>

<style lang="scsss" scoped>
</style>
