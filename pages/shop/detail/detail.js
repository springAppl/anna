//location.js
let snacksData = require('../../../resources/snacks.js');
const api = require('../../../config/config.js');
Page({
  data: {
    snacks: snacksData,
    shopID: null
  },
  onLoad: function (option) {
    let that = this;
    wx.request({
      url: api.baseURL + 'shop/all',
      success: function (res) {
        var shop = null;
        var shops = res.data;
        for (var ele in shops) {
          if (shops[ele].id == option.id) {
            shop = shops[ele];
            break;
          }
        }
        that.setData({
          locationDetail: shop.locationDetail,
          logo: shop.logo,
          phone: shop.phone,
          longitude: shop.longitude,
          latitude: shop.latitude,
          workTime: shop.workTime,
          shopID: shop.id,
        });
      }
    });
  }
})