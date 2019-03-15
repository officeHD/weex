
import Router from 'vue-router'
import mixins from '@/mixins'
import App from '@/index.vue'
import * as filters from '@/filters'
import Count from '@/pages/userCount'
import Salary from '@/pages/userCount/salary'
import DrawCash from '@/pages/userCount/drawCash'
import RecomFee from '@/pages/userCount/recomFee'

import ExtendFee from '@/pages/userCount/extendFee'
import StarSalary from '@/pages/userCount/starSalary'

//账户
// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/drawcash',
            name:"提现",
            component: DrawCash
        },
        {
            path: '/extendfee',
            name:"推广费",
            component: ExtendFee
        },
        {
            path: '/recomfee',
            name:"推荐奖",
            component: RecomFee
        },
        {
            path: '/starsalary',
            name:"星级工资",
            component: StarSalary
        },
        {
            path: '/salary',
            name:"工资",
            component: Salary
        },
        {
            path: '/',
            name:"工资",
            component: Count
        }
        

    ]
});
// register global mixins.
Vue.mixin(mixins)
 
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')
 