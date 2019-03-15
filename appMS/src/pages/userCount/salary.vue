<template>
	<div class="wrapper">
		<navBar :title="titleName"/>
   <text> {{salaryMonth}}</text>
	</div>
</template>

<script>
import navBar from "../components/navBar.vue";
const storage = weex.requireModule("storage");
export default {
  components: {
    navBar: navBar
  },
  data() {
    return {
      salaryMonth: "",
      titleName: "工资"
    };
  },
  created: function() {
    storage.getItem("salaryMonth", event => {
      console.log("get value:", event.data);
      this.salaryMonth = "当前月份: " + event.data;
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
