import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listid:0,
    list:[]
  },
  mutations: {
    add:(state,payload)=>{
      // console.log(payload);
      state.list.push(payload);
      state.listid +=1;
    },
    del:(state,payload)=>{
      console.log(payload);
      for(var i=0; i<state.list.length; i++){
        if (state.list[i].listid == payload){
          state.list.splice(i,1);
        }
      }
    }
  },

  getters:{
    activelist(state){
      return state.list.filter(item=>item.isChecked===false)
    },

    completelist(state){
      return state.list.filter(item=>item.isChecked===true)
    },

    acitvenumber(state){
      return state.list.filter(item=>item.isChecked===false).length
    }
  }
})

export default store;