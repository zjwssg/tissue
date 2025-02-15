
const store = new Vuex.Store({  
    state: {  
		uerInfo: {},  
		hasLogin: false  
	},  
	mutations: {  
		login(state, provider) {//改变登录状态  
			state.hasLogin = true  
			state.uerInfo.token = provider.token  
			state.uerInfo.userName = provider.user_name  
			uni.setStorage({//将用户信息保存在本地  
				key: 'uerInfo',  
				data: provider  
			})  
		},  
		logout(state) {//退出登录  
			state.hasLogin = false  
			state.uerInfo = {}  
			uni.removeStorage({  
				key: 'uerInfo'  
			})  
		}  
	}  
})

