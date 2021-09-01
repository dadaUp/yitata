Page({

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
    books: [
      {},{},{},{},{},{},{},{},{}
    ]
  },

})