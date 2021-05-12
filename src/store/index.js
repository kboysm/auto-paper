import { createStore } from 'vuex'

export default createStore({
  state: {
    userState: JSON.parse(localStorage.getItem('userState')) || 
    {
      displayName: '',
      uid: '',
      updateProfile: () => {},
    },
    tickets: JSON.parse(localStorage.getItem('tickets')) || null,
    headers: JSON.parse(localStorage.getItem('headers')) || null,
    selectedPaper:''
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
    setSelectedPaper ( state, paperName ) {
      state.selectedPaper = paperName
    }
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
    setSelectedPaperAction ({ commit }, paperName ) {
      console.log('test' , paperName)
      commit('setSelectedPaper', paperName)
    }
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
    },
    getSelectedPaper ( state ) {
      return state.selectedPaper
    }
  },
  modules: {
  }
})
