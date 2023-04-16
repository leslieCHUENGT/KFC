// pages/index/index.js
const app = getApp() // 获取app实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bar:0, // tabbar会改变这个值，不同页的搜索框会有不同的内容
    navHeight:app.globalData.navHeight,
    navTop:app.globalData.navTop,
    objectheight:app.globalData.objectheight,
    active: true,
    topNum: 0
  },
  barClick(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  goTop: function() {
    this.setData({
        topNum: this.data.topNum = 0
    });
  },
  mapClick(){
    wx.navigateTo({
      url: './childCpns/map/map',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/5980c22bf140b3094c8a20a72a579bf1/app/index',
      success:(res)=>{
        const{
          banners
        } = res.data
        this.setData({
          banners
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})