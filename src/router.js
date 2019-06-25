import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Post from './views/Post'
import PageNotFound from './views/PageNotFound'
import AddPost from './views/AddPost'
import Lesson1 from './views/Lesson1'
import Lessons from './views/Lessons'

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
      path: '/lesson1',
      name: 'lesson1',
      component: Lesson1
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: Lessons
    },
    {
      path: '*',
      name: 'page_not_found',
      component: PageNotFound
    }
  ]
})
