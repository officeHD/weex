<template>
	<div class="wrapper">
		<navBar :title="titleName" v-bind:MainPage="true" />
        <text>{{orderId}}</text>
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
      orderId: "",
      titleName: "订单详情"
    };
  },
  created: function() {
    storage.getItem("orderId", event => {
      console.log("get value:", event.data);
      this.orderId = "订单ID: " + event.data;
    });
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
