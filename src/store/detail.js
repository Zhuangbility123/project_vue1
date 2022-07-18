import { reqGoodsInfo, reqAddShopCart } from "@/api"
import { getUUID } from "@/utils/uuid_token"
const state = {
    goodsInfo: {},
    uuid_token: getUUID()
}
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}
const actions = {
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data)
        }
    },
    async addShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddShopCart(skuId, skuNum)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}