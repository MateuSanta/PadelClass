import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import TeamView from '../views/TeamView.vue'
import LoginView from'../views/LoginView.vue'
import SignUpView from'../views/SignUpView.vue'
import ShowView from'../views/ShowView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'index',
      component: LoginView
    },  

    {
      path: '/home',
      name: "home",
      component: HomeView
    },
    {
      path: '/course',
      name: 'course',
      component: CourseView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },/* ,
    {
      path: '/course/:id',
      name: 'show',
      component: ShowView
    }, */
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },{
      path: '/course/card/:id',
      name:'show',
      component: ShowView
    },{
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]})

export default router
