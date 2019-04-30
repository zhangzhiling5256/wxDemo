// pages/trainList/trainList.js
var util=require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"",
    trainList:[],
    winHeight:600,
    currentTab:"1",
    name:"张志岭"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    let startStation=e.startStation,
          endStation=e.endStation,
          date=e.date;
          wx.setNavigationBarTitle({
            title: startStation+'->'+endStation,
          });
          this.setData({
            date
          });
          this.loadTtainsList(startStation,endStation);
  },
  loadTtainsList:function(startStatrion,endStation){
     wx.request({
       url: `http://localhost:8888/getLeftTicket?date=2018-4-19&startStation=${startStatrion}&endStation=${endStation}`,
       method:"GET",
       success:(res)=>{
        var trainList=res.data.data,
            size=trainList.length,
            winHeight=size*100+30;
            let ary=[];
            ary.push(trainList)
            this.setData({
                trainList:ary,
                winHeight:winHeight
            });
       }
     })
  },
  switchNav:function(e){
     let id=e.currentTarget.id;
     this.setData({
       currentTab:id
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