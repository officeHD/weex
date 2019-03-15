<template>
	<div class="wrapper">
		<navBar :title="titleName" v-bind:MainPage="true" />
	</div>
</template>

<script>
import navBar from "./components/navBar.vue";
export default {
  components: {
    navBar: navBar
  },
  data() {
    return {
      imagePath: "",
      titleName: "设置"
    };
  },
  created: function() {}
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
