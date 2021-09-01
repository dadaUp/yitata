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
    const db = wx.cloud.database();
    const _this = this;
    console.log(_this.data.isbn)
    db.collection('books').where({
      isbn: _this.data.isbn
    }).count().then(res => {
      console.log(res);
      if (res.total > 0) {
        wx.showToast({
          title: '当前书目已经存在',
          icon: 'none'
        })
      } else {
        console.log(_this.data)
        db.collection('books').add({
            data: {
              isbn: _this.data.book.isbn,
              title: _this.data.book.title,
              author: _this.data.book.author,
              summary: _this.data.book.summary,
              cover: _this.data.book.cover,
              createTime: db.serverDate()
            }
          })
          .then(res => {
            console.log(res);
            wx.showToast({
              title: '捐书成功'
            })
            _this.setData({
              book: {
                title: ''
              },
              isbn: ''
            })
          })
      }
    });
  },

  addBookByIsbn: function(isbn){
    const db = wx.cloud.database();
    const _this = this;
    console.log(isbn)
    db.collection('books').where({
      isbn: isbn
    }).count().then(res => {
      if (res.total > 0) {
        wx.showToast({
          title: '当前书目已经存在',
          icon: 'none'
        })
      } else {
        wx.request({
          // url: 'http://feedback.api.juhe.cn/ISBN',
          url: 'https://api.jisuapi.com/isbn/query',
          data: {
            appkey: '082366a9a7c459f7',
            isbn: isbn
            // key: 'ec9ed348c54fa351e433c3afa3c2126c'
          },
          success(rest) {
            console.log(rest);
            // if (rest.data.error_code !== 0) {
            if (rest.data.status !== 0) {
              wx.showToast({
                title: '图书信息获取失败，请重试',
                icon: 'none'
              })
            } else {
              _this.setData({
                book: {
                  title: rest.data.result.title,
                  author: rest.data.result.author,
                  summary: rest.data.result.summary,
                  cover: rest.data.result.pic,
                  isbn: rest.data.result.isbn
                },
                isbn: rest.data.result.isbn
              })
            }
          }
        })
      }
    })
  },

  scan: function(){
    var _this = this;
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        _this.addBookByIsbn(res.result);
      }
    });
  }
})