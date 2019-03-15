<template>
    <div class="wrapper" ref="container" :style="{height:mainHeight}">
        <!-- <image :src="imagePath" class="logo"></image> -->
        启动页
    </div>
</template>
<style scoped>

    .wrapper { 
        height: 1334px;
        width: 750px;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 1334px;
        width: 750px;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
    
    import {Utils} from 'weex-ui'
    const animation = weex.requireModule('animation');

    export default {
        components: {},
        data() {
            return {
                imagePath: '',
                mainHeight: 0
            }
        },
        methods: {},
        created: function () {
            
            this.mainHeight = Utils.env.getScreenHeight();
            setTimeout(() => {
                let containerEl = this.$refs[`container`];
                animation.transition(containerEl, {
                    styles: {
                        transform: `translateX(-750px)`
                    },
                    duration: 1000,
                    'cubic-bezier': (0.25, 0.46, 0.45, 0.94),
                    delay: 0
                }, () => {
                     this.reset("/home")
//                     if (res && res.result) {
//                        
//                     } else {
//                         this.reset("/login")
//                     }
                });
            },300)
        },
    }
</script>