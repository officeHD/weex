

//获取缓存
export function getCache(key) {
    let storage = weex.requireModule('storage');
    return new Promise(function (resolve) {
        try {
            storage.getItem(key, e => {
                if (e.result === 'success') {
                    resolve(e.data);
                } else {
                    resolve(null);
                }
            });
        } catch (e) {
            console.log(e);
            resolve(null);
        }
    });
}
// 清除缓存
export function removeCache(key) {
    let storage = weex.requireModule('storage');
    storage.removeItem(key)
}
//设置缓存
export function setCache(key,value) {
    let storage = weex.requireModule('storage');
    return new Promise(function (resolve) {
        try {
            storage.setItem(key, value);
            resolve(true)
        } catch (e) {
            console.log(e);
            resolve(false);
        }
    });
}