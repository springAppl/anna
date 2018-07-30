//location.js
let snacksData = require('../../../resources/snacks.js');
let shops = require('../../../resources/shops.js');
Page({
  data: {
    snacks: snacksData,
    imgUrls: [
      '/image/milk/04.jpg',
      '/image/milk/05.jpg',
      '/image/milk/06.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  onLoad: function (option) {
    var shop = null;
    for (var ele in shops) {
      if (shops[ele].id == option.id) {
        shop = shops[ele];
        break;
      }
    }
    this.setData({
      locationDetail: shop.locationDetail,
      logo: shop.logo,
      phone: shop.phone,
      longitude: shop.longitude,
      latitude: shop.latitude,
      workTime: shop.workTime 
    });
  },
  openLocation: function(){
    wx.openLocation({
      latitude: parseFloat(this.data.latitude),
      longitude: parseFloat(this.data.longitude),
    })
  }
})