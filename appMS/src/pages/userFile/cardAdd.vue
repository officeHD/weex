<template>
	<scroller class="wrapper" style="height: screenHeight;">
		<navBar :title="titleName" />
		<text class="tips">*平台仅支持工、农、中、建、交和邮政银行</text>

		<wxc-cell :has-top-border="false" title="姓名">
			<input class="input" slot="value" placeholder="请输入姓名" :value="userName" @input="changeUserName" />
		</wxc-cell>
		<wxc-cell :has-top-border="false" title="身份证号">
			<input class="input" slot="value" maxlength="18" placeholder="请输入身份证号码" :value="idCard" @input="changeIdCard" />
		</wxc-cell>
		<div class="mt20 ">
			<wxc-cell :has-top-border="false" title="银行卡号">
				<input class="input"  type="tel" slot="value" maxlength="26" placeholder="请输入银行卡号" :value="bankCard" @input="changeBankCard" />
			</wxc-cell>
			<wxc-cell :has-top-border="false" title="开户银行">
				<input class="input" slot="value" placeholder="请选择开户行" :value="bankNum" @input="changeBankNum" />
			</wxc-cell>
			<wxc-cell :has-top-border="false" title="手机号码">
				<input class="input" type="tel" maxlength="11" slot="value" placeholder="请输入手机号码" :value="phoneNum" @input="changePhoneNum" />
			</wxc-cell>
			
		</div>
		<div class="mt20 mb50">
			<wxc-cell  :has-top-border="false" title="设置为默认">
				 
				<switch slot="value" @change=""></switch>
			</wxc-cell>
		</div>
		<div class="item">
			<wxc-button text="确认绑定" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
			
		</div>
		
	</scroller>
</template>
<script>
	import navBar from '../components/navBar.vue';
	import {
		Utils,
		WxcCell,
		WxcButton
	} from 'weex-ui';
	export default {
		components: {
			navBar: navBar,
			WxcButton,
			WxcCell
		},
		data() {
			return {
				titleName: '添加银行卡',
				disabled: false,
				userName:"度圣诞",
				screenHeight: Utils.env.getScreenHeight(),
				idCard:"",
				bankCard:"",
				bankNum:"",
				phoneNum:"",
			};
		},

		methods: {
			onTabTo(_result) {
				let _key = _result.data.key || '';
				this.$router && this.$router.push('/' + _key);
			},
			wxcButtonClicked(e) {
				console.log(e)
			},
			changeUserName(e){
				this.userName=e.value
			},
			changeIdCard(e){
				this.idCard=e.value
			},
			changeBankCard(e){
			 
				
				let str=e.value;
				var c = str.replace(/\s/g,  ""); 
				if(str != "" && c.length > 4 && c.length % 4 == 1){
				  this.bankCard=str.substring(0, str.length - 1)+ " " + str.substring(str.length - 1, str.length);
				    
				}
				
				
           

 
			},
			changeBankNum(e){
				this.bankNum=e.value
			},
			changePhoneNum(e){
				this.phoneNum=e.value
			},
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

	.tips {
		background-color: #FCEFB8;
		color: #DA251E;
		font-size: 24px;
		padding: 10px 20px;
		width: 750px;
	}

	.input {
		width: 500px;
		text-align: right;
		font-size: 28px;
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
