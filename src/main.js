import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from '@/store'
import TypeNav from "@/components/TypeNav"


//测试

//全局组件 组件名 哪个组件
Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false
import "@/mock/mockServe"
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
