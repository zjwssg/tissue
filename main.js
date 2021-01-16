import Vue from 'vue'
import App from './App'


//验证码获取封装
	import whCaptcha from 'common/wh-captcha/wh-captcha.vue';
	Vue.component("whCaptcha", whCaptcha)
	


// 引入的封装方法
import Http from "common/http.js"
Vue.prototype.Http = Http; 


 // 暂无列表

	import NoList from './common/No-List.vue';
	Vue.component("NoList", NoList)

import UNIEvolution from "common/UNIEvolution.js";
Vue.prototype.UNIEvolution = UNIEvolution;


// 头部
import heads from 'components/heads.nvue';
	Vue.component("heads", heads)

import ScanCode from 'components/Scan-code.nvue';
		Vue.component("ScanCode", ScanCode)

import Detailss from 'components/Detailss.nvue';
	Vue.component("Detailss", Detailss)
	
	import mine from 'components/mine.nvue';
		Vue.component("mine", mine)
		
		
import uniSection from './components/uni-transition/uni-section.vue';
Vue.component("uniSection", uniSection)
import uniTransition from './components/uni-transition/uni-transition.vue';
Vue.component("uniTransition", uniTransition)		
		
import store from './store/vuex.js'
Vue.prototype.$store = store


// 考虑规范性,使用 module.exports 导出,应该使用 require 引用
let Chinese = require('./static/locales/zh-CN.js')
let English = require('./static/locales/en-US.js')
let Tradition = require('./static/locales/zh-HK.js')
let drM = require('./static/locales/dr-M.js')

// VueI18n
import VueI18n from 'vue-i18n'

// VueI18n
Vue.use(VueI18n)
		
		

Vue.config.productionTip = false

// VueI18n
// 注意下述代码务必放在代码 "Vue.prototype._i18n = i18n" 上方
const i18n = new VueI18n({
	// 默认语言
	locale: 'zh-CN',
	// 引入语言文件
	messages: {
		'zh-CN': Chinese,
		'en-US': English,
        'zh-HK': Tradition,
		'dr-M':drM
	}
})

// VueI18n
Vue.prototype._i18n = i18n

App.mpType = 'app'

const app = new Vue({
	i18n,
    ...App
})
app.$mount()


