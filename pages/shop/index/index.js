//location.js
const api = require('../../../config/config.js');
var app = getApp()
Page({
  data: {
    shops: null
  },
  onLoad: function () {
    let that = this;
    wx.request({
      url: api.baseURL + 'shop/all',
      success: function (res) {
        that.setData({
          shops: res.data
        });
      }
    });
  },
})
