// pages/detail/components/conciseReviewBar/components/conciseReview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    review: {
      type: Object,
      user: {
        avatar: ''
      },
      content: ''
    }
  },

  attached:function(){
    console.log(this.data)
  },

  /**
   * 组件的初始数据
   */
  data: {
    isClamped: true
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
