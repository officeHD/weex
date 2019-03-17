<template>
	<div class="wrapper">
		<text class="register" @click="reset('/register')">注册</text>
		<image class="logo" resize="contain" :src="imagePath"></image>
		<div class="inputItem">
			<text class="iconfont unIcon">&#xe605;</text>
			<input class="input" placeholder="用户名/邮箱" @input="changeUserName"></input>
		</div>
		<div class="inputItem ">
			<text class="iconfont pwIcon">&#xe605;</text>
			<input class="input" placeholder="密码" @input="changePassWord"></input>
		</div>
		<text class="loginBtn">登录</text>
		<div class="aboutPW">
			<text class="readP iconfont">&#xe605; 记住密码</text>
			<text class="forget">忘记密码</text>
		</div>
	</div>
</template>

<script>
	import {
		WxcCheckbox,
		WxcCheckboxList
	} from 'weex-ui'
	export default {
		components: {
			WxcCheckbox,
			WxcCheckboxList
		},
		data() {
			return {
				imagePath: ""
			}
		},
		created: function() {
			this.imagePath = "http://192.168.1.221/img/logo.png"
		},
		methods: {
			changeUserName(e) {
				console.log(e)
			} 
		}
	}
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
		;
		padding-left: 10px;
	}

	.aboutPW {
		width: 650px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;

	}
</style>
