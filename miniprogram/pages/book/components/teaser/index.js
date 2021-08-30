// pages/detail/components/header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isbn: '9787111647348',
    isMark: false,
    isBorrow: false,
    title: '复杂性思考：复杂性科学和计算模型（原书第2版）',
    cover: 'http://api.jisuapi.com/isbn/upload/4a/705bad7bbd7337.jpg',
    meta: '[美] Allen B．Downey 著，郭涛，朱梦瑶 译'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMarkClick: function(e){
      const isbn = this.data.isbn;
      const action = e.detail.target.dataset.action;
      if(action === 'mark'){
        wx.navigateTo({
          url: '/pages/mark/index?isbn=' + isbn,
        })
      } else if(action === 'borrow'){
        wx.navigateTo({
          url: '/pages/borrow/index?isbn=' + isbn,
        })
      }
    }

  }
})
