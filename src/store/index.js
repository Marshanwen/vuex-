import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
    state:{
        val:'hello world'
    },
    mutations:{
        //可以通过state来获取当前state的值
        setVal(state, newVal){
            state.val = newVal
        }
    }
})