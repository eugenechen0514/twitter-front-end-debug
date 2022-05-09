import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/tweets/:id',
    name: 'tweet',
    component: () => import('../views/Tweet.vue')
  },
  {
    path: '/user/self/tweets',
    name: 'user-self-tweets',
    component: () => import('../views/UserSelfTweets.vue')
  },
  {
    path: '/user/self/tweetsandcomments',
    name: 'user-self-tweets-and-comments',
    component: () => import('../views/UserSelfTweetsAndComments.vue')
  },
  {
    path: '/user/self/likes',
    name: 'user-self-likes',
    component: () => import('../views/UserSelfLikes.vue')
  },

  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
