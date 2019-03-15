<template>
    <div :class="['wrapper']">
        <div class="bar-item" @click="tabTo('home')">
            全部类型
            <text class="iconfont">&#xe607;</text>
        </div>
        <div class="bar-item rightItem" @click="tabTo('user')">
            筛选
            <text class="iconfont shaixuan">&#xe695;</text>
        </div>
    </div>
</template>
<style scoped>
.iconfont {
    font-family: iconfont;
}
.w-ipx {
    top: 144px;
}
.wrapper {
    position: fixed;
    top: 104px;
    left: 0;
    right: 0;
    height: 80px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
}
.bar-item {
    flex-direction: row;
    align-items: center;
    color: #666;
    font-size: 28px;
}
.rightItem {
    align-items: baseline;
}

.shaixuan {
    font-size: 34px;
}
.bar-txt,
.bar-ic {
    text-align: center;
}

.bar-ic {
    font-size: 38px;
}
.bar-txt {
    font-size: 22px;
    padding-top: 5px;
}
</style>
<script>
var modal = weex.requireModule('modal');
export default {
    computed: {},
    data() {
        return {
            pIndexKey: 'home'
        };
    },
    mounted() {},
    methods: {
        tabTo(_key) {}
    }
};
</script>
