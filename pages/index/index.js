//index.js
//获取应用实例
// var app = getApp();
const app = getApp()
var utils = require('../../utils/util.js')

Page({
  data: {
  },
  onLoad: function (options) {
    
  },
 
  onShow() {
    //如果已经显示过web-view页了，则执行后退操作，否则就跳到web-view页
    if (!app.globalData.webShowed) {
      wx.navigateTo({
        url: '/pages/webview/webview?path=1'
      })
    } else {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  doOptions() {
    this.toWebview();
  },
  toWebview() {
    wx.navigateTo({
      url: '../webview/webview?path=' + app.globalData.urlPath
    })
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
})
