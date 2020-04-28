import Vue from 'vue'
import App from './vue/App.vue'
import vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import { buildStore } from './vuex'
import router from './vue-router'
import { formatDate } from '@/vue/filters/formatDate'

Vue.config.productionTip = false
Vue.use(vuelidate)
Vue.use(VueRouter)
Vue.filter('formatDate', formatDate)

const store = buildStore()

new Vue({
    router,
    store,
    vuelidate,
    render: h => h(App),
}).$mount('#app')
