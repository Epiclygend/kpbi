import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('js/pages/Home')
    }
  ]
});


export default router;
