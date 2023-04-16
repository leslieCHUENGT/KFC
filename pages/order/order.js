// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   active:1,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'https://www.fastmock.site/mock/5980c22bf140b3094c8a20a72a579bf1/mock/order',
      success:(res)=>{
        const{
          order
        } = res.data
        this.setData({
          order
        })
      }

    })
  }
})