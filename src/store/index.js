import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    val:'hello world',
    name:'ding',
    age:18,
    doc:'doc',
    my:'mars'
  },
  mutations:{
    setVal(state, newVal){
     state.val = newVal
    }
  }
})