// pages/books/index.js
Page({

  /**
   * 页面的初始数据
   */
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
    plate1:{
      title: '',
      books: []
    },
    bookList:[{
      id: 1,
      title: '2021年度推荐书单',
      backImg: '../../images/background-orange.png',
      total: 10,
      imgCode: 1,
      covers: ['http://api.jisuapi.com/isbn/upload/4a/705bad7bbd7337.jpg','http://api.jisuapi.com/isbn/upload/37/e033f7b93f1869.jpg','http://api.jisuapi.com/isbn/upload/4b/f82310b5d930f7.jpg']
    },{
      id: 2,
      title: '八月借书榜',
      backImg: '../../images/background-green.png',
      total: 30,
      imgCode: 2,
      covers: ['http://api.jisuapi.com/isbn//upload/63/9eb17a4a83f18b.jpg','http://api.jisuapi.com/isbn//upload/61/b16390790e8088.jpg','http://api.jisuapi.com/isbn/upload/d5/8c434d661bd0c2.jpg']
    }],
    list:[],
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.createData();
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
    // this.fechBooks('books', this.data.list.length, 20);
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

  createData: function(){
    const db = wx.cloud.database();
    const _this = this;
    db.collection('books').skip(0).limit(20).get().then(res=>{
      _this.setData({
        plate1:{
          title: '最新上架',
          books: res.data
        }
      })
      console.log(res.data);
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