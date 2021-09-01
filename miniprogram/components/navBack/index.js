// components/navBack/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String
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
      console.log(1)
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
