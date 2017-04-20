import axios from 'axios'

export const state = {
  statusLogin: false,
  articles: [],
  dialogTableVisible: false,
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
  },
  DELETE_ARTICLE(state,payload) {
    let index = state.articles.findIndex(val => val._id == payload)
    state.articles.splice(index,1)
  },
  ADD_ARTICLE_DIALOG(state, payload) {
    state.article = payload
  },
  EDIT_ARTICLE(state, payload) {
    let index = state.articles.findIndex(val => val._id == payload.id)
    state.articles.splice(index,1)
    state.articles.push(payload)
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
           } else {
             alert('username or password is wrong!')
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
  },
  deleteArticle({commit},id) {
    axios.delete(`http://localhost:3000/api/articles/${id}`,{headers: {'token': window.localStorage.getItem('token')}})
         .then(function(res) {
           if(res.data.success) {
             commit('DELETE_ARTICLE',id)
           } else {
             alert(res.data)
           }
         })
  },
  addArticleDialog({commit}, data) {
    commit('ADD_ARTICLE_DIALOG', data)
  },
  editArticle({commit}, article) {
    axios.put(`http://localhost:3000/api/articles/${article.id}`,{
      title: article.title,
      content: article.content
    },{headers: {'token': window.localStorage.getItem('token')}})
    .then(function(res){
      if(res.data == false){
        alert('you have no right')
      } else {
        commit('EDIT_ARTICLE',article)
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
  },
  dialogTableVisible(state) {
    return state.dialogTableVisible
  }
}