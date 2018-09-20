const api = require('../../config/config.js');
Page({
  data: {
    components: null
  },
  onLoad: function () {
    let that = this;
    wx.request({
      url: api.baseURL + 'index',
      success: function(res){
        that.setData({
          components: res.data
        });
      }
    });
  }
});