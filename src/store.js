import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = {
    state: {
        sidebar: {
            AucGenre: null,
            AucSubTypeID: null,
        },
        my_item_plans: null,
        client : location.href.includes('origin') ? 'origin' : 'std',
    },
    mutations: {},
    getters: {},
    actions: {},
    modules: {}
};

export default new Vuex.Store(store);
