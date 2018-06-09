import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    }
  },
  actions: {
    getUsers ({ commit }) {
      axios.get('/data/users.json').then(response => {
        commit('setUsers', response.data)
      })
    }
  }
})
