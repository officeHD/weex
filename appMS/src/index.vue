<template>
    <div class="wrapper" :style="{height: realHeight}">
        <router-view  ></router-view>
    </div>
</template>

<script>
import BottomBar from "./pages/components/BottomBar.vue";
import util from "./assets/util";
import { BindEnv, Utils } from "weex-ui";
const globalEvent = weex.requireModule("globalEvent");
const eventModule = weex.requireModule("CommonModule");
export default {
  name: "App",
  data() {
    return {
      isShow: true,
      realHeight: Utils.env.getScreenHeight() 
    };
  },
  components: {
    "bottom-bar": BottomBar
  },
  created() {
    util.initIconFont();
    var objThis = this;
    this.realHeight=Utils.env.getScreenHeight();
    // if (objThis.$route.path  == "/home" && objThis.$route.path == "/user") {
    //   this.isshow = true;
    // }else{
    //      this.isshow = false;
    // }
    globalEvent.addEventListener("androidback", function(e) {
      if (objThis.$route.path == "/home" || objThis.$route.path == "/login") {
        eventModule.closeApp();
      } else {
        objThis.$router.go(-1);
      }
    });
  },
  methods: {
    onTabTo(_result) {
      let _key = _result.data.key || "";
      this.$router && this.$router.push("/" + _key);
    }
  },
  updated() {
    var objThis = this;
    console.log(objThis.$route.path);
    if (objThis.$route.path == "/home" && objThis.$route.path == "/user") {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 750px;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
	flex: 1;
}
 
</style>
