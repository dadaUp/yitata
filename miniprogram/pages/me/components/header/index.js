// pages/me/components/header/index.js
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
    imgNo: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeBgImg: function(){
      if(this.data.imgNo === 7){
        this.setData({
          imgNo: 1
        })
      } else {
        this.setData({
          imgNo: this.data.imgNo + 1
        })
      }
    }
  }
})
