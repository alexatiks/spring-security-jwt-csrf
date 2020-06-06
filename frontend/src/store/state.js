const state = {
  isAuthenticated: localStorage.getItem('auth'),
  user: null,
  error: null,
  loading: false,
};

export default state;
