import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Post from './views/Post'
import PageNotFound from './views/PageNotFound'
import AddPost from './views/AddPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-post',
      name: 'add_post',
      component: AddPost
    },
    {
      path: '/post/:post_id',
      name: 'post',
      component: Post
    },
    {
      path: '*',
      name: 'page_not_found',
      component: PageNotFound
    }
  ]
})
