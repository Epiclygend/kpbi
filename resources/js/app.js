require('./bootstrap');

import Vue from 'vue'
import App from 'js/App.vue';

import router from 'js/router';
import store from 'js/store';
import vuetify from 'js/plugins/vuetify';
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
