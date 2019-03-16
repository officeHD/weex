const stream = weex.requireModule('stream') || {};
//全局方法
export default {
    methods: {
        reset(to) {
            if (WXEnvironment.platform === 'Web') {
                if (this.$router) {
                    this.$router.replace(to)
                }
            } else {
                if (this.$router) {
                    this.$router.replace(to)
                }
            }
        },
        getNavigator() {
            return weex.requireModule('navigator')
        },
        toBack() {
            if (WXEnvironment.platform === 'Web') {
                this.$router.back()
            } else {
                this.getNavigator().pop({
                    animated: "true"
                })
            }
        },
        jumpInter(to) {
            console.log(this.$router)
            if (this.$router) {
                this.$router.push(to)
            }
        },
        getImagePath(name, type = '', abs = '../../') {
            return `http://192.168.1.221/img/${name}${type}`
            // if (WXEnvironment.platform === 'Web') {
            //     return `${abs}static/img/${name}${type}`
            // } else if (WXEnvironment.platform === 'android') {
            //     return `local:///${name}`;
            // } else {
            //     return `local:///${name}${type}`;
            // }
        },
        //带参数跳转
        jumpWithParams(to, params) {
            console.log(to,WXEnvironment.platform)
            if (WXEnvironment.platform === 'Web') {
                if (this.$router) {
                    this.$router.push(to)
                }
            } else {
                let path = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + to + '.js' // 将a.js的绝对地址转为b.js的绝对地址;
                console.log(path);
                let q = this.createQuery(params)
                this.getNavigator().push({
                    url: path + q,
                    animated: "true"
                }, event => {
                    //modal.toast({ message: 'callback: ' + event })
                })
            }
        },
        // object 转 URL 参数
        createQuery(obj) {
            if (obj === null || obj === "" || obj.length === 0) {
                return ""
            }
            let url = '?';
            for (let key in obj) {
                if (obj[key] !== null) {
                    url += (key + '=' + encodeURIComponent(obj[key]) + '&');
                }
            }
            return url.substring(0, url.lastIndexOf('&'));
        },

        //获取地址参数
        getQuery() {
            if (WXEnvironment.platform === 'Web') {
                return this.$route.params;
            } else {
                return this.getQueryData(weex.config.bundleUrl);
            }
        },
        // 'xxx.js?name=aa' 转 {name: 'aa'}
        getQueryData(url) {
            url = url.substring(url.indexOf('.js?') + 3);
            let result = {};
            if (url.indexOf("?") != -1) {
                let str = url.substr(1);
                let strs = str.split("&");
                for (let i = 0; i < strs.length; i++) {
                    result[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
                }
            }
            return result;
        },
        getBaseUrl() {
            let bundleUrl = weex.config.bundleUrl;
            console.log(bundleUrl);
            bundleUrl = String(bundleUrl);
            let nativeBase;
            let isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

            let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
                nativeBase = 'file://assets/dist/';
            } else if (isiOSAssets) {
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            } else {
                let host = 'localhost:3001/';
                let matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
                if (matches && matches.length >= 2) {
                    host = matches[1];
                }
                nativeBase = 'http://' + host + '/dist/';
            }
            return nativeBase;
        },
        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel ===
                'iPhone10,6');
        },
        getData(api, data, callback) {
            console.log(stream)
            return stream.fetch({
                method: 'POST',
                url: api,
                type: 'json',
                body: {
                    data
                }
            }, callback);
        }

    }
}
