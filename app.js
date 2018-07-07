//app.js
App({
  onHide() {
    this.globalData.webShowed = false;
  },
  onLaunch: function (options) {
 
  },
  wxLogin: function (cb) {
    var that = this
    if (this.globalData.channelId) {
      typeof cb == "function" && cb(this.globalData.channelId)
    } else {
      // 登录
      wx.login({
        success: res => {
          console.log(res)
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://thsh.funsales.com/mall/weixin/api/wxpayMiniProgramAction/onLogin.action', //接口地址
              data: {          //参数为json格式数据
                code: res.code
              },
              success: function (res) {
                // console.log(res.data.resultData.channelid)
                if (res.data.resultCode == '1') {
                  that.globalData.authorication = res.data.resultData.authorization
                  that.globalData.channelId = res.data.resultData.channelid
                  that.globalData.openid = res.data.resultData.openid
                  that.globalData.unionid = res.data.resultData.unionid
                  typeof cb == "function" && cb(that.globalData.channelId)
                  console.log(that.globalData)
                }
              },
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  },
  onShow: function (options) {
    console.log('onShow');  
  },
  globalData: {
    userInfo:null,
    authorication: null,
    channelId: null,
    openid: null,
    unionid: null,
    webShowed: false //标记web-view页面是否已经显示过了
  },
  data: {
    
  },
})