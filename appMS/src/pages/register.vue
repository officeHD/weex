<template>
	<div class="wrapper">
		<scroller class="scroller">
			<image class="registerTop" resize="contain" :src="registerTop"></image>
			<div class="inputItem">
				<input class="input" placeholder="手机号" maxlength="11" placeholder-color="#fff" @input="changePhoneNum"></input>
			</div>
			<div class="inputItem">

				<input class="input" placeholder="验证码" maxlength="6" placeholder-color="#fff" @input="changeCode"></input>
				<image class="messageImg" resize="contain" :src="messageImg" @click="getCodeImg"></image>
			</div>
			<div class="inputItem">

				<input class="input" placeholder="短信验证码" maxlength="6" placeholder-color="#fff" @input="changeMessage"></input>
				<text class="sendMesBtn" @click="getMessage">发送验证码</text>
			</div>
			<text class="loginBtn" @click="actionRegister">立即注册</text>
			<text class="registerNum">44595人已经注册</text>

		</scroller>
	</div>
</template>

<script>
	import {
		WxcCheckbox,
		WxcCheckboxList,
		Utils
	} from 'weex-ui'

	var modal = weex.requireModule('modal');
	export default {
		components: {
			WxcCheckbox,
			WxcCheckboxList
		},
		data() {
			return {
				phoneNum: "",
				messageImg: "",
				registerTop: "",
				isRightPhone: false,
				isRightCode: false, //图片验证码是否正确
				codeImg: "", //用户输入的图片Code
				lineCode: "", //获取的图片code
				messageCode: "", //用户输入的短信code
				lineMessage: "", //用户获取的短信code
				isRightMessage: false, //短信验证码是否正确
			}
		},
		created: function() {
			
			this.registerTop = "http://192.168.1.221/img/registerTop.jpg";
			//获取图片验证码
			this.getCodeImg();
			
		},

		methods: {
			changePhoneNum(e) {
				// 输入手机号并验证
				this.phoneNum = e.value;

			},
			wxcCheckBoxItemChecked(e) {
				console.log(e)
			},
			getCodeImg() {
				//获取验证码图片 
				this.lineCode = "123456";
				this.messageImg = "http://192.168.1.221/img/message.jpg";
			},
			changeCode(e) {
				//输入图片验证码 同时校验是否正确
				this.codeImg = e.value;
				if (this.codeImg == this.lineCode) {
					this.isRightCode = true;
				}
			},
			getMessage() {
				//判断图片验证码是否正确，正确就获取短信验证码
				if (this.isRightCode) {
					this.lineMessage = "123456"
				} else {
					modal.toast({
						message: '图片验证码错误',
						duration: 0.8
					});
				}

			},
			changeMessage(e) {
				// 输入短信验证码同时校验是否正确
				this.messageCode = e.value;
				if (this.messageCode == this.lineMessage) {
					this.isRightMessage = true;
				}
			},
			actionRegister() {
				// 注册
				// 判断手机号码格式、图片验证码和短信验证码是否输入 并校验
				if (this.isRightPhone && this.isRightCode && this.isRightMessage) {
					this.reset("/user")
				} else {
					if (!this.isRightPhone) {
						modal.toast({
							message: '请输入正确的手机号',
							duration: 0.8
						});
					} else if (!this.isRightCode) {
						modal.toast({
							message: '请输入正确的图片验证码',
							duration: 0.8
						});
					} else if (!this.isRightMessage) {
						modal.toast({
							message: '短信验证码错误',
							duration: 0.8
						});
					}
				}
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		flex: 1;
		width: 750px;
		display: flex;
		justify-content: flex-star;
		align-items: center;
		padding: 30px 50px;
		background-color: #F95651;
	}

	.scroller {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
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

	.registerTop {
		width: 750px;
		height: 808px;


	}

	.messageImg {
		width: 150px;
		height: 58px;
		margin-right: 25px;
	}

	.inputItem {
		height: 90px;
		margin-bottom: 20px;
		padding-bottom: 5px;
		border-style: solid;
		border-width: 1px;
		border-color: #FE9B07;
		display: flex;
		flex-direction: row;
		border-radius: 5px;
		width: 650px;
		justify-content: space-between;
		align-items: center;
	}

	.sendMesBtn {
		width: 200px;
		text-align: center;
		color: #FFFFFF;
		border-left-style: solid;
		border-left-width: 1px;
		border-left-color: #FE9B07;
		border-radius: 5px;
		height: 90px;
		line-height: 90px;
		font-size: 28px;
	}

	.input {
		flex: 1;
		height: 90px;
		color: #FFFFFF;
		padding-left: 20px;
	}


	.loginBtn {
		height: 100px;
		border-radius: 20px;
		width: 500px;
		background-image: linear-gradient(to right, #FF8DAE, #FFA360);
		text-align: center;
		line-height: 100px;
		color: #FFFFFF;
		margin-top: 40px;
		font-size: 40px;
		margin-bottom: 40px;

	}

	.aboutPW {
		width: 650px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;

	}

	.registerNum {
		text-align: center;
		font-size: 26px;
		color: #F8EF6E;
		margin-bottom: 30px;

	}
</style>
