// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTap:0,
    winWidth:0,
    winHeight:0,
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
      "/images/banner/banner.jpg",
      "/images/banner/banner1.jpg",
      "/images/banner/banner2.jpg",
      "/images/banner/banner3.jpg",

    ],
    movies:[]
  },
  switchNav:function(e){
   var id=e.currentTarget.id;
   this.setData({
     currentTap:id
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var page=this;
     wx.getSystemInfo({
       success: function(res) {
         page.setData({winWidth:res.windowWidth});
         page.setData({winHeight:res.windowHeight});
       },
     });
     this.loadMovies();
  },
switchNav:function(e){
    var id=e.currentTarget.id;
    this.setData({
      currentTap:id
    })
},
loadMovies:function(){
   var page=this;
  //  var key=util.getDataKey();
   wx.request({
     url: 'http://localhost:8888/movie',
    //  method:"GET",
    //  header:{
    //    "Content-Type":"json"
    //  },
     success:function(res){
          var subjects=res.data.data;
          var size=subjects.length;
          var len=parseFloat(size/3);
          page.setData({
            movies:subjects
          });
          page.setData({
            winHeight:(len+1)*230
          })
     }
   })
},

loadDetail:function(e){
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: `../movieDetail/movieDetail?id=${id}`
    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})