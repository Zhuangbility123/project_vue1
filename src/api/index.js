//API统一管理
import requests from "./request"
import mockRequest from "./mockRequest"
//三级联动接口
///api/product/getBaseCategoryList get
export const reqGetCategoryList = () =>
    requests({
        url: "/product/getBaseCategoryList",
        method: "get"
    })

export const reqGetBannerList = () => mockRequest.get('/banner')

export const reqGetFloorList = () => mockRequest.get('/floor')

//获取搜索模块数据 地址/api/list   请求方式post  参数:需要参数，至少带个空对象{}
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})
//获取产品详情信息  /api/item/{skuId}    get
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

//产品添加购物车
export const reqAddShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

//删除购物产品
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//修改产品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

//获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

//注册
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

//登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

//获取用户信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

//退出登录
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

//获取地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

//获取商品列表
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

//提交信息
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取订单支付信息
export const reqPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//获取订单支付状态（是否支付）
export const reqPayStatus = (orderId ) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取订单列表
export const reqMyOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})