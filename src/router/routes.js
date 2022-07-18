import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path: "/center", component: Center, meta: { show: true },
        redirect: '/center/myorder',
        children: [
            {
                path: 'myorder',
                component: myOrder
            },
            {
                path: 'groupOrder',
                component: groupOrder
            }
        ]
    },
    { path: "/paysuccess", component: PaySuccess, meta: { show: true } },
    {
        path: "/pay", component: Pay, meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/trade", component: Trade, meta: { show: true }, beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/shopcart", component: ShopCart, meta: { show: true }
    },
    { path: "/addcartsuccess", component: AddCartSuccess, meta: { show: true } },
    { path: "/detail/:skuId", component: Detail, meta: { show: true } },
    //路由懒加载
    { path: "/home", component: ()=>import('@/pages/Home'), meta: { show: true } },
    { path: "/register", component: Register, meta: { show: false } },
    { path: "/login", component: Login, meta: { show: false } },
    {
        name: "search",
        //这里keyword后的？代表params参数可以传递也可以不传递
        path: "/search/:keyword?", component: Search, meta: { show: true }
    },

    //重定向到首页
    { path: "*", redirect: "/home" }
]