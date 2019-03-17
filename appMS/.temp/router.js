import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import ViewHome from '@/pages/home'
import ViewUser from '@/pages/user'
 
// import UserFile from '@/pages/userFile'
// import CardList from '@/pages/cardList'
// import CardAdd from '@/pages/cardAdd'
 
// import DrawCash from '@/pages/drawCash'
// import Customer from '@/pages/customer'
import Visitor from '@/pages/visitor'
import OrderList from '@/pages/orderList'
// import Claims from '@/pages/claims'
 
// import StarSalary from '@/pages/starSalary'
// import ExtendFee from '@/pages/extendFee'
// import RecomFee from '@/pages/recomFee'
import Invite from '@/pages/invite'
import Register from '@/pages/register'
import Login from '@/pages/login'
// import Salary from '@/pages/salary'
import Flash from '@/pages/flash'
import StartUp from '@/pages/startup'
 
import Verify from '@/pages/verify'
import Forget from '@/pages/forget'


// import Message from '@/pages/message'





Vue.use(Router)

export const router = new Router({
    routes: [{
        path: '/home',
        component: ViewHome,
        meta: {
            keepAlive: true,
        }
    },
    {
        path: '/user',
        component: ViewUser,
        meta: {
            keepAlive: true,
        }
    },

   
 
    // {
    //     path: '/cardlist',
    //     component: CardList
    // },
    // {
    //     path: '/cardadd',
    //     component: CardAdd
    // },
    
    // {
    //     path: '/drawcash',
    //     component: DrawCash
    // },
    // {
    //     path: '/customer',
    //     component: Customer
    // },
    {
        path: '/visitor',
        component: Visitor
    },
    {
        path: '/orderlist',
        component: OrderList
    },
    // {
    //     path: '/claims',
    //     component: Claims
    // },
   
    // {
    //     path: '/starsalary',
    //     component: StarSalary
    // },
    // {
    //     path: '/extendfee',
    //     component: ExtendFee
    // },
    // {
    //     path: '/recomfee',
    //     component: RecomFee
    // },
    {
        path: '/invite',
        component: Invite
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/forget',
        component: Forget
    },
    {
        path: '/startUp',
        component: StartUp
    },
    {
        path: '/flash',
        component: Flash
    },
    
    {
        path: '/verify',
        component: Verify
    },


    {
        path: '/',
        redirect: '/startUp'
    }
    ]
})
