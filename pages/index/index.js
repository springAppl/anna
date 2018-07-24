//index.js
//获取应用实例
var app = getApp()
let snacksData = require('../../resources/snacks.js')
Page({
  data: {
    snacks: snacksData
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../location/location'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    that.setData({
        
    })
  },
  tapName(event){
    console.log('view click');
  }
})
