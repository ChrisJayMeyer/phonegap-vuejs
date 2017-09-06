import Vue from 'vue';
import Router from 'vue-router';
import Loading from '@/components/Loading';
import MainMenu from '@/components/MainMenu';
import PageOne from '@/components/PageOne';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu,
      children: [
        {
          path: 'pageone',
          component: PageOne
        }
      ]
    },
    {
      path: '/tinkin',
      name: 'Loading',
      component: Loading
    }
  ]
});
