/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export const store = new Vuex.Store({
  state:{
    token:'',
    baseUrl:'http://localhost:5003'
  }
});

