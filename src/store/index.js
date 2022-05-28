import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './home'
Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        home, search
    }
})