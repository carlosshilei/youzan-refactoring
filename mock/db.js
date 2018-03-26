var Mock = require('mockjs');
module.exports = {
  hotLists: Mock.mock({
    "status": 0,
    "message": "success",
    "lists|6": [{
      "id|100-500": 1,
      "price": "@float(1,100,2,2)",
      "img": "https://placehold.it/198x198/FA706F/000.png&text=HELLO",
      "title": "@ctitle(8)",
      "url": "@url"
    }]
  }),
  banner: Mock.mock({
    "status": 0,
    "message": "success",
    "lists": [{
      "clickUrl": "@url",
      "image": "https://placehold.it/414x199/b279f2"
    },
    {
      "clickUrl": "@url",
      "image": "https://placehold.it/414x199/79f28f"
    },
    {
      "clickUrl": "@url",
      "image": "https://placehold.it/414x199/f27986"
    },
    {
      "clickUrl": "@url",
      "image": "https://placehold.it/414x199/79a9f2"
    },
    {
      "clickUrl": "@url",
      "image": "https://placehold.it/414x199/cdf279"
    }]
  }),
  topLists: Mock.mock({
    "status": 0,
    "message": "success",
    "lists|5": [{
      "id": "@order(-1,1,800,810,817)",
      "name": "@order('综合排行','食品酒水','女人穿着','男士穿着','箱包配饰')"
    }]
  }),
  subLists: Mock.mock({
    "status": 0,
    "message": "success",
    "data": {
      "brandLists|4-6": [{
        "id": "@order(85,83,82,81,80,79)",
        "image": "https://placehold.it/60x60/b279f2/fff.png",
        "name": "@order('良品铺子','周黑鸭','来伊份','五谷磨房','龙润','齐峰业')"
      }],
      "categoryLists|5": [{
        "id": "@order(10,835,)",
        "image": "https://placehold.it/60x60/f27986/fff.png",
        "name": "@order('水果','生鲜','饼干蛋糕','坚果炒货','休闲零食')"
      }]
    }
  }),
  rank: Mock.mock({
    "status": 0,
    "message": "success",
    "data": {
      "hotGoods|3": [{
        "id|1-100": 1,
        "image": "https://placehold.it/90x90/cdf279/fff.png",
        "name": "@cparagraph",
        "price": "@order(89.1,29.3,46.4)",
        "recommend": "@order(8844,5765,3770)"
      }],
      "hotKeywords": ["化妆水","连衣裙","凉鞋女","面膜","防晒","蓝牙音箱","白鞋","裤子","衬衫"],
      "hotShops|3": [{
        "clickUrl": "@url",
        "follows": "@order(987750,584180,574948)",
        "image": ["https://placehold.it/200x200/79f28f","https://placehold.it/200x200/79a9f2","https://placehold.it/200x200/cdf279"],
        "name": "@order('幸福西饼','HomeFacial Pro','物业365')"
      }]
    }
  })
};
