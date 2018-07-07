// pages/webview/webview.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.wxLogin(function (channelId) {
      console.log(channelId);
      console.log(options);
      console.log(app.globalData)

      // 正式环境
      var _url = 'https://thsh.funsales.com/minih5/#/';

      console.log('path==' + options.path);
      if (options.path) {
        switch (options.path) {
          case '1':
            _url = _url + "?temp=" + new Date().getTime() + '&Authorication=' + app.globalData.authorication + '&channelId=' + app.globalData.channelId + '&openId=' + app.globalData.openid + '&unionId=' + app.globalData.unionid;
            break;
          case '2':
            _url = _url + "?temp=" + new Date().getTime() + '?channelId=' + app.globalData.channelId + '&openId=' + app.globalData.openid + '&unionId=' + app.globalData.unionid;
            break;
          case '3':
            _url = _url + 'Myorder' + '?channelId=' + app.globalData.channelId + '&openId=' + app.globalData.openid + '&unionId=' + app.globalData.unionid;
            break;
          default:
            break;
        }
      }
      that.setData({
        url: _url
      })
      console.log(that.data.url);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {

  // },
  onShow() {
    app.globalData.webShowed = true;//标记已经显示过web-view页了
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    app.globalData.urlPath = null
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      path: '/pages/index/index',
      imageUrl: '../../images/share.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  // methods
  onPostMessage(e) {

  },
})