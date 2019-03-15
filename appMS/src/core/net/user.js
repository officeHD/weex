 
import {getCache, setCache, removeCache} from '../common/storageUtils'

/**
 * 初始化用户信息
 */ 
const initUserInfo = async () => {
    
    let res = await getUserInfoLocal();
    return {
        result: res.result,
        data: res.data
    };

};

/**
 * 获取本地登录用户信息
 */
const getUserInfoLocal = async () => {
    let userText = await getCache('user_info');
    if (userText) {
        let res = JSON.parse(userText);
        return {
            result: true,
            data: res
        }
    } else {
        return {
            result: false
        }
    }
};

/**
 * 获取本地登录用户信息
 */
const cleanUserInfoLocal = async () => {
    await removeCache('user_info');
    return true
};

/**
 * 登录
 */
const doLogin = async (userName, password) => {
    
};


/**
 * 获取用户详细信息
 */
const getUserInfoDao = async (userName) => {
    
};







export default {
    doLogin,
    getUserInfoDao,
    initUserInfo,
    getUserInfoLocal
   
}
