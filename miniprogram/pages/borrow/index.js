// pages/borrow/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: '',
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isbn: options.isbn
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

  borrow: function(){
    wx.showToast({
      title: '借阅成功',
    })
  },

  scan: function(){
    var _this = this;
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res);
        if(_this.isbn && res.result !== _this.isbn){
          wx.showToast({
            icon: 'none',
            title: '不是这本书',
          })
        } else {
          _this.borrow();
        }
      }
    });
  }
})