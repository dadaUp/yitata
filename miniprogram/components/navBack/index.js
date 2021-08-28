// components/navBack/index.js
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
    statusBarHeight: wx.getStorageSync('statusBarHeight') + 'px',
    navAndStatusBarHeight: wx.getStorageSync('statusBarHeight') + wx.getStorageSync('navBarHeight') + 'px'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back: function(){
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
