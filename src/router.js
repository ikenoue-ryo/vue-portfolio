import Vue from 'vue';
import Router from 'vue-router';

import Top from './pages/Top'
import Profile from './pages/ProfilePage'


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Top,
    },
    { 
      path: '/profile', 
      component: Profile,
    },
  
  ]
});

export default router;