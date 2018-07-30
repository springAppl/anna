// map.js
let schoolData = require('../../resources/shops.js')
Page({
  data: {
    centerX:null,
    centerY:null,
    markers: [],
    controls: [{
      id: 1,
      iconPath: '/image/location-control.png',
      position: {
        left: 0,
        top:10,
        width: 40,
        height: 40
      },
      clickable: true
    }]
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function () {
    console.log('地图定位！')
    let that = this
    wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success:(res)=>{
          console.log(res)
            let latitude = res.latitude; 
            let longitude = res.longitude; 
            let schoolMarkers = this.getSchoolMarkers();
            this.setData({
                centerX:longitude,
                centerY:latitude,
                markers:schoolMarkers
            })
        }
    });
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/shop/detail/detail?id=' + e.markerId,
    });
  },
  controltap(e) {
    console.log(e.controlId)
    this.moveToLocation()
  },
  getSchoolMarkers(){
    let markers=[];
    for(let item of schoolData){
      let marker=this.createMarker(item);
      markers.push(marker)
    }
    return markers;
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  createMarker(point){
    let latitude = point.latitude; 
    let longitude = point.longitude; 
    let marker= {
      iconPath: "/image/mapPoint.png",
      id:point.id || 0,
      // title:point.name || '',
      latitude: latitude,
      longitude: longitude,
      width: 19,
      height: 33,
      callout: {
        content: point.name,
        color: "#b5b1b1",
        fontSize: 12,
        borderRadius: 15,
        bgColor: "#262930",
        padding: 1,
        display: 'ALWAYS'
      }
    };
    return marker;
  }
})