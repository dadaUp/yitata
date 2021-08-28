// pages/detail/components/intro/index.js
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
    intro: '复杂性科学使用计算来探索物理和社会科学。在《复杂性思考：复杂性科学和计算模型（原书第2版）》中，你将使用图表、元胞自动机以及基于智能体的模型来研究物理学、生物学和经济学。无论你是中等水平的Python程序员还是希望学习计算机建模的学生，都可以通过一系列工作示例、练习、案例研究和易于理解的解释深入学习复杂系统。作为Python编程与算法的理想教材，《复杂性思考：复杂性科学和计算模型（原书第2版）》还有助于自学者掌握关于他们可能未曾谋面的主题与想法的宝贵经验。',
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
