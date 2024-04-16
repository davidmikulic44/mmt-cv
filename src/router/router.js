import { createRouter, createWebHistory } from 'vue-router';
import ChooseStudentView from '../Views/ChooseStudentView.vue';
import ProjectsView from '../Views/ProjectsView.vue';
import AboutView from '../Views/AboutView.vue';
// Define your routes
const routes = [
  { path: '/', component: ChooseStudentView },
  { path: '/davidmikulic/projekti', component: ProjectsView },
  { path: '/davidmikulic/omeni', component: AboutView},
  { path: '/matejmilanovic', component: ProjectsView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

export default router;
