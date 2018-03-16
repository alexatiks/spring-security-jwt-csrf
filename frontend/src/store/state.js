export const state = {
  isAuthenticated: localStorage.getItem("auth"),
  user: null,
  error: null,
  loading: false
}
