<template>
	<div class="wrapper">
		<navBar :title="titleName" v-bind:MainPage="true" />
	</div>
</template>

<script>
import navBar from "./components/navBar.vue";
const storage = weex.requireModule("storage");
export default {
  components: {
    navBar: navBar
  },
  data() {
    return {
      imagePath: "",
      titleName: "订单"
    };
  },
  created: function() {
    let self = this;
    let query = this.getQuery();
    if (query.orderId) {
      // 储存id
      storage.setItem("orderId", query.orderId, event => {
        self.reset("orderDetail");
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  flex: 1;
  background-color: #f2f2f2;
  padding-bottom: 100px;
  font-size: 28px;
  width: 750px;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
