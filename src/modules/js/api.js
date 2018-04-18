let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topLists',
  subList: '/category/subList',
  rank: '/category/rank',
  searchLists: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  cartAdd: '/cart/add',
  cartRemove: '/cart/remove',
  cartMremove: '/cart/mremove',
  cartReduce: '/cart/reduce',
  cartLists: '/cart/list',
  cartUpdate: '/cart/update',
  addressLists: '/address/list',
  addressAdd: '/address/add',
  addressRemove: '/address/remove',
  addressUpdate: '/address/update',
  addressSetDefault: '/address/setDefault'
}

let host = 'http://localhost:3000'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
