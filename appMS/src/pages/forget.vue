<template>
	<div class="wrapper">
		<navBar :title="titleName" />
		<div class="inputItem">
			<text class="iconfont unIcon">&#xe605;</text>
			<input class="input" placeholder="请输入您的手机号" @input="changeUserName"></input>
		</div>
		<div class="inputItem">
			<text class="iconfont unIcon">&#xe605;</text>
			<input class="input" placeholder="请输入短信验证码" maxlength="6"  @input="changeMessage"></input>

			<text class="sendMesBtnDisabled" v-if="sendMsgDisabled">{{time+'秒后获取'}}</text>
			<text class="sendMesBtn" v-if="!sendMsgDisabled" @click="getMessage">获取验证码</text>
		</div>
		<div class="inputItem ">
			<text class="iconfont pwIcon">&#xe605;</text>
			<input class="input" placeholder="请输入您的密码" @input="changePassWord"></input>
		</div>
		<text class="loginBtn">确定修改</text>

	</div>
</template>

<script>
	import navBar from "./components/navBar.vue";
	const dom = weex.requireModule('dom');
	var modal = weex.requireModule('modal');
	export default {
		components: {
			navBar: navBar
		},
		data() {
			return {
				imagePath: "",
				titleName: "更改密码",
				time: 60, // 发送验证码倒计时
				sendMsgDisabled: false,
			};
		},
		created: function() {

		},
		methods: {
			changeUserName(e) {
				console.log(e)
			},
			getMessage() {
				//判断手机号是否正确，正确就获取短信验证码
				if (this.isRightPhone) {
					let that = this;
					that.sendMsgDisabled = true;
					let interval = setInterval(function() {
						if ((that.time--) <= 0) {
							that.time = 60;
							that.sendMsgDisabled = false;
							clearInterval(interval);
						}
					}, 1000);

				} else {
					modal.toast({
						message: '手机号格式错误',
						duration: 0.8
					});
				}
			},
		}
	};
</script>


<style scoped>
	.iconfont {
		font-family: iconfont;
	}

	.wrapper {
		flex: 1;
		width: 750px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 50px;
		background-color: #FFFFFF;
	}

	.register {
		position: fixed;
		font-size: 30px;
		color: #DA251E;
		right: 20px;
		top: 20px;
		;
	}

	.logo {
		width: 480px;
		height: 90px;
		margin-top: 100px;
		margin-bottom: 150px;
	}


	.forget {
		font-size: 28px;
	}

	.readP {
		font-size: 28px;
	}


	.inputItem {

		height: 60px;

		margin-bottom: 80px;
		padding-bottom: 5px;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #ccc;
		display: flex;
		flex-direction: row;
		width: 650px;
		justify-content: space-between;
		align-items: flex-end;
		padding-left: 5px;
	}

	.unIcon,
	.pwIcon {
		width: 60px;
		line-height: 60px;
		font-size: 34px;
		text-align: center;
	}

	.loginBtn {
		height: 90px;
		border-radius: 45px;
		width: 650px;
		background-color: #DA251E;
		text-align: center;
		line-height: 90px;
		color: #FFFFFF;
		margin-top: 40px;
		font-size: 34px;
		margin-bottom: 40px;

	}

	.input {
		flex: 1;
		height: 60px;
		 
		padding-left: 10px;
	}

	.aboutPW {
		width: 650px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;

	}
	.sendMesBtn {
			width: 200px;
			text-align: center;
			color: #666;
			/* border-left-style: solid;
			border-left-width: 1px;
			border-left-color: #FE9B07; */
			border-radius: 5px;
			height: 60px;
			line-height: 60px;
			font-size: 28px;
		}
	.sendMesBtnDisabled{
		width: 200px;
		text-align: center;
		color: #FFFFFF;
		/* border-left-style: solid;
		border-left-width: 1px;
		border-left-color: #FE9B07; */
	
		height: 60px;
		line-height: 60px;
		font-size: 28px;
		background-color: #ccc;
	}
</style>
