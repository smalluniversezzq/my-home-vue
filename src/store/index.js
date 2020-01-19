import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import works from './modules/works.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    works,
  },
  mutations: {},
  actions: {},
  getters,
  modules:{

  }
});
