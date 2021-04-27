import { createStore } from 'vuex'

export default createStore({
  state: {
    userState: JSON.parse(localStorage.getItem('userState')) | 
    {
      displayName: '',
      uid: '',
      updateProfile: () => {},
    }
  },
  mutations: {
    setUserLogin ( state, userLoginState ) {
      state.userState = userLoginState
      localStorage.setItem('userState', JSON.stringify(userLoginState))
    }
  },
  actions: {
    setUserAction ({ commit }, userLoginState) {
      commit('setUserLogin', userLoginState)
    }
  },
  getters: {
    getUser ( state ) {
      return state.userState
    }
  },
  modules: {
  }
})
