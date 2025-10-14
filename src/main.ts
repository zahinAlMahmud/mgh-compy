import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/main.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const app = createApp(App)

app.use(router)

app.mount('#app')

// Initialize AOS after app is mounted
AOS.init({
  duration: 1200,
  once: true,
})
