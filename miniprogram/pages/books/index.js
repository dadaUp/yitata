// pages/books/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fechBooks();
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
    this.fechBooks('books', this.data.list.length, 20);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
/**
   * 跳转详情
   */
  navToDetail: function () {
    wx.navigateTo({
      url: '/pages/detail/index',
    })
  },

  fechBooks: function(dataBaseName = "books", skipNumber = 0, needNumber = 20){
    const db = wx.cloud.database();
    const _this = this;
    db.collection(dataBaseName).skip(skipNumber).limit(needNumber).get()
    .then(res => {
      console.log(res);
      const oldList = _this.data.list;
      const newList = oldList.concat(res.data);
      const hasMore = !(res.data && res.data.length < 1);
      _this.setData({
        list: newList,
        hasMore,
      })
    })
  }

})