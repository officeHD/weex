<template>
    <div class="wrapper">
        <div
            class="gb-box"
            v-for="(item, key, index) in goods"
            @click="jumpWeb(item.url)"
            v-bind:key="index"
        >
            <div class="item-img">
                <image class="gd-img" resize="cover" :src="item.img"></image>
                <text class="gd-companyName">{{ item.companyName }}</text>
            </div>
            <div class="item-info">
                <text class="gd-name">{{ item.productName }}</text>
                <div class="gd-label">
                    <div class="labelTxt ">
                        <text class="iconfont org">&#xe6a3;</text>

                        <text>投保年龄：{{ item.ageLabel }}</text>
                    </div>
                    <div class="labelTxt ml15 ">
                        <text class="iconfont org">&#xe6a3;</text>
                        <text>保障期限：{{ item.coveragePeriod }}</text>
                    </div>
                </div>
                <div
                    class="cul_list"
                    v-for="(items, key, index) in item.culture"
                    v-bind:key="index"
                >
                    <text class="list_item">{{ items.title }}</text>
                    <text class="list_item">{{ items.content }}</text>
                </div>
                <div class="cul_list mt15">
                    <div class="price-item">
                        <text>¥</text>
                        <text class="price">{{ item.price }}</text>
                        <text>元起</text>
                    </div>

                    <text class="price-benfit" v-if="showPrise">推广费 {{ item.benfit }}</text>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.iconfont {
    font-family: iconfont;
    margin-right: 5px;
}
.org {
    color: #f5921a;
}
.wrapper {
    background-color: #f2f2f2;
    padding-bottom: 10px;
    padding-top: 26px;
    width: 750px;
}

.gb-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 15px;
    background-color: #fff;
    width: 750px;
}
.item-img {
    width: 200px;
    padding: 25px;
}
.gd-img {
    width: 150px;
    height: 150px;
    background-color: #f4f4f4;
}
.ml15 {
    margin-left: 15px;
}
.gd-companyName {
    display: block;
    font-size: 28px;
    height: 65px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #333;
    background-color: #f4f6f5;
    overflow: hidden;
    text-align: center;
    lines: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-info {
    width: 550px;
    padding: 25px 25px 25px 0;
}
.gd-name {
    font-size: 34px;
    color: #000;
    display: block;
    margin-bottom: 15px;

    overflow: hidden;
    lines: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.gd-label {
    display: flex;

    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    width: 525px;
}
.labelTxt {
    font-size: 24px;
    color: #666666;
    margin-right: 10px;
    display: flex;

    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}
.cul_list {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    margin-bottom: 8px;
}
.list_item {
    font-size: 28px;
    color: #666666;
}
.price-item {
    display: flex;
    flex-direction: row;
    color: #dd403b;
    align-items: baseline;
    font-size: 28px;
    
}
.price-benfit {
    color: #dd403b;

    font-size: 28px;
}

.price {
    font-size: 50px;
    color: #dd403b;
    margin-left: 8px;
    margin-right: 8px;
}
.mt15 {
    margin-top: 15px;
}
</style>
<script>
var navigator = weex.requireModule('navigator');
import util from '@/assets/util';
export default {
    props: {
        showPrise: Boolean,
        goods: Array
    },

    methods: {
        jumpWeb(_url) {
            if (!_url)
                _url =
                    'http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7';
            const url = this.$getConfig().bundleUrl;
            //             navigator.push({
            //                 url: util.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
            //                 animated: 'true'
            //             });
        }
    }
};
</script>
