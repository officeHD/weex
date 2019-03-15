<template>
	<div class="wrapper">
		<navBar :title="titleName"/>
		
		<scroller class="scroller">
			<image class="logo" :src="imagePath"></image>
		</scroller>
	</div>
</template>

<script>
 import navBar from './components/navBar.vue';
export default {
	 components: {
          'navBar':navBar
      },
  data() {
    return {
	  imagePath: "",
	  titleName:"邀请好友赚奖金"
    };
  },
  created: function() {
    this.imagePath = this.getImagePath("invite", ".jpg");
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

.logo {
  height: 2561px;
  width: 750px;
  align-items: center;
  justify-content: center;
}
</style>
