import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import TeamView from '../views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
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
    }/* ,
    {
      path: '/course/:id',
      name: 'show',
      component: ShowView
    } */
  ]
})

export default router
