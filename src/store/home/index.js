import { reqCategoryList } from "@/api"


const state = {
    categoryList: []
}
const mutations = {
    CATEGROYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        console.log(result);
        if (result.code == 200) {
            commit("CATEGROYLIST", result.data)
        }
    }
}
const getters = {

}

export default {
    state, mutations, actions, getters
}