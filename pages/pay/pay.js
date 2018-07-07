// pages/pay/pay.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:null,
    pay_success:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({ options})
    var _this = this;
      wx.requestPayment({
        timeStamp: options.timeStamp,
        nonceStr: options.nonceStr,
        package:"prepay_id="+options.prepay_id,
        signType: options.signType,
        paySign: options.paySign,
        success:(res)=>{
          console.log('success');
          console.log(res);
          _this.setData({
            pay_success: 1
          })
        },
        fail:(res)=>{
          console.log('fail');
          console.log(res);
          _this.setData({
            pay_success: 0
          })
        }
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
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },
  toOrder:function(event) {
    console.log(1)
    wx.navigateTo({
      url: '../webview/webview?path=3',
    })
  },
  toHome:function(event) {
    console.log(2)
    wx.navigateTo({
      url: '../webview/webview?path=2',
    })
  },

})