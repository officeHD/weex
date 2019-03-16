<template>
	<scroller class="wrapper">
		<navBar :title="titleName" v-bind:MainPage="true" />

		<div class="mt20">
			<wxc-cell :has-top-border="false" @wxcCellClicked="clearCache" :has-arrow="true" title="清除缓存">
			</wxc-cell>
			<wxc-cell :has-top-border="true" @wxcCellClicked="changePassWord" :has-arrow="true" title="修改密码">
			</wxc-cell>
		</div>
		<div class="mt20 mb50">
			<wxc-cell :has-top-border="false" @wxcCellClicked="exitCount" :has-arrow="true" title="退出当前账号">
			</wxc-cell>
		</div>

		<wxc-dialog title="" :content="content" :show="show" :single="false" :is-checked="isChecked" :show-no-prompt="false"
		 @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked" @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked">
		</wxc-dialog>
	</scroller>
</template>
<script>
	import navBar from './components/navBar.vue';
	import {
		Utils,
		WxcCell,
		WxcDialog
	} from 'weex-ui';
	export default {
		components: {
			navBar: navBar,
			WxcDialog,
			WxcCell
		},
		data() {
			return {
				titleName: '设置',
				show: false,
				isChecked: false,
				content: "确定清除本地缓存？",
				screenHeight: Utils.env.getScreenHeight(),

			};
		},

		methods: {

			exitCount(e) {
				console.log(e)
				this.content = "确定退出当前账号？";
				this.show = true;
			},
			changePassWord(e) {
				this.$router.push('/changePassWord');
			},
			clearCache(e) {
				this.content = "确定清除本地缓存？";
				this.show = true;
			},
			wxcDialogCancelBtnClicked() {
				//此处必须设置，组件为无状态组件，自己管理
				this.show = false;
			},
			wxcDialogConfirmBtnClicked() {
				//此处必须设置，组件为无状态组件，自己管理
				this.show = false;
			}
		}
	};
</script>
<style scoped>
	.wrapper {
		width: 750px;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		background-color: #F2F2F2;
	}




	.mt20 {
		margin-top: 20px;
	}

	.label {
		font-size: 30px;
	}

	.item {
		justify-content: center;
		align-items: center;
	}

	.mb50 {
		margin-bottom: 50px;

	}
</style>
