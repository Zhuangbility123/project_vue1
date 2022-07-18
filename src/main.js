import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from '@/store'
import TypeNav from "@/components/TypeNav"
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import {Button,MessageBox} from 'element-ui'
//全局组件 组件名 哪个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name,Button)
Vue.config.productionTip = false
import "@/mock/mockServe"
//
// import { reqGetSearchInfo } from '@/api/index'
// console.log(reqGetSearchInfo({}));
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
    
  },
  router,
  store
}).$mount('#app')
