<template>
	<div class="wrapper">
		<navBar :title="titleName" />
		<div class="drawBox">
			<div class="drawTop">
				<div class="drawTop-left">
					<text class="cashTarget">到银行卡</text>
					<text class="cardTarget"> 工商银行 （1234）</text>
				</div>
				<text class="changeCard">更改默认</text>
			</div>
			<div class="drawContent">
				<text class="drawTitle">提现金额</text>
				<div class="inputItem">
					<text class="symbol">￥</text>
					<input class="input" type="tel" placeholder="请输入金额" @input="changeUserName"></input>
				</div>
				<text class="leveltips">每次最低提现1000元</text>
				<text class="drawBtn">提现</text>
			</div>
		</div>
	</div>
</template>

<script>
	import navBar from "../components/navBar.vue";
	export default {
		components: {
			navBar: navBar
		},
		data() {
			return {
				imagePath: "",
				titleName: "提现"
			};
		},
		created: function() {}
	};
</script>

<style scoped>
	.wrapper {
		flex: 1;
		background-color: #f2f2f2;

		font-size: 28px;
		width: 750px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.drawBox {
		width: 700px;
		background-color: #FFFFFF;
		margin-top: 20px;
		border-radius: 10px;
	}

	.drawTop {
		background-color: #FFF7F8;
		height: 80px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
	}

	.drawTop-left {
		display: flex;
		flex-direction: row;
	}

	.cashTarget {
		color: #333333;
		font-size: 28px;
	}

	.cardTarget {
		color: #000000;
		font-size: 30px;
	}

	.changeCard {
		color: #DA251E;
		font-size: 28px;
	}

	.drawContent {
		padding: 0 20px;


	}

	.drawTitle {
		margin-top: 60px;
		margin-bottom: 30px;
		font-size: 28px;
	}

	.inputItem {
		flex-direction: row;
		height: 100px;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #CCCCCC;
		align-items: center;
		margin-bottom: 20px;
	}

	.input {
		flex: 1;
		height: 100px;
		padding-left: 20px;
		font-size: 40px;
	}

	.symbol {
		font-size: 50px;
		color: #000;
	}

	.leveltips {
		color: #666666;
		font-size: 26px;
	}

	.drawBtn {
		width: 500px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		color: #FFFFFF;
		background-color: #DA251E;
		font-size: 30px;
		border-radius: 10px;
		margin: 60px 80px 30px;
	}
</style>
