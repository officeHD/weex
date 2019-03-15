import zAJAX from './fetch';
//供应商列表
let ctx = 'http://192.168.1.234:8080/mstps';
 
export const getList = (data, cb) => {
   
    zAJAX(`${ctx}/mobile/insurance/common/plan/book`, data, cb)
}
//计划书列表
export const getComList = (data, cb) => {
    zAJAX(`${ctx}/mobile/insurance/common/plan/getProductList`, data, cb)
}
