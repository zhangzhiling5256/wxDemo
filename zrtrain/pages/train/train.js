// pages/train/train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    currentTab:0,
    interval: 3000,
    duration: 1000,
    imgUrls: [
      "/images/haibao/timg.jpg",
      "/images/haibao/timg1.jpg",
      "/images/haibao/timg2.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  switchNav: function(e) {
    console.log(e)
     var id=e.currentTarget.id;
     this.setData({currentTab:id})
  },
  formSubmit:function(e){
    var startStation=e.detail.value.startStation;
    var endStation=e.detail.value.endStation;
    var date=e.detail.value.data;
    var week=e.detail.value.week
    wx.navigateTo({
      url: `../trainList/trainList?startStation=${startStation}&endStation=${endStation}&date=${date}&week=${week}`
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})