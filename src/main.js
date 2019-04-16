import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Home from './views/home.vue'
import Who from './views/who.vue'
import What from './views/what.vue'
import Results from './views/results.vue'

import 'bootstrap/dist/css/bootstrap.css'


Vue.use(Router);

const routes = [
 {path: '/', component: Home},
 {path: '/who', component: Who},
 {path: '/what', component: What},
 {path: '/results', component: Results}
]

const router = new Router({routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
