import { createStore } from 'vuex'

export default createStore({
  state: {
    userState: JSON.parse(localStorage.getItem('userState')) | 
    {
      displayName: '',
      uid: '',
      updateProfile: () => {},
    },
    tickets: JSON.parse(localStorage.getItem('tickets')) | null,
    headers: JSON.parse(localStorage.getItem('headers')) | null,
  },
  mutations: {
    setUserLogin ( state, userLoginState ) {
      state.userState = userLoginState
      localStorage.setItem('userState', JSON.stringify(userLoginState))
    },
    setTickets ( state, tickets ) {
      state.tickets = tickets
      localStorage.setItem('tickets', JSON.stringify(tickets))
    },
    setHeaders ( state, headers ) {
      state.headers = headers
      localStorage.setItem('headers', JSON.stringify(headers))
    },
  },
  actions: {
    setUserAction ({ commit }, userLoginState) {
      commit('setUserLogin', userLoginState)
    },
    setTicketsAction ({ commit }, tickets ) {
      commit('setTickets', tickets)
    },
    setHeadersAction ({ commit }, headers ) {
      commit('setHeaders', headers)
    },
  },
  getters: {
    getUser ( state ) {
      return state.userState
    },
    getTickets ( state ) {
      return state.Tickets
    },
    getHeaders ( state ) {
      return state.headers
    }
  },
  modules: {
  }
})
