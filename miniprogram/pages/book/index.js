// pages/books/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    isbn: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.fetchBookByIsbn(options.isbn);
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

  fetchBookByIsbn: function(isbn){
    const db = wx.cloud.database();
    const _this = this;
    console.log(isbn);
    db.collection('books').where({
      isbn: isbn
    })
    .get().then(res => {
      _this.setData({
        book: res.data[0],
        isbn: isbn
      })
    })
  }

})