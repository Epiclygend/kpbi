require('./bootstrap');

import Vue from 'vue'
import App from 'js/App.vue';

import router from 'js/router';
import store from 'js/store';
import vuetify from 'js/plugins/vuetify';
import VueCompositionAPI from '@vue/composition-api'
import axiosInstance from './axios';

Vue.use(VueCompositionAPI);
Vue.prototype.$axios = axiosInstance;

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === 'development') {
  globalThis._vApp = app;
}
