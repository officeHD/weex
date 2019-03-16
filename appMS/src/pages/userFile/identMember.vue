<template>
	<div class="wrapper">
		<navBar :title="titleName" />
		<text class="tips">*依照保监要求，为了保障您的利益，请清准确填写一下实名信息，本平台郑重承诺对您所提供个人信息严格保密</text>
		<div class="item">
			<text class="label">姓名</text>
			<input class="input" type="text" />
		</div>
		<div class="item">
			<text class="label">身份证号</text>
			<input class="input" type="text" />
		</div>
		<div class="item">
			<text class="label">证书编号</text>
			<input class="input" type="text" />
		</div>
	</div>
</template>
<script>
	import navBar from '../components/navBar.vue';
	import {
		Utils
	} from 'weex-ui';
	export default {
		components: {
			navBar: navBar
		},
		data() {
			return {
				titleName: '资质认证'

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
<style scoped>
	.wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
			width: 750px;
	}

	.tips {
		background-color: #FCEFB8;
		color: #DA251E;
		font-size: 24px;
		padding: 10px 20px;
		width: 750px;
	}
</style>
