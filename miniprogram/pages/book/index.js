// pages/books/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo: {},
    isbn: ''
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  fechBookDeail: function(dataBaseName = "books", skipNumber = 0, needNumber = 20){
    const db = wx.cloud.database();
    const _this = this;
    db.collection(dataBaseName).skip(skipNumber).limit(needNumber).get()
    .then(res => {
      console.log(res);
      _this.setData({
        detailInfo: res,
      })
    })
  }
})