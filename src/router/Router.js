import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './Routes' //made a mistake earlier by importing router instead of routes and got the 'router already declared error'

Vue.use(VueRouter);

 export const router =  new VueRouter({
    routes: routes,
    mode: 'history'
})