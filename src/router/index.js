import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
Vue.use(VueRouter);
//重写push方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// console.log(originPush);
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
export default new VueRouter({
    routes: [
        { path: "/home", component: Home, meta: { show: true } },
        { path: "/register", component: Register, meta: { show: false } },
        { path: "/login", component: Login, meta: { show: false } },
        {
            path: "/search/:keyword?", component: Search, meta: { show: true }, name: "search"
            , props: ($route) => ({
                keyword: $route.params.keyword, k: $route.query.k
            })
        },
        //重定向到首页
        { path: "*", redirect: "/home" }
    ]
})