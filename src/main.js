import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/_main.scss'
import App from './App.vue'
import ChooseStudentView from './Views/ChooseStudentView.vue'
import router from './router/router.js'


const app = createApp(App);

app.use(router);
app.mount('#app');
