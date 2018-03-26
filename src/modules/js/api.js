let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topLists: '/category/topLists',
  subList: '/category/subList',
  rank: '/category/rank'
}

let host = 'http://localhost:3000'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
