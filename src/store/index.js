import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { LOADING } from './mutation-types'
import post from './modules/post'
import postsList from './modules/postsList'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    loading: true,
  },
  getters: {
    getIsLoading: state => () => state.loading
  },
  mutations: {
    [LOADING]: (state, progress) => state.loading = progress,
  },
  modules: {
    post,
    postsList
  }
})
