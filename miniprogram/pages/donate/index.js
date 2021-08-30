Page({

  data: {
    isbn: '',
    title: '',
    author: '',
    summary: '',
    miniSummary: '',
    cover: ''
  },

  scan: function () {
    var _this = this;
    const db = wx.cloud.database();
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res);
        _this.setData({
          isbn: res.result
        })
        const isbn = res.result;
        db.collection('books').where({
          isbn: _this.data.isbn
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
                    title: rest.data.result.title,
                    author: rest.data.result.author,
                    summary: rest.data.result.summary,
                    miniSummary: rest.data.result.summary ? rest.data.result.summary.substring(0, 100) : '',
                    // cover: rest.data.result.images_medium
                    cover: rest.data.result.pic
                  })
                }
              }
            })
          }
        })
      }
    })
  },

  enter: function () {
    const db = wx.cloud.database();
    const _this = this;
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
        db.collection('books').add({
            data: {
              isbn: _this.data.isbn,
              title: _this.data.title,
              author: _this.data.author,
              summary: _this.data.summary,
              cover: _this.data.cover
            }
          })
          .then(res => {
            console.log(res);
            wx.showToast({
              title: '导入成功',
              icon: 'success'
            })
            _this.setData({
              isbn: '',
              title: '',
              author: '',
              summary: '',
              miniSummary: '',
              cover: ''
            })
          })
      }
    });

  }
})