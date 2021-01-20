<template>
    <view class="content">
        <radio-group class="lang" @change="radioChange">
            <label v-for="(item, index) in dataList" :key="index" class="lang-list">
                <view class="option">
                    <view class="img"><image :src="item.imgUrl" mode="widthFix"></image></view>
                    <text class="txt">{{ item.value }}</text>
                </view>
                <radio :value="item.value" :checked="item.checked"></radio>
            </label>
        </radio-group>
    </view>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            dataList: [
                {
                    imgUrl: '../../static/cn.png',
                    value: '简体中文',
                    checked: true,
                    language: 'zh-CN'
                },
                {
                    imgUrl: '../../static/en.png',
                    value: 'English',
                    checked: false,
                    language: 'en-US'
                },
                {
                    imgUrl: '../../static/hk.png',
                    value: 'Bahasa Melayu',
                    checked: false,
                    language: 'zh-HK'
                },
				{
				    imgUrl: '../../static/hk.png',
				    value: 'தமிழ்',
				    checked: false,
				    language: 'dr-M'
				}
            ]
        };
    },
    computed: {
        i18n() {
            return this.$t('message');
        }
    },
	onLoad() {
		
	},
    onShow() {
        let items = this.dataList;
        let ind = uni.getStorageSync('index'),
            lang = uni.getStorageSync('select');
        // 判断选择的语言
        if (lang) {
            items[ind].checked = true;
            this.$i18n.locale = lang;
        } else {
            this.$i18n.locale = 'zh-CN';
        }
        // 导航栏多语言
        uni.setNavigationBarTitle({
            title: this.i18n.tabBar.language
        });
    },
    methods: {
        radioChange(e) {
            let _this = this;
            let items = _this.dataList;
            for (let i = 0; i < items.length; i++) {
                if (items[i].value == e.target.value) {
					console.log(items[i].value)
					console.log(e.target.value)
                    items[i].checked = true;
					console.log(items[i])
                    // console.log(e.target.value);
                    // console.log(items[i].value);

                    // 存储选择的下标
					console.log(i)
                    uni.setStorageSync('index', i);
                    // 存储选择的语言
                    uni.setStorageSync('select', items[i].language);
					console.log(uni.getStorageSync("select"))
                    _this.$i18n.locale = items[i].language;
					// tabbar多语言
					uni.setTabBarItem({
					    index: 0,
					    text: _this.i18n.tabBar.home
					});
					uni.setTabBarItem({
					    index: 1,
					    text: _this.i18n.tabBar.me
					});
					break;
                }
            }
			setTimeout(function() {
			    uni.navigateBack();
			}, 500);
        }
    }
};
</script>

<style>
.content {
    padding: 40upx 30upx;
}
.lang {
    display: flex;
    flex-direction: column;
	/* background: #007AFF; */
	margin-top: 10upx;
}
.lang .lang-list {
	margin-bottom: 30rpx;
    padding: 10upx 30upx;
	width: 100%;
	height:75upx;
    display: flex;
    justify-content: space-between;
	border: 2rpx solid #007AFF;
	border-radius: 16rpx;
	/* background: #E03997; */
}
.lang .lang-list:last-child {
    margin-bottom: 0;
}
.lang .lang-list .option {
    display: flex;
	align-items: center;
    justify-content: space-between;
}
.lang .lang-list .option .img {
    margin-right: 30upx;
    width: 40upx;
	line-height: 1;
}
.lang .lang-list .option .img image {
    width: 100%;
}
.lang .lang-list .option .txt {
    font-size: 28upx;
}
.lang .lang-list radio {
    transform: scale(0.7);
}
</style>
