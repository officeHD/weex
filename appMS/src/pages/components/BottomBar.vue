<template>
    <div :class="['wrappers', isIpx && isIpx() ? 'w-ipx' : '']">
        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" v-if="pIndexKey=='home'" :class="[this.isActive('home')]">&#xe667;</text>
             <text class="bar-ic iconfont" v-else >&#xe609;</text>
            <text class="bar-txt"  :class="[this.isActive('home')]">赚钱</text>
        </div>
        <div class="bar-item" @click="tabTo('user')">
            <text class="bar-ic iconfont" v-if="pIndexKey=='user'"  :class="[this.isActive('user')]">&#xe602;</text>
            <text class="bar-ic iconfont" v-else  >&#xe605;</text>
            
            <text class="bar-txt" :class="[this.isActive('user')]">我</text>
        </div>
    </div>
</template>
<style scoped>
.iconfont {
    font-family: iconfont;
}
.w-ipx {
    height: 140px;
}
.wrappers {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
    align-items: center;
    width: 750px;
}
.bar-item {
    flex: 1;
}

.bar-txt,
.bar-ic {
    color: #666;
    text-align: center;
}
.bar-active {
    color: #b4282d;
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
    props:{
        pIndexKey:""
    },
    data() {
        return {
            // pIndexKey: 'home'
        };
    },
    mounted() {},
    methods: {
        isActive: function(_c) {
            return this.pIndexKey === _c ? 'bar-active' : '';
        },
        tabTo(_key) {
            if (this.pIndexKey == _key) return;
            // this.pIndexKey = _key;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: _key
                }
            });
        }
    }
};
</script>
