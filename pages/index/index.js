let choiceGoods = require('../../resources/choiceGoods.js')
Page({
  data: {
    choiceGoods: null
  },
  onLoad: function () {
    for(var item in choiceGoods) {
      choiceGoods[item].price = Math.floor(choiceGoods[item].price)/100;
    }
    this.setData({
      choiceGoods: choiceGoods
    });
  }
});