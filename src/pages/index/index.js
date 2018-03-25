import 'css/common.css'
import './index.css'
import url from 'js/api.js'
import Vue from 'vue';
import axios from 'axios'

let app = new Vue({
  el: "#app",
  data: {
    lists: null
  },
  created() {
    axios.get(url.hotLists,{
      pageNum: 1,
      pageSize: 6
    }).then(res => {
      this.lists = res.data.lists
    })
  }
})
