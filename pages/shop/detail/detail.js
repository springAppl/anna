//location.js
let snacksData = require('../../../resources/snacks.js')
Page({
  data: {
    snacks: snacksData,
    imgUrls: [
      'http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg',
      'http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg',
      'http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  onLoad: function (option) {
    this.setData({
      locationDetail: option.locationDetail,
      logo: option.logo,
      phone: option.phone,
      longitude: option.longitude,
      latitude: option.latitude,
      workTime: option.workTime
    });
  },
  openLocation: function(){
    wx.openLocation({
      latitude: parseFloat(this.data.latitude),
      longitude: parseFloat(this.data.longitude),
    })
  }
})