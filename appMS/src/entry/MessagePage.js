
import Router from 'vue-router' 
import mixins from '../mixins/index'
import * as filters from '../filters'
import message from '../pages/message.vue'

//sync(store, router)

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
new Vue(Vue.util.extend({el: '#root',router}, message))
router.push('/')
