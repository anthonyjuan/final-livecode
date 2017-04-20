import axios from 'axios'

export const state = {
  statusLogin: false,
  articles: [],
  article: {
    title:'',
    content:''
  }

}

export const mutations = {
  GET_ARTICLES(state, payload) {
    state.articles = payload
  },
  SIGN_IN(state, payload) {
    window.localStorage.setItem('token', payload.token)
    window.localStorage.setItem('id', payload.id)
    window.location.reload()
  },
  IF_LOGIN(state) {
    if(window.localStorage.token) {
      state.statusLogin = true
      window.location.href= "/#/"
    } else {
      state.statusLogin = false
    }
  }

}

export const actions = {
  ifLogin({commit}) {
    commit('IF_LOGIN')
  },
  getArticles({commit}) {
    axios.get('http://localhost:3000/api/articles')
         .then(function(res) {
           if(res.data.success){
             commit('GET_ARTICLES', res.data.data)
           }
         })
  },
  signIn({commit}, dataUser) {
    axios.post('http://localhost:3000/login', dataUser)
         .then(function(res) {
           if(res.data.success){
             commit('SIGN_IN', res.data)
           }
         })
  },
  signUp({commit},dataUserLog) {
    let self = this
    axios.post('http://localhost:3000/api/users', dataUserLog)
         .then(function(res) {
           if(res.data.success) {
             alert(res.data.msg)
           }
         })
  },
  postArticle({commit}) {
    axios.post('http://localhost:3000/api/articles', {
      title: state.article.title,
      content: state.article.content,
      author: window.localStorage.id
    },
    {headers: {'token': window.localStorage.getItem('token')}}
    )
    .then(function(res) {
       if(res.data.success) {
         window.location.href="/#/"
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
  },
  article(state) {
    return state.article
  }
}