
 import Router from 'vue-router' 
 import mixins from '../mixins/index'
 import * as filters from '../filters'
 import orderList from '../pages/orderList.vue'
 import OrderDetail from '../pages/OrderDetail.vue'

 
 import App from '@/index.vue'
 //设置
 
 Object.keys(filters).forEach(key => {
     Vue.filter(key, filters[key])
 })
 Vue.use(Router)
 const router = new Router({
     routes: [
        {
            path: '/',
            name:"订单列表",
            component: orderList
        },
        {
            path: '/orderDetail',
            name:"订单详情",
            component: OrderDetail
            
        }
 
     ]
 });
 // register global mixins.
 Vue.mixin(mixins)
 
 /* eslint-disable no-new */
 new Vue(Vue.util.extend({el: '#root',router}, App))
 router.push('/')
 