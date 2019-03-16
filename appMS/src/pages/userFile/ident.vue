<template>
	<div class="wrapper">
		<navBar :title="titleName" />
		<text @click="tabTo('identMember')">非保险从业人员认证</text>
		<text @click="tabTo('identAgent')">保险从业人员认证</text>
	</div>
</template>
<script>
	import navBar from "../components/navBar.vue";
	import {
		Utils
	} from "weex-ui";
	export default {
		components: {
			navBar: navBar
		},
		data() {
			return {
				titleName: "资质认证",
				screenHeight: Utils.env.getScreenHeight()
			};
		},

		methods: {
			tabTo(_key) {
				this.$router && this.$router.push("/" + _key);
			}
		}
	};
</script>
<style scoped>
	.wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>
