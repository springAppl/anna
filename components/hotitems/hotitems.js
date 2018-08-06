// components/hotitems/hotitems.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    typeId: 'hotitems',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  attached() {
    for (var item in this.data.content.items) {
      this.data.content.items[item].price = Math.floor(this.data.content.items[item].price) / 100;
    }
    this.setData({
      content: {
        items: this.data.content.items
      }
    });
  }
})
