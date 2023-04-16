// components/L-platoon/L-platoon.js
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
    eventShow: true
  },
  
  /**
   * 组件的方法列表
   */
 
  methods: {
    closeEvent() {
      this.setData({
        eventShow: false
      })
    }
  }
})
