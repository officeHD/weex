import App from '@/index.vue'
import Router from 'vue-router'

import mixins from '@/mixins'

import * as filters from '@/filters'
import UserFile from '@/pages/userFile.vue'
import Ident from '@/pages/userFile/ident.vue'
import IdentAgent from '@/pages/userFile/identAgent.vue'
import IdentMember from '@/pages/userFile/identMember.vue'
import CardAdd from '@/pages/userFile/cardAdd.vue'
import CardList from '@/pages/userFile/cardList.vue'

//我的资料

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: "我的资料",
            component: UserFile
        },
        {
            path: '/ident',
            name: '资质认证',
            component: Ident
        }, {
            path: '/identAgent',
            name: '代理人认证',
            component: IdentAgent
        }, {
            path: '/identMember',
            name: '会员认证',
            component: IdentMember
        },
        {
            path: '/cardList',
            name: '银行卡',
            component: CardList
        },
        {
            path: '/cardAdd',
            name: '银行卡添加',
            component: CardAdd
        }
    ]
});
// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/')
