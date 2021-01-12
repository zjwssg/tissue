// 基于uni的官方api 二次封装的 重复使用方法

// 引入该文件方法   （mani.js中引入全局变量）

// import UNIEvolution from "common/UNIEvolution.js";
// Vue.prototype.UNIEvolution = UNIEvolution;

// 上传图片的URL

const API_URL = "http://jg.ittun.com/upload/files";



// 提示框  （普通提示框 适合用于 操作成功提醒）
function uniShowToast(title,duration,icon){  
	//title传弹出的字  duration传时间以毫秒为单位 icon传是否显示图标 success 是  none 否
	uni.showToast({
		title:title,
		duration:duration || 2000,
		icon:icon || "none"
	});
}

// 开启加载框  （适合用于数据未加载前使用）
function uniShowLoading(title){
	// title 传加载的字
	uni.showLoading({
	    title: title || "加载中"
	});
}

// 关闭加载框 （适合用于数据加载完以后关闭加载框）
function uniHideLoading(){
	uni.hideLoading()
}


// 显示模态弹窗  (适合用于提示之后有操作的使用)
function uniShowModal(title,content,cancelText,cancelColor,confirmText,confirmColor){
	// title 提示的标题  content 提示的内容  cancelText 	取消按钮的文字  cancelColor 取消按钮的文字颜色
	// confirmText  确定按钮的文字  confirmColor 确定按钮的文字颜色
	
	// 调用方式
	// this.UNIEvolution.uniShowModal("温馨提醒", "是否点击确认",).then(res=>{
	// 	console.log(res)
		// if(res.confirm){ //确定
			
		// }else{ //取消
			
		// }
	// })
	
	 let promise = new Promise(function(resolve,reject){
		 uni.showModal({
		     title: title,
		     content: content,
			 cancelText:cancelText || "取消",
			 cancelColor:cancelColor || "#000000",
			 confirmText:confirmText || "确定",
			 confirmColor:confirmColor || "#3CC51F",
		     success: function (res) { 
				 resolve(res)
		     }
		 });
	 })
	return promise
}


// 拨打电话。
function uniPhoneCall(phoneNumber){
	uni.makePhoneCall({
	    phoneNumber:phoneNumber 
	});
}


// 扫码
function uniCode(){   //扫码
	let promise = new Promise(function(resolve,reject){
		uni.scanCode({
		    success: function (res) {
		        console.log('条码类型：' + res.scanType);
		        console.log('条码内容：' + res.result);
				resolve(res)
		    }
		});
	})
	return promise
}


// 传输为null阻拦器
function uniprevent(value,title){  
	// value 为要判断的值   title为要提示的字
	if(value == "" || value == null || value == undefined || value == 0){
		uni.showToast({
			title:title || "输入不能为空",
			icon:"none",
		}); 
		return false;
	}
	
}

// 图片上传 

function uniImage(count,names){
	let promise = new Promise(function(resolve,reject){
		uni.chooseImage({
			sourceType: ["camera", "album"],
			sizeType: ['compressed'],
			count:count,
			success: (res) => {
				console.log(res)	
				var filePaths = res.tempFilePaths
				
				// var ImageARR = []
				
				var img = [];
				
				for(var i=0; i<filePaths.length; i++){
					// console.log(filePaths[i])
					// ImageARR.push(filePaths[i])
					
					let obj = new Object();  
					obj.name = "img";  
					obj.url = res.tempFiles[i].path;  
					img.push(obj);  
					console.log(obj);  
					obj = null;  
					
				}
				console.log(img)
				
				uni.uploadFile({
					url:API_URL,    
					filePath:img,
					name:names,
					header: {'content-Type': 'multipart/form-data'},
					formData:{
													
					},
					method:"POST",
					success: (res) =>{
						console.log(res)
						
						resolve(res)

					}
				})
				
			}
		
		})
		
	})
	
	return promise
	
	
}





// AvatarUpload(){ //头像上传
// 				console.log("111")
// 				const userid = uni.getStorageSync('userid');
// 				const token = uni.getStorageSync('token');
// 				let that = this;
				
// 				uni.chooseImage({
// 					sourceType: ["camera", "album"],
// 					sizeType: ['compressed'],
// 					count: 1,
// 					success: (res) => {
// 						console.log(res)
						
// 						var filePaths = res.tempFilePaths[0]
// 						console.log(filePaths)
						
// 						 uni.uploadFile({
// 						        url:that.Image + "uploadFile",    
// 						        filePath:filePaths,
// 						        name:'files',
// 								formData:{
									
// 								},
// 								method:"POST",
// 						        success: (res) =>{
// 									console.log(res)
// 									var atr = ""
// 									var arrs = JSON.parse(res.data);
// 									console.log(arrs)
// 									for(var i=0; i<arrs.data.length; i++){
// 										console.log(arrs.data[i])
										
// 										atr = arrs.data[i].id
// 										that.imgs = this.Http.apiIMG + arrs.data[i].path
// 									}
									
									
									
// 									const userid = uni.getStorageSync('userid');
// 									const token = uni.getStorageSync('token');
									
// 									let url = 'sysUser/update',
// 										params = {
// 											id:userid,
// 											fileIds:atr,
											
// 										};
// 									console.log(url, params)
// 									this.Http.Post(url, params)
// 										.then(data => {
// 											console.log(data)
									
// 											if (data.status == "success") {
												
// 												that.img =	that.imgs
												
										
// 											} else if (data.status == "error") {
// 												uni.showToast({
// 													title: data.msg,
// 													icon: "none",
// 												})
									
// 											} else if (data.status == "had_login") {
// 												uni.showModal({
// 													title: '温馨提示',
// 													content: data.msg,
// 													cancelText: "退出登录",
// 													confirmText: "重新登录",
// 													success: function(res) {
// 														if (res.confirm) {
// 															console.log('用户点击确定');
// 															uni.redirectTo({
// 																url: "./Login"
// 															})
// 														} else if (res.cancel) {
// 															uni.redirectTo({
// 																url: "./Login"
// 															})
// 														}
// 													}
// 												});
// 											}
									
									
									
// 										})
// 										.catch(err => {
// 											wx.showToast({
// 												icon: 'none',
// 												title: '网络错误'
// 											})
// 										})
									
									
									
									
									
									
									
// 						            // that.img = filePaths
// 						        }
// 						    })
						
// 					}
				
// 				})	
// 			},




// ===================================================================常用js逻辑封装============================================================================

// 时间类：

	// 获取当前时间  年月日
	   
	   // 调用方法:  this.UNIEvolution.currentTime(index)
	   
	   // index:
			
			// 1. 2020-01-01
			// 2. 2020/01/01
			// 3. 2020.01.01
			// 4. 2020-01-01 12:30	
			// 5. 2020/01/01 12:30	
			// 6. 2020.01.01 12:30
			// 7. 当前13位时间戳
			// 8. 当前10位时间戳
			// 9. 获取当前时间至7天以后日期以及星期几 格式为数据对象类型
			// 10. 获取当前星期几
	function currentTime(index){
		var date = new Date();
		var nian = date.getFullYear(); //获取完整的年份(4位)
		var yue = date.getMonth() + 1;; //获取当前月份(0-11,0代表1月)
		yue = yue < 10 ? ('0' + yue) : yue;//月补0
		var ri = date.getDate(); //获取当前日(1-31)
		ri = ri < 10 ? ('0' + ri) : ri;//天补0
		var shi = date.getHours(); //获取当前小时数(0-23)
		shi = shi < 10 ? ('0' + shi) : shi;//小时补0
		var fen = date.getMinutes(); //获取当前分钟数(0-59)
		fen = fen < 10 ? ('0' + fen) : fen;//分钟补0
		var Timestamp = date .getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
		var TimestampM = date .getTime()/1000; //获取当前时间(从1970.1.1开始的毫秒数)
		var CurrentWeek = date.getDay(); //获取当前星期X(0-6,0代表星期天)
		
		
		var NYR
		if(index == 1){
			NYR = nian + "-" + yue  + "-" + ri
		}else if(index == 2){
			NYR = nian + "/" + yue  + "/" + ri
		}else if(index == 3){
			NYR = nian + "." + yue  + "." + ri
		}else if(index == 4){
			NYR = nian + "-" + yue  + "-" + ri + " " + shi + ":" + fen
		}else if(index == 5){
			NYR = nian + "/" + yue  + "/" + ri + " " + shi + ":" + fen
		}else if(index == 6){
			NYR = nian + "." + yue  + "." + ri + " " + shi + ":" + fen
		}else if(index == 7){
			NYR = Timestamp
		}else if(index == 8){
			NYR = parseInt(TimestampM)
		}else if(index == 9){
			var i;
			var day = new Date();
			var week = day.getDay();//获取当前星期数
			var date = day.getTime();//获取当前具体时间，在页面上显示日期xx/xx;
			var XZrili = [];
			//小日历日期显示
			for (i = 0; i < 7; i++) {
			  var week_tmp;
			  if(i==0){
			    week_tmp = "今";
			  }
			  else if(i==1){
			    week_tmp = "明";
			  }
			  else
			    switch((week+i)%7){
			      case 1: week_tmp = "一"; break;
			      case 2: week_tmp = "二"; break;
			      case 3: week_tmp = "三"; break;
			      case 4: week_tmp = "四"; break;
			      case 5: week_tmp = "五"; break;
			      case 6: week_tmp = "六"; break;
			      case 0: week_tmp = "日"; break;
			      default: alert('something wrong');
			    }
				// console.log(week_tmp);
				// console.log(date+i*24*3600*1000)
				var TimeStamp = date+i*24*3600*1000
				var dateS = new Date(TimeStamp);
				var N = dateS.getFullYear(); //获取完整的年份(4位)
				var Y = dateS.getMonth() + 1;; //获取当前月份(0-11,0代表1月)
				Y = Y < 10 ? ('0' + Y) : Y;//月补0
				var R = dateS.getDate(); //获取当前日(1-31)
				R = R < 10 ? ('0' + R) : R;//天补0
				var S = dateS.getHours(); //获取当前小时数(0-23)
				S = S < 10 ? ('0' + S) : S;//小时补0
				var F = dateS.getMinutes(); //获取当前分钟数(0-59)
				F = F < 10 ? ('0' + F) : F;//分钟补0
				var week_tmpS;
				  switch((week+i)%7){
				    case 1: week_tmpS = "一"; break;
				    case 2: week_tmpS = "二"; break;
				    case 3: week_tmpS = "三"; break;
				    case 4: week_tmpS = "四"; break;
				    case 5: week_tmpS = "五"; break;
				    case 6: week_tmpS = "六"; break;
				    case 0: week_tmpS = "日"; break;
				    default: alert('something wrong');
				  }
				XZrili.push({
					id:i+1,
					Week:date+i*24*3600*1000,
					Timestamp:parseInt((new Date(date+i*24*3600*1000)).getTime()/1000),
					Time:week_tmp,
					week_tmpS:week_tmpS,
					date_:N + "-" + Y + "-" + R,
					dateI:N + "/" + Y + "/" + R,
					dateD:N + "." + Y + "." + R,
					wholeDate_:N + "-" + Y + "-" + R + " " + S + ":" + F,
					wholeDateI:N + "/" + Y + "/" + R + " " + S + ":" + F,
					wholeDateD:N + "." + Y + "." + R + " " + S + ":" + F
				})
			}
			NYR = XZrili
		}else if(index == 10){
			NYR = CurrentWeek
		}
		return NYR
	}

	
	
	// 时间转换    // 调用方法:  this.UNIEvolution.ConversionTime(index,Time)   参数必传
	
	// index 使用的是什么   
				// 1. 传入时间格式获取10位时间戳
				// 2.传入时间格式获取13位时间戳
				// 3.传入10位时间戳获取时间格式
				// 4.传入13位时间戳获取时间格式
				// 5.传入某个日期获取某天近七天年月日星期天   格式必须为 2020-01-01
	// Time 传入的时间或者时间戳
				
	function ConversionTime(index,Time,){
		
		var result;
		if(index == 1){  //时间格式转时间戳10位  支持 2020-01-01  2020/01/01  2020.01.01  其他格式自行转换后传入
			result = (new Date(Time)).getTime()/1000;
		}else if(index == 2){ //时间格式转时间戳13位  2020-01-01
			result = (new Date(Time)).getTime();
		}else if(index == 3){
			var TimeDigital = Number(Time)
			var date = new Date(TimeDigital * 1000);
			var nian = date.getFullYear(); //获取完整的年份(4位)
			var yue = date.getMonth() + 1;; //获取当前月份(0-11,0代表1月)
			yue = yue < 10 ? ('0' + yue) : yue;//月补0
			var ri = date.getDate(); //获取当前日(1-31)
			ri = ri < 10 ? ('0' + ri) : ri;//天补0
			var shi = date.getHours(); //获取当前小时数(0-23)
			shi = shi < 10 ? ('0' + shi) : shi;//小时补0
			var fen = date.getMinutes(); //获取当前分钟数(0-59)
			fen = fen < 10 ? ('0' + fen) : fen;//分钟补0
			result = nian + "-" + yue  + "-" + ri + " " + shi + ":" + fen
		}else if(index == 4){
			var TimeDigital = Number(Time)
			var date = new Date(TimeDigital);
			var nian = date.getFullYear(); //获取完整的年份(4位)
			var yue = date.getMonth() + 1;; //获取当前月份(0-11,0代表1月)
			yue = yue < 10 ? ('0' + yue) : yue;//月补0
			var ri = date.getDate(); //获取当前日(1-31)
			ri = ri < 10 ? ('0' + ri) : ri;//天补0
			var shi = date.getHours(); //获取当前小时数(0-23)
			shi = shi < 10 ? ('0' + shi) : shi;//小时补0
			var fen = date.getMinutes(); //获取当前分钟数(0-59)
			fen = fen < 10 ? ('0' + fen) : fen;//分钟补0
			result = nian + "-" + yue  + "-" + ri + " " + shi + ":" + fen
		}else if(index == 5){
			
			var i;
			var day = new Date(Time);
			var week = day.getDay();//获取当前星期数
			var date = day.getTime();//获取当前具体时间，在页面上显示日期xx/xx;
			var XZrili = [];
			//小日历日期显示
			for (i = 0; i < 7; i++) {
			  var week_tmp;
			  if(i==0){
			    week_tmp = "今";
			  }
			  else if(i==1){
			    week_tmp = "明";
			  }
			  else
			    switch((week+i)%7){
			      case 1: week_tmp = "一"; break;
			      case 2: week_tmp = "二"; break;
			      case 3: week_tmp = "三"; break;
			      case 4: week_tmp = "四"; break;
			      case 5: week_tmp = "五"; break;
			      case 6: week_tmp = "六"; break;
			      case 0: week_tmp = "日"; break;
			      default: alert('something wrong');
			    }
				// console.log(week_tmp);
				// console.log(date+i*24*3600*1000)
				var TimeStamp = date+i*24*3600*1000
				var dateS = new Date(TimeStamp);
				var N = dateS.getFullYear(); //获取完整的年份(4位)
				var Y = dateS.getMonth() + 1;; //获取当前月份(0-11,0代表1月)
				Y = Y < 10 ? ('0' + Y) : Y;//月补0
				var R = dateS.getDate(); //获取当前日(1-31)
				R = R < 10 ? ('0' + R) : R;//天补0
				var S = dateS.getHours(); //获取当前小时数(0-23)
				S = S < 10 ? ('0' + S) : S;//小时补0
				var F = dateS.getMinutes(); //获取当前分钟数(0-59)
				F = F < 10 ? ('0' + F) : F;//分钟补0
				var week_tmpS;
				  switch((week+i)%7){
				    case 1: week_tmpS = "一"; break;
				    case 2: week_tmpS = "二"; break;
				    case 3: week_tmpS = "三"; break;
				    case 4: week_tmpS = "四"; break;
				    case 5: week_tmpS = "五"; break;
				    case 6: week_tmpS = "六"; break;
				    case 0: week_tmpS = "日"; break;
				    default: alert('something wrong');
				  }
				XZrili.push({
					id:i+1,
					Week:date+i*24*3600*1000,
					Timestamp:parseInt((new Date(date+i*24*3600*1000)).getTime()/1000),
					Time:week_tmp,
					week_tmpS:week_tmpS,
					date_:N + "-" + Y + "-" + R,
					dateI:N + "/" + Y + "/" + R,
					dateD:N + "." + Y + "." + R,
					wholeDate_:N + "-" + Y + "-" + R + " " + S + ":" + F,
					wholeDateI:N + "/" + Y + "/" + R + " " + S + ":" + F,
					wholeDateD:N + "." + Y + "." + R + " " + S + ":" + F
				})
			}
			result = XZrili
		}
		
		
		
		return result;
	}
	
	

	

// from类  
	
	// 表单传值

	
	function FormPass(value){
		
		console.log(value)
		
		
		
	}














// 方法暴露
module.exports = {
	
	uniShowToast,     // 提示框  （普通提示框 适合用于 操作成功提醒）
	uniShowLoading,  //开启加载框  （适合用于数据未加载前使用）
	uniHideLoading,  // 关闭加载框 （适合用于数据加载完以后关闭加载框）
	uniShowModal,    // 显示模态弹窗  (适合用于提示之后有操作的使用)
	uniPhoneCall,    // 拨打电话
	uniCode,         // 扫码
	uniprevent,      // 传输为null阻拦器
	uniImage,
	currentTime,     //当前时间
	ConversionTime,  //时间转换
	FormPass,        //表单传值
}
