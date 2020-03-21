
import Vue from 'vue'
import Vuex from 'vuex'
import flash from './flash'
import auth from './auth';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    flash
  }
});
