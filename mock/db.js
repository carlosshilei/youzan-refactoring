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
  }),
  searchLists: Mock.mock({
    "status": 0,
    "message": "success",
    "lists|6": [{
      "id": 27351,
      "name": "@name",
      "image": "@image('320x320','@color')",
      "isOut": "@order(true,false,false,false,false,false)",
      "price": "@int(10,120)",
      "isPostage": "@boolean"
    }]
  }),
  goodsDetail: Mock.mock({
    "status": 0,
    "message": "success",
    "data": {
      "description": "<div class=\"js-components-container components-container\"> <div class=\"custom-richtext js-lazy-container js-view-image-list\"> <p><img data-origin-width=\"720\" data-origin-height=\"713\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FhU7lMPonHtR8qP4zP4aIKRVkObr.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FhU7lMPonHtR8qP4zP4aIKRVkObr.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"494\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvYqk840X0ubXwFE6Nh0unihqIKm.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvYqk840X0ubXwFE6Nh0unihqIKm.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"916\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvIfNYewmohf3b3V2yA_hr6whV-A.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvIfNYewmohf3b3V2yA_hr6whV-A.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"656\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FlYJPxbAgmkKjWtvLxwqjUMJHUG3.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FlYJPxbAgmkKjWtvLxwqjUMJHUG3.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"513\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FmpaiyW8GbpV2I2QKwm7stoRQkOJ.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FmpaiyW8GbpV2I2QKwm7stoRQkOJ.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"691\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Fs5rqsKzMe7qIHhuQAqyM1lcjmfB.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Fs5rqsKzMe7qIHhuQAqyM1lcjmfB.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"531\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Foor6_Ipc-Lo9eOX_H_a8g4kWPRW.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Foor6_Ipc-Lo9eOX_H_a8g4kWPRW.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"932\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FuuNBFbA_vMYmI6FFbNOemmDX9bd.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FuuNBFbA_vMYmI6FFbNOemmDX9bd.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"707\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FotgIfOUlMtvhtH0dhRLlmpKJLv7.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FotgIfOUlMtvhtH0dhRLlmpKJLv7.jpg!730x0.jpg\"></p> </div> <div class=\"price-intro\"> <h4 > 划线价格说明 < i class=\"icon-arrow\"></i></h4> <p > 划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考。</p> <p > 未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。 </p> <p>* 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准。</p> </div> </div>",
      "imgs|3": ["@image('375x375','@color')"],
      "storeName": " 寻找田野 ",
      "postage": " 免运费 ",
      "sales": 50,
      "identification": [
      " 企业认证 ",
      " 担保交易 "
      ],
      "skuList": [
        {
        "lists": [
        "1 个 ",
        "2 个 "
        ],
        "title": " 净含量 "
        },
        {
        "lists": [
        "1 个 ",
        "2 个 "
        ],
        "title": " 个数 "
        }
        ],
        "title": " 寻找田野 | 最正宗的上海南汇 8424 得奖最多奥运会指定西瓜 1 只 / 箱 9-11 斤 ",
        "price": 98,
        "remain": 450,
        "originalPrice": 108
    }
  }),
  dealLists: Mock.mock({
    "status": 0,
    "message": "success",
    "lists|10": [{
      "buyer": "测试",
      "time": "@datetime",
      "num": "@int(1,10)"
    }]
  }),
  addCart: Mock.mock({
    "status": 0,
    "message": "success"
  }),
  cartRemove: Mock.mock({
    "status": 0,
    "message": "success"
  }),
  cartMremove: Mock.mock({
    "status": 0,
    "message": "删除成功"
  }),
  cartReduce: Mock.mock({
    "status": 0,
    "message": "success"
  }),
  cartUpdate: Mock.mock({
    "status": 0,
    "message": "success"
  }),
  cartLists: Mock.mock({
    "status": 0,
    "message": "success",
    "cartList|3": [{
      "shopId": "@int(10000,100000)",
      "goodsList|1-2":[{
        "id": "@int(10000,100000)",
        "image": "@image('90x90',@color)",
        "number": "@int(1,10)",
        "price": "@int(10,150)",
        "sku": "@order('全网通，玫瑰金，3+32G','全网通，香槟金，3+32G')",
        "title": "VIVO-Y66 全网通/移动版 3+32G"
      }],
      "shopTitle": "@order('寻找田野','猫咪森林','老爹果园')"
    }]
  }),
  addressLists: Mock.mock({
    "status": 0,
    "message": "success",
    "lists|3": [{
      "id": "@int(10000,100000)",
      "provinceValue": "440000",
      "tel": /^1[385][1-9]\d{8}/,
      "address": " 软件园 ",
      "provinceName": " 广东省 ",
      "name": "eason",
      "isDefault": false,
      "districtValue": "440106",
      "cityName": " 广州市 ",
      "cityValue": "440100",
      "districtName": " 天河区 "
    }]
  }),
  addressAdd: Mock.mock({
    "message": " 测试内容 fj27",
    "data": {
      "name": "Carlos",
      "cityValue": "440100",
      "provinceValue": "440000",
      "isDefault": false,
      "provinceName": " 广东省 ",
      "districtName": " 天河区 ",
      "address": " 软件园 ",
      "districtValue": "440106",
      "id": 90410,
      "cityName": " 广州市 ",
      "tel": /^1[385][1-9]\d{8}/
    },
    "status": 200
  }),
  addressRemove: Mock.mock({
    "status": 200,
    "message": "success"
  }),
  addressUpdate: Mock.mock({
    "status": 200,
    "message": " 测试内容",
    "data": {
      "provinceName": " 广东省 ",
      "isDefault": false,
      "address": " 软件园 ",
      "cityValue": "440100",
      "tel": /^1[385][1-9]\d{8}/,
      "districtValue": "440106",
      "cityName": " 广州市 ",
      "districtName": " 天河区 ",
      "id": 90410,
      "name": "Carlos",
      "provinceValue": "440000"
    }
  }),
  addressDefault: Mock.mock({
    "status": 200,
    "message": "success"
  })
};
