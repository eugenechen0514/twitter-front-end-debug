import Vue from 'vue'
import Vuex from 'vuex'
import jwt_decode from "jwt-decode";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      email: "",
      name: "",
      role: "",
      account: "",
      cover: "",
      avatar: "",
      introduction: "",
      createdAt: "",
      updatedAt: ""
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser() {
      try {
        const token = localStorage.getItem('token')
        const payload = jwt_decode(token)
        console.log(payload)

        this.commit('setCurrentUser', payload)
        
      }
      catch(error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
