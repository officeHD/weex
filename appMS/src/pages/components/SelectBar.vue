<template>
	<div>
		<div :class="['wrapper']">
			<div class="bar-item" @click="openBottomPopup('company')">
				<text>全部类型</text>
				<text class="iconfont">&#xe607;</text>
			</div>
			<div class="bar-item rightItem" @click="openBottomPopup('')">
				<text>筛选</text>
				<text class="iconfont shaixuan">&#xe695;</text>
			</div>
		</div>
		<wxc-popup popup-color="rgb(255,255,255)" :show="isBottomShow" @wxcPopupOverlayClicked="popupOverlayBottomClick" pos="top"
		 height="588">
			<div class="chose-content">
				<scroller class="scrollContent">
					<div v-if="choseType==='company'">
						<text class="typeName">保险公司</text>
						<div class="choseBox">
							<text :class="['choseItem', companyid==''?'active':'']" @click="companyid=''">全部</text>
							<text :class="['choseItem' ,companyid=='2'?'active':'']" @click="companyid=2">复兴联合健康</text>
							<text :class="['choseItem' ,companyid=='3'?'active':'']">更新中...</text>
						</div>

						<text class="typeName">年龄</text>
						<div class="choseAge">
							<text class="choseItem">起始年龄</text>
							<text class="choseItem">截止年龄</text>
						</div>
					</div>
					<div v-else>
						<text class="typeName">产品类型</text>
						<div class="choseBox">
							<text :class="['choseItem', productType==''?'active':'']" @click="productType=''">全部</text>
							<text :class="['choseItem', productType=='1'?'active':'']" @click="productType='1'">健康险</text>
							<text :class="['choseItem', productType=='2'?'active':'']" @click="productType='2'">意外</text>
							<text :class="['choseItem', productType=='3'?'active':'']" @click="productType='3'">卡单</text>
							<text :class="['choseItem', productType=='4'?'active':'']" @click="productType='4'">重疾险</text>
							<text :class="['choseItem', productType=='5'?'active':'']" @click="productType='5'">年金险</text>
						</div>

						<text class="typeName">更多</text>
						<div class="choseAge">
							<text :class="['choseItem', moreType=='6'?'active':'']" @click="moreType='6'">新上线</text>
							<text :class="['choseItem', moreType=='7'?'active':'']" @click="moreType='7'">老年人</text>
							<text :class="['choseItem', moreType=='8'?'active':'']" @click="moreType='8'">儿童</text>
						</div>
					</div>

				</scroller>
				<div class="actionBar">
					<text class="surBtn" @click="popupOverlayBottomClick">确定</text>
					<text class="canceleBtn">重置</text>
				</div>
			</div>
		</wxc-popup>
	</div>
</template>
<script>
	import {
		WxcPopup
	} from 'weex-ui';
	var modal = weex.requireModule('modal');
	export default {
		components: {
			WxcPopup
		},
		data() {
			return {
				isBottomShow: false,
				choseType: "company",
				companyid: "",
				productType: "",
				moreType: ""
			};
		},
		mounted() {},
		methods: {
			tabTo(_key) {},
			openBottomPopup(type) {
				this.choseType = type;
				this.isBottomShow = true;
			},
			//非状态组件，需要在这里关闭
			popupOverlayBottomClick() {
				this.isBottomShow = false;
			}
		}
	};
</script>
<style scoped>
	.iconfont {
		font-family: iconfont;
	}

	.w-ipx {
		top: 144px;
	}

	.wrapper {
		position: fixed;
		top: 104px;
		left: 0;
		right: 0;
		height: 80px;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: space-between;

		align-items: center;
		padding-left: 20px;
		padding-right: 20px;
		background-color: #fff;
	}

	.bar-item {
		flex-direction: row;
		align-items: center;
		color: #666;
		font-size: 28px;
		justify-content: flex-start;
	}

	.rightItem {
		align-items: baseline;
	}

	.shaixuan {
		font-size: 34px;
	}

	.bar-txt,
	.bar-ic {
		text-align: center;
	}

	.bar-ic {
		font-size: 38px;
	}

	.bar-txt {
		font-size: 22px;
		padding-top: 5px;
	}

	.chose-content {
		padding: 0;
		flex: 1;
		position: relative;
	}

	.scrollContent {
		height: 500px;
		padding: 20px 0;
	}

	.actionBar {

		height: 88px;
		display: flex;
		flex-direction: row;

	}

	.surBtn {
		color: #fff;
		background-color: #DA251E;
		flex: 1;
		height: 88px;
		line-height: 88px;
		text-align: center;
	}

	.canceleBtn {
		color: #fff;
		background-color: #CCCCCC;
		flex: 1;
		height: 88px;
		line-height: 88px;
		text-align: center;
	}

	.typeName {
		font-size: 30px;
		color: #000;
		margin-bottom: 10px;
		padding: 0 20px;
	}

	.choseBox {
		margin-bottom: 30px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}

	.choseAge {
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
	}

	.choseItem {
		width: 200px;
		margin: 10px 20px;
		text-align: center;
		background-color: #f2f2f2;
		height: 55px;
		line-height: 55px;
		color: #666666;
		border-radius: 5px;

	}

	.active {
		background-color: #DA251E;
		color: #FFFFFF;
	}
</style>
