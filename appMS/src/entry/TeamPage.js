
import Router from 'vue-router' 
import mixins from '../mixins/index'
import * as filters from '../filters'
import team from '../pages/team.vue'

 //团队

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})


const router = new Router({
    routes: [
        // {
        //     path:  '/setting',
        //     name: 'SettingPage',
        //     component: SettingPage
        // },

    ]
});

// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root',router}, team))
router.push('/')
