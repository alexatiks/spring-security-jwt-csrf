// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as axios from "axios"

// Setting up Axios on Vue Instance, for use via this.$axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuetify, {
  theme: {
    primary: 'teal',
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
