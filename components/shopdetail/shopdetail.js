const api = require('../../config/config.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopID: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    typeId: 'shopdetail',
    shop: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openLocation: function () {
      wx.openLocation({
        latitude: parseFloat(this.properties.shop.latitude),
        longitude: parseFloat(this.properties.shop.longitude),
      })
    }
  },
  ready() {
    var that = this;
    wx.request({
      url: api.baseURL + 'shop/' + this.properties.shopID,
      success: function (res) {
        that.setData({
          shop: res.data
        });
      }
    })
  }
})
