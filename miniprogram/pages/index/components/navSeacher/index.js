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
    menuBottonHeight: wx.getStorageSync('menuBottonHeight') + 'px',
    menuBottonWidth: wx.getStorageSync('menuBottonWidth') + 'px', 
    menuBottonTop: wx.getStorageSync('menuButtonTop') + 'px', 
    navAndStatusBarHeight: wx.getStorageSync('statusBarHeight') + wx.getStorageSync('navBarHeight') + 'px'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
