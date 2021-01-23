import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: () => import('components/layouts/MainLayout'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('pages/Home')
        }
      ]
    }
  ]
});


export default router;
