// pages/warehouse/components/filterBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tags: {
      type: Array,
      value: [{
        id: 0,
        name: '',
        checked: false
      }]
    },
    checkedIndex: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    check: function (e) {
      const index = e.currentTarget.dataset.index;
      const checkedIndex = this.data.checkedIndex;
      if (checkedIndex && index === checkedIndex) {
        return;
      }
      let checked = 'tags[' + index + '].checked';
      let unchecked = 'tags[' + checkedIndex + '].checked';
      this.setData({
        [checked]: true,
        [unchecked]: false,
        checkedIndex: index
      })
    }
  }
})