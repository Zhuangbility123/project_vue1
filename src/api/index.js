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