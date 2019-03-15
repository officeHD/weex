
import Router from 'vue-router'
import mixins from '../mixins/index'
import * as filters from '../filters'
import userFile from '../pages/userFile.vue'

//我的资料

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
new Vue(Vue.util.extend({ el: '#root', router }, userFile))
router.push('/')
