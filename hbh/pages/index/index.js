//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: false,
    imgUrls: [
      "../../images/haibao/1.jpg",
      "../../images/haibao/2.jpg",
      "../../images/haibao/3.jpg",
      "../../images/haibao/4.jpg",
    ],
    nsvs: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function(e) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    let page = this;
    let navs = this.loadNavData();
    page.setData({
      navs: navs
    })
  },
  loadNavData: function(e) {
    let navs = [],
      nav0 = new Object();
    nav0.img = "../../images/nav/dxy.jpg";
    nav0.name = "订喜宴";
    navs[0] = nav0;

    let nav1 = new Object();
    nav1.img = "../../images/nav/phz.jpg";
    nav1.name = "拍婚照";
    navs[1] = nav1;

    let nav2 = new Object();
    nav2.img = "../../images/nav/zhq.jpg";
    nav2.name = "找婚庆";
    navs[2] = nav2;

    let nav3 = new Object();
    nav3.img = "../../images/nav/dhj.jpg";
    nav3.name = "订婚戒";
    navs[3] = nav3;

    let nav4 = new Object();
    nav4.img = "../../images/nav/xhs.jpg";
    nav4.name = "选婚纱";
    navs[4] = nav4;

    let nav5 = new Object();
    nav5.img = "../../images/nav/thp.jpg";
    nav5.name = "淘婚品";
    navs[5] = nav5;

    let nav6 = new Object();
    nav6.img = "../../images/nav/dmy.jpg";
    nav6.name = "度蜜月";
    navs[6] = nav6;

    let nav7 = new Object();
    nav7.img = "../../images/nav/zhc.jpg";
    nav7.name = "租婚车";
    navs[7] = nav7;

    let nav8 = new Object();
    nav8.img = "../../images/nav/mxn.jpg";
    nav8.name = "美新娘";
    navs[8] = nav8;

    let nav9 = new Object();
    nav9.img = "../../images/nav/qbfl.jpg";
    nav9.name = "全部分类";
    navs[9] = nav9;
    return navs;  
  },
  navBtn:function(e){
     let id=e.currentTarget.id;
     if(id=="9"){
        wx.navigateTo({
          url: '../type/type',
        })
     }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})