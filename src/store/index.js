import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {GET_LOADING, MUTATE_LOADING} from './mutation-types'
import post from './modules/post'
import postsList from './modules/postsList'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    loading: true,
  },
  getters: {
    [GET_LOADING]: state => () => state.loading
  },
  mutations: {
    [MUTATE_LOADING]: (state, progress) => state.loading = progress,
  },
  modules: {
    post,
    postsList
  }
})
