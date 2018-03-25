var Mock = require('mockjs');
module.exports = {
  hotLists: Mock.mock({
    "error": 0,
    "message": "success",
    "lists|6": [{
      "id|100-500": 1,
      "price": "@float(1,100,2,2)",
      "img": "@image('198x198','#FF7C78','Hello')",
      "title": "@ctitle(8)",
      "url": "@url"
    }]
  })
};
