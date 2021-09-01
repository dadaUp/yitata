// pages/detail/components/intro/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    intro: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    _clamp: true,
    _showExpand: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleExpand: function(e){
      this.setData({
        _clamp: !this.data._clamp
      })
    }
  },

  
})
