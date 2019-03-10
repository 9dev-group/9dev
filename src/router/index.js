import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import NewPost from '../components/NewPost.vue';
import Posts from '../components/Posts.vue';
import Post from '../components/Post.vue';

Vue.use(VueRouter);

const PostRouterView = { template: '<router-view></router-view>' };

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/posts', component: PostRouterView,
      children : [
        { path: '', component: Posts },
        { path: 'new', component: NewPost },
        { name: 'post', path: ':id', component: Post }
      ]
    },
    { path: '*', component: { template: '<div>Page Not Found</div>'} }
  ]
});

export default router;