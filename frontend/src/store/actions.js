import router from '@/router'
import axios from 'axios'
import { EventBus } from '../event-bus.js'

export const actions = {
  userSignIn ({commit}, payload) {
    let data = {
      username: payload.username,
      password: payload.password
    }
    commit('setLoading', true)
    axios.post('http://localhost:8091/login', data)
     .then(res => {
       commit ('setAuth', true)
       commit ('setLoading', false)
       commit ('setError', null)
       EventBus.$emit('authenticated', 'User authenticated')
       router.push('/')
     })
    .catch(error => {
      commit('setError', error.message)
      commit('setLoading', false)
    })
  },
  userSignOut ({commit}) {
    commit ('clearAuth')
    EventBus.$emit('authenticated', 'User not authenticated')
    router.push('/signIn')
  }
}
