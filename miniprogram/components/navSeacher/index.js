// components/navSeacher/index.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    defaultData: {
      type: Object,
      value: {
        title: "我是默认标题"
      },
      observer: function(newVal, OldVal){}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: wx.getStorageSync('statusBarHeight') + 'px',
    navBarHeight: wx.getStorageSync('navBarHeight') + 'px',
    menuBottonHeight  : wx.getStorageSync('menuBottonHeight') + 'px',
    navAndStatusBarHeight: wx.getStorageSync('statusBarHeight') + wx.getStorageSync('navBarHeight') + 'px'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
