<template>
    <div class="wrapper"  style="height: screenHeight;">
        <navBar :title="titleName" />
        <div>添加银行卡</div>
    </div>
</template>
<script>
import navBar from '../components/navBar.vue';
import { Utils } from 'weex-ui';
export default {
    components: {
        navBar: navBar
    },
    data() {
        return {
            titleName: '添加银行卡',
            screenHeight: Utils.env.getScreenHeight()
        };
    },

    methods: {
        onTabTo(_result) {
            let _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};
</script>
<style scoped></style>
