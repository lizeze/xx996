import Vue from 'vue'
import Vuex from 'vuex'
import articleType from './articleType'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    articleType
  }
})
