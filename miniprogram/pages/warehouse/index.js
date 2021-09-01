Page({

  onLoad: function(){
    this.fechBooks('books', 0, 20);
  },

  data: {
    widgets: [{
      icon: '/images/日历-32px.svg',
      title: '计划',
      url: '',
    }, {
      icon: '/images/社区-32px.svg',
      title: '社区',
      url: '',
    }, {
      icon: '/images/捐书-32px.svg',
      title: '捐书',
      url: '',
    }, {
      icon: '/images/借阅-32px.svg',
      title: '借阅',
      url: '/pages/borrow/index',
    }],
    filterTags: [{
      id: 1,
      name: '全部',
      checked: true
    },{
      id: 2,
      name: '互联网'
    },{
      id: 3,
      name: '文学'
    },{
      id: 4,
      name: '艺术'
    },{
      id: 5,
      name: '小说'
    },{
      id: 6,
      name: '科学'
    }],
    books: []
  },

  
  fechBooks: function(dataBaseName = "books", skipNumber = 0, needNumber = 20){
    const db = wx.cloud.database();
    const _this = this;
    db.collection(dataBaseName).skip(skipNumber).orderBy('createTime', 'desc').limit(needNumber).get()
    .then(res => {
      console.log(res);
      const oldList = _this.data.books;
      const newList = oldList.concat(res.data);
      const hasMore = !(res.data && res.data.length < 1);
      _this.setData({
        books: newList,
        hasMore,
      })
    })
  }

})