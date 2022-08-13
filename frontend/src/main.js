/* eslint-disable */

import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/homeComponents/HomePage'
import AboutPage from './components/aboutComponents/AboutPage'
import ContactPage from './components/contactComponents/contactPage'
import signUpPage from './components/signUpComponents/signUpPage'
import signInPage from './components/signInComponents/signInPage'
import store from './store'

// require('dotenv').config()

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/signUp', component: signUpPage },
  { path: '/signIn', component: signInPage }



]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
