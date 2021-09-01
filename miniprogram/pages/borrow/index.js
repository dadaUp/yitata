Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: '',
    book: {
      isbn: '',
      title: '',
      cover: '',
      author: '',
      summary: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isbn: options.isbn
    })
  },

  borrow: function(){
    // TODO

    wx.showToast({
      title: '功能正在玩命开发中',
      icon: 'none'
    })
    this.setData({
      book: {
        title: ''
      },
      isbn: ''
    })
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
  },

  scan: function(){
    var _this = this;
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        _this.fetchBookByIsbn(res.result);
      }
    });
  }
})