import Vue from 'vue';
import Router from 'vue-router';

import Top from './pages/Top'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Post from './pages/Post'


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Top,
    },
    { 
      path: '/signup', 
      component: SignUp,
    },
    { 
      path: '/login', 
      component: Login,
    },
    { 
      path: '/post', 
      component: Post,
    },
  
  ]
});

export default router;