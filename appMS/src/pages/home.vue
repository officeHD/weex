<template>
	<div class="wrapper">
		<home-header :hidePrice="hidePrice" :showPrise="showPrise"></home-header>
		<home-selectBar></home-selectBar>
		<scroller :class="['main-list', isIpx && isIpx() ? 'ml-ipx' : '']" offset-accuracy="300" loadmoreoffset="300"
		 @loadmore="onloadmore">
			<refresher @loadingDown="loadingDown"></refresher>
			<div class="cell-button">
				<goodsList :goods="goodsList" :showPrise="showPrise"></goodsList>
			</div>
			<loading class="loading" @loading="onloading" :display="showLoading">
				<text class="indicator">...</text>
			</loading>
		</scroller>

		<bottom-bar @tabTo="onTabTo" :pIndexKey="pIndexKey"></bottom-bar>
	</div>
</template>
<script>
	import Header from './components/Header.vue';
	import SelectBar from './components/SelectBar.vue';
	import refresher from './components/refresh.vue';
	import GoodsList from './components/GoodsList.vue';
	import BottomBar from './components/BottomBar.vue';
	import * as api from './api';
	const stream = weex.requireModule('stream') || {};
	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');

	export default {
		components: {
			'home-header': Header,
			'refresher': refresher,
			'home-selectBar': SelectBar,
			'goodsList': GoodsList,
			'bottom-bar': BottomBar
		},

		data() {
			return {
				hasMore: false,
				pIndexKey: "home",
				showPrise: true,
				goodsList: [{
						img: 'https://planbook.kbao123.com/market-rest/api/file/download?path=market%2F%7BchannelId%7D%2Fproduct%2FPRO20181012000003%2Fminimg%2F6.jpg&isOnline=true&channelId=',
						companyName: '泰康人寿',
						ageLabel: '5天-70周岁',
						coveragePeriod: '终身',
						productName: '泰康人寿华夏红华夏红华夏红',
						info: '人气推荐 · 好物精选',
						culture: [{
								title: '重大疾病保险',
								content: '5万元'
							},
							{
								title: '轻症疾病保险金',
								content: '1.5万元，三次'
							},
							{
								title: '被保险人轻症豁免保险费',
								content: '豁免后期保险费'
							}
						],
						price: '33',
						benfit: '3%+15%'
					},
					{
						img: 'https://planbook.kbao123.com/market-rest/api/file/download?path=market%2F%7BchannelId%7D%2Fproduct%2FPRO20181012000003%2Fminimg%2F6.jpg&isOnline=true&channelId=',
						companyName: '泰康人寿',
						productName: '华夏红',
						info: '人气推荐 · 好物精选',
						ageLabel: '5天-70周岁',
						coveragePeriod: '终身',
						culture: [{
								title: '重大疾病保险',
								content: '5万元'
							},
							{
								title: '轻症疾病保险金',
								content: '1.5万元，三次'
							},
							{
								title: '被保险人轻症豁免保险费',
								content: '豁免后期保险费'
							}
						],
						price: '33',
						benfit: '3%+15%'
					}
				],
				showLoading: 'hide'
			};
		},
		created() {
			// 			api.getList('', res => {
			// 				console.log(res);
			// 			});
			// 			let data = {
			// 				workNum: '',
			// 				page: 1,
			// 				size: 10,
			// 				isMain: 0,
			// 				type: '',
			// 				comName: '',
			// 				productName: ''
			// 			};
			// 			api.getComList({
			// 				data: JSON.stringify(data)
			// 			}, res => {
			// 				console.log(res);
			// 				if (res.result == "1") {
			// 					// this.goodsList=res.list   
			// 				}
			// 			});
		},
		methods: {
			onloading() {
				if (!hasMore) {
					return false
				}
				modal.toast({
					message: 'loading',
					duration: 0.3
				});
				this.showLoading = 'show';
				setTimeout(() => {
					this.showLoading = 'hide';
				}, 300);
			},
			onloadmore() {
				if (!hasMore) {
					return false
				}
				modal.toast({
					message: 'loading',
					duration: 0.3
				});
				setTimeout(() => {}, 100);
			},
			loadingDown() {
				  
			},
			hidePrice() {
				this.showPrise = !this.showPrise;
			},
			onTabTo(_result) {
				let _key = _result.data.key || '';
				this.$router && this.$router.push('/' + _key);
			}
		}
	};
</script>
<style scoped>
	.main-list {
		position: fixed;
		top: 184px;
		bottom: 100px;
		left: 0;
		right: 0;
		/*margin-top: 167px;*/
		/*margin-bottom: 90px;*/
	}

	.ml-ipx {
		top: 224px;
		bottom: 140px;
	}

	.cell-button {
		padding-bottom: 18px;
	}
</style>
