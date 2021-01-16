// 引入的封装方法
// import Http from "common/http.js"
// Vue.prototype.Http = Http; 



const API_URL = "http://www.zhijin.com:8080/";//47.98.243.156:8090

function Post(url, params) {
  // console.log(url, params, token)
  let promise = new Promise(function (resolve, reject) {

    uni.request({

      url: API_URL + url,

      data: params,

      method: 'POST',

      header: {'content-Type': 'application/x-www-form-urlencoded'},

      success: res => {

        resolve(res.data);

      },

      fail: res => {

        reject(res.data)

      }

    })

  });
  

  return promise

}


function GET(url, params,token) {

  let promise = new Promise(function (resolve, reject) {

    uni.request({

      url: API_URL + url,

      data: JSON.stringify(params),

      method: 'GET',

      header: { 'content-Type': 'application/x-www-form-urlencoded'},
		beforeSend: function(request) {
			console.log(request)
            request.setRequestHeader("Authorization", token);
        },
      success: res => {

        resolve(res.data);

      },

      fail: res => {

        reject(res.data);

      }

    })

  });

  return promise

}



function JsonPost(url, params,token) {

  let promise = new Promise(function (resolve, reject) {

    uni.request({

      url: API_URL + url,

      data: JSON.stringify(params),

      method: 'POST',

      header: { 'Content-Type': 'application/json','token':token },
		beforeSend: function(request) {
			console.log(request)
            request.setRequestHeader("Authorization", token);
        },
      success: res => {

        resolve(res.data);

      },

      fail: res => {

        reject(res.data);

      }

    })

  });

  return promise

}

function TokenPost(url,params,token){
	 let promise = new Promise(function(resolve,reject){
		 uni.request({
		 	url: API_URL + url ,
		 	method: 'POST',
			header: { 'content-Type': 'application/x-www-form-urlencoded','token':token},
		 	data: params,
		 	success: res => {
				resolve(res.data)
			},
		 	fail: res => {
				reject(res.data)
			}
		 });
	 })
	 return promise
}


//apiIMG 是上传图片的全路径   文件夹内是   this.apiImg = http://47.112.211.130:8080/web/upload

//apiHost  应该暂时未用到  但是不要删  防止报错


module.exports = {


  Post,

  JsonPost,
	
	TokenPost,
	
	GET,
  apiHost:'http://www.zhijin.com/',  //图片上传
  


  apiIMG:'http://www.zhijin.com/',     //图片展示

	getToken:function(){
		return uni.getStorageSync("token");
	},

}



// 页面用法

//import Http from '../utils/http.js';  //小程序支持ES6语法

// let url = 'user',
//   params = {
//     id: 1
//   };

	// Http.Get(url, params)
	//   .then(res => {
	//     if (res.code === 200) {

	//       doSomeThing(res) //请求到的数据处理操作

	//     } else {

	//       wx.showToast({

	//         icon: 'none',

	//         title: '网络错误'

	//       })

	//     }

	//   })
	//   .catch(err => {
	//     wx.showToast({

	//       icon: 'none',

	//       title: '网络错误'

	//     })

	//   })
  
