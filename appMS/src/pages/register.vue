<template>
		<div class="wrapper">
	<scroller class="scroller"  >
		 
		 <image class="registerTop" resize="contain" :src="registerTop"></image>
		<div class="inputItem">
			<input class="input" placeholder="手机号" maxlength="11" placeholder-color="#fff" @input="changeUserName"></input>
		</div>
		<div class="inputItem">

			<input class="input" placeholder="验证码" maxlength="6" placeholder-color="#fff" @input="changePassWord"></input>
			 <image class="messageImg" resize="contain" :src="messageImg"></image>
		</div>
		<div class="inputItem">

			<input class="input" placeholder="短信验证码" maxlength="6" placeholder-color="#fff" @input="changePassWord"></input>
			<text class="sendMesBtn">发送验证码</text>
		</div>
		<text class="loginBtn">立即注册</text>
		<text class="registerNum"  >44595人已经注册</text>

	</scroller>
	</div>
</template>

<script>
	import {
		WxcCheckbox,
		WxcCheckboxList,
		Utils
	} from 'weex-ui'
	 
	export default {
		components: {
			WxcCheckbox,
			WxcCheckboxList
		},
		data() {
			return {
				messageImg: "",
				registerTop: "",
			}
		},
		created: function() {
			this.realHeight=Utils.env.getScreenHeight();
			this.messageImg = "http://192.168.1.221/img/message.jpg";
			this.registerTop = "http://192.168.1.221/img/registerTop.jpg";
		},
		 
		methods: {
			changeUserName(e) {
				console.log(e)
			},
			wxcCheckBoxItemChecked(e) {
				console.log(e)
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
		padding:30px 50px;
		background-color: #F95651;
	}
	.scroller{
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
	.registerTop{
		width: 750px;
		height: 808px;
		 
		 
	}
	.messageImg{
		width: 150px;
		height: 58px;
		margin-right:25px;
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
		background-image:linear-gradient(to right, #FF8DAE, #FFA360);
		text-align: center;
		line-height:100px;
		color: #FFFFFF;
		margin-top: 40px;
		font-size:40px;
		margin-bottom: 40px;

	}

	.aboutPW {
		width: 650px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;

	}
	.registerNum{
		text-align: center;
		font-size: 26px;
		color: #F8EF6E;
		margin-bottom: 30px;
		 
	}
</style>
