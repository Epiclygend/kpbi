import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Member from "../views/Member.vue"
import Login from "../views/Login.vue"
import NotFound404 from "../views/404.vue"

Vue.use(VueRouter)

// const baseURI = window.document.baseURI + 'new/'

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Member',
            path: '/members',
            component: Member
        },
        {
            name: '404',
            path: '/404',
            component: NotFound404
        },
        // {
        //     path: '*',
        //     redirect: '404'
        // },
    ]

})