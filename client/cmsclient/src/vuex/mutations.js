import axios from 'axios'

export const state = {
  statusLogin: false,
  articles: []
}

export const mutations = {
  GET_ARTICLES(state, payload) {
    state.articles = payload
  }
}

export const actions = {
  getArticles({commit}) {
    axios.get('http://localhost:3000/api/articles')
         .then(function(res) {
           if(res.data.success){
             commit('GET_ARTICLES', res.data.data)
           }
         })
  }
}

export const getters = {
  statusLogin(state) {
    return state.statusLogin
  },
  articles(state) {
    return state.articles
  }
}