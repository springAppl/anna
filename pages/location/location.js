//location.js
//获取应用实例
var app = getApp()
Page({
    data: {
    // 画个圆把最近的点画出来
    markers: [{
      longitude: 111.69060999999999,
      latitude: 40.81251608547881,
      iconPath: '../../images/wechart.png',
      rotate: 10
    }, {
        longitude: 111.69671,
        latitude: 40.80521095954978,
      iconPath: '../../images/wechart.png',
      rotate: 90
    }]
  },
  onLoad: function () {
    console.log('地图定位！')
    var that = this
    wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function (res) {
          console.log(res)
            var latitude = res.latitude; 
            var longitude = res.longitude; 
            wx.openLocation({
              latitude:latitude,
              longitude:longitude,
              scale:1
            })
        }
    });
  },
})
