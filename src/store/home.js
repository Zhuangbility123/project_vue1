import { reqGetCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"


const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqGetCategoryList()

        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList(context) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            context.commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
const getters = {

}

export default {
    state, mutations, actions, getters
}