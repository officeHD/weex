<template>
    <div :class="['wrapper', isIpx && isIpx() ? 'w-ipx' : '']">
        <text class="search iconfont" @click="jumpWeb()">&#xe604; 搜索产品</text>
        <div class="notice" @click="hidePrice"><text class="ic iconfont " v-if="showPrise">&#xe625;</text><text class="ic iconfont " v-else>&#xe600;</text></div>
    </div>
</template>
<style scoped>
.iconfont {
    font-family: iconfont;
}
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 104px;
    padding-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    z-index: 101;
    background-color: #fff;
    opacity: 0.99;
}
.w-ipx {
    height: 144px;
    padding-top: 84px;
}
.notice {
    height: 60px;
    width: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ic {
    font-size: 32px;
}

.search {
    text-align: left;
    color: #666;
    font-weight: 300;
    flex: 1;
    height: 60px;
    font-size: 26px;
    padding-top: 13px;
    background-color: #ededed;
    border-radius: 60px;
    margin-left: 10px;
    padding-left: 30px;
}
</style>
<script>
var navigator = weex.requireModule('navigator');
import util from '@/assets/util';
export default {
    props: {
        hidePrice: {
            type: Function,
            default: null
        },
        showPrise:Boolean
    },
    data() {
        return {};
    },
    created() {},
    methods: {
        jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/search';
            const url = this.$getConfig().bundleUrl;
            navigator.push({
                url: util.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: 'false'
            });
        } 
    }
};
</script>
