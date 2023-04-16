// components/L-tab--control/L-tab--control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    order:{
      type: Object,
      value: {}
    }
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
    onChange(event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none',
      });
    },
    orderClick(){
    wx.navigateTo({
      url: '/pages/products/products',
    })
  }
  },
  
})
