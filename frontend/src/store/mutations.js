export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setAuth (state, payload) {
    localStorage.setItem("auth", payload)
  },
  clearAuth(state) {
    localStorage.removeItem("auth")
  },
  setError (state, payload) {
    state.error = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}
