import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
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
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
router.beforeEach(async (to, from, next) => {
    // next()
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        next()
    }
})

export default router