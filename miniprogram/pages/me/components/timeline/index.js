// pages/me/components/timeline/index.js
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
    historyTodayData: [{
      time: '08-31',
      book: {
        title: '复杂性思考：复杂性科学和计算模型（原书第2版）',
        author: '[美] Allen B．Downey 著，郭涛，朱梦瑶 译',
        cover: 'http://api.jisuapi.com/isbn/upload/4a/705bad7bbd7337.jpg'
      }
    }, {
      time: '08-25',
      book: {
        title: 'MySQL是怎样运行的',
        author: '小孩子4919',
        cover: 'http://api.jisuapi.com/isbn/upload/37/e033f7b93f1869.jpg'
      }
    }, {
      time: '08-13',
      book: {
        title: '重构',
        author: ' (美) 马丁·福勒 (Martin Fowler) , 著',
        cover: 'http://api.jisuapi.com/isbn/upload/ae/817b82f0d9fd05.jpg'
      }
    }, {
      time: '08-07',
      book: {
        title: '黑客与画家',
        author: '(美) 格雷厄姆 (Graham,P.) , 著',
        cover: 'http://api.jisuapi.com/isbn/upload/4b/f82310b5d930f7.jpg'
      }
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})