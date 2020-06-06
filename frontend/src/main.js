import Vue from 'vue';
import * as axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

axios.defaults.withCredentials = true;

// Setting up Axios on Vue Instance, for use via this.$axios
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

axios.interceptors.response.use((response) => Promise.resolve(response),
  (error) => {
    if (error.response.status === 401) {
      console.log('Unauthorized, logging out ...');
      store.dispatch('userSignOut');
      router.replace('signIn');
      return Promise.reject(error);
    }
    return Promise.reject(error.response);
  });

new Vue({
  router,
  store,
  vuetify,
  render(h) { return h(App); },
}).$mount('#app');
