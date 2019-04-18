// pages/movieDeail/movieDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    movsie: {},
    directors: [],
    casts: [],
    current: 0,
    winWidth: 0,
    winHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    let id = parseFloat(e.id);
    var page = this;
    wx.request({
      url: `http://localhost:8888/subjct?id=${id}`,
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        var movie = res.data.data;
        page.setData({
          movie
        })
        wx.setNavigationBarTitle({
          title: movie.name,
        })
      }
    });
    wx.getSystemInfo({
      success: function(res) {
        page.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      },
    })
  },
  switchNav: function(e) {
         var id=e.currentTarget.id;
         this.setData({
           currentTab:id
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