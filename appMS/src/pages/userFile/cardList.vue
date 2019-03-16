<template>
	<div class="wrapper" style="height: screenHeight;">
		<navBar :title="titleName" />
		<scroller class="scroller">
			<div class="cardBox">
				<div class="cardImg"><text class="iconfont cardicon">&#xe617;</text></div>
				<div class="cardMes">
					<div class="cardTitle">
						<text class="cardName">安徽农村信用社</text>
						<text class="cardType">储蓄卡</text>
					</div>
					<div class="userData">
						<text class="userName">张三</text>
						<text class="phone">15262626262</text>
					</div>
					<div class="cardNo"><text class="cardNumber">332626 26262 262 2626</text></div>
				</div>

				<text class="isMainTex">默认</text>
			</div>
			<div class=" cardAdd" @click="tabTo('cardAdd')">
				<text class="iconfont addicon">&#xe613;</text>
				<text class="addtxt">添加</text>
			</div>
		</scroller>
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
				titleName: '银行卡',
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
	.iconfont {
		font-family: iconfont;
	}

	.wrapper {
		position: fixed;
		left: 0;
		top: 0;
	}

	.cardAdd {
		width: 700px;
		height: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #e6e6e6;
		flex-direction: column;
		margin-top: 20px;
		border-radius: 20px;
	}

	.cardBox {
		width: 700px;
		height: 250px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #2460A8;
		margin-top: 20px;
		border-radius: 20px;
		flex-direction: row;
	}

	.cardImg {
		height: 200px;
		width: 150px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

	}

	.cardicon {
		text-align: center;
		font-size: 40px;
		color: #fff;
		background-color: #CDDCF3;
		border-radius: 50px;
		width: 100px;
		height: 100px;
		line-height: 100px;
	}

	.cardMes {
		flex: 1;
		height: 250px;
		padding: 20px 0;
	}

	.isMain {}

	.isMainTex {
		position: absolute;
		right: 10px;
		top: 20px;
		background-color: #8FADCF;
		display: inline-block;
		padding: 8px 20px;
		border-radius: 10px;
		color: #FFFFFF;
	}

	.scroller {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cardTitle,
	.userData,
	.cardNo {
		flex-direction: row;
		align-items: flex-end;
	}

	.cardTitle {
		margin-top: 20px;
	}

	.cardName {

		margin-right: 20px;

	}

	.cardType,
	.cardName {
		font-size: 42px;
		color: #FFFFFF;
	}

	.userName {
		font-size: 32px;
		color: #DBE2F1;
		margin-right: 20px;
	}

	.phone {
		font-size: 32px;
		color: #DBE2F1;
	}

	.userData {
		margin-top: 20px;
	}

	.cardNo {
		margin-top: 30px;
	}

	.cardNumber {
		font-size: 32px;
		color: #DBE2F1;
	}

	.addicon {
		font-size: 150px;
		margin-bottom: 10px;
		color: #fff;
	}

	.addtxt {
		text-align: center;
		color: #666666;
		font-size: 32px;
	}
</style>
