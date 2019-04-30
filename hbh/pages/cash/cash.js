// pages/cash/cash.js
function initSubMenuDisplay(){
    return ["hidden","hidden"]
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
     subMenuDispaly:initSubMenuDisplay(),
     currentTab:-1
  },
  tapMainMenu:function(e){
     let index=parseFloat(e.currentTarget.dataset.index),
         newSubMenuDispaly=initSubMenuDisplay();
         if(this.data.subMenuDispaly[index]=="hidden"){
           newSubMenuDispaly[index]="show";
           this.setData({
             currentTab:index
           })
         }else{
           newSubMenuDispaly[index]="hidden";
           this.setData({
             currentTab:-1
           })
         }
         this.setData({
           subMenuDispaly:newSubMenuDispaly
         })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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