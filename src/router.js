import Vue from 'vue';
import Router from 'vue-router';

import Top from './pages/Top'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Post from './pages/Post'
// import PostLists from './pages/PostLists'
import CarSelect from './pages/CarSelect'
import PostDetails from './pages/PostDetails'
import notFound404 from './pages/notFound404'


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
    { 
      path: '/select', 
      component: CarSelect,
    },
    // { 
    //   path: '/post-lists', 
    //   component: PostLists,
    // },
    { 
      path: '/post/:id', 
      component: PostDetails,
    },
    { 
      path: '/:en_name', 
      component: CarSelect,
    },
    { 
      path: '*', 
      component: notFound404,
    },
  ]
});

export default router;