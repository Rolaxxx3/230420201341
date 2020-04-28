import Vue from 'vue'
import Router from 'vue-router'
import Account from "@/vue/pages/Account";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Account,
        }
    ]
})

export default router
