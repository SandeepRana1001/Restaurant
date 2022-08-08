/* eslint-disable */

import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/homeComponents/HomePage'
import AboutPage from './components/aboutComponents/AboutPage'
import ContactPage from './components/contactComponents/contactPage'


Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage }

]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
