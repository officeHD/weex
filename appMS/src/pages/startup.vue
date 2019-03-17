<template>
	<div class="wrapper">
		<div class="loading" ref="test"> </div>
		<div class="container" ref="container">
			<image class="image" resize="contain" :src="imagePath"></image>
			<image class="image" resize="contain" :src="imagePath1"></image>
		</div>
		<text class="jump" @click="jumpHome">跳过</text>
	</div>
</template>

<script>
	const storage = weex.requireModule('storage')
	const animation = weex.requireModule('animation')
	export default {
		components: {},
		data() {
			return {
				imagePath1: "http://192.168.1.221/img/star2.jpg",
				imagePath: 'http://192.168.1.221/img/star1.jpg'
			}
		},
		methods: {
			scrollChange(e) {
				console.log(e)
			},
			jumpHome() {
				this.reset("/home")
			},
			scanPage() {
				let that = this;

				var testEl = that.$refs.test;
				var containerEl = that.$refs.container;
				animation.transition(testEl, {
					styles: {
						color: '#FF0000',
						transform: 'rotate(360deg)',
						transformOrigin: 'center center'
					},
					duration: 5000, //ms

					delay: 0 //ms
				}, function() {
					// 进入首页
					storage.setItem("isScan", "true", event => {
						that.reset("/home")
					})

				})
				setTimeout(() => {
					animation.transition(containerEl, {
						styles: {
							transform: `translateX(-750px)`
						},
						duration: 500,
						delay: 0
					});
				}, 1200)

			}
		},
		created: function() {
			let that = this;
			setTimeout(() => {
				//获取缓存判断是否打开过APP
				storage.getItem('isScan', event => {
					if (event.result === "success") {
						console.log(event)
						that.reset("/home")
					} else {
						that.scanPage();
					}

				})
			}, 300)

		},
	}
</script>

<style scoped>
	.wrapper {
		flex: 1;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		position: fixed;
		right: 0;
		top: 0;
		left: 0;
		bottom: 0;

	}

	.container {
		width: 1500px;
		height: 1000px;
		display: flex;
		flex-direction: row;
		position: fixed;
		left: 0;
		background-color: #FFFFFF;
		bottom: 44px;
	}

	.image {
		width: 750px;
		height: 1000px;
	}

	.loading {
		width: 70px;
		height: 70px;
		border-radius: 35px;
		border-width: 5px;
		border-color: #BEBEBE;
		border-style: solid;
		border-top-color: #498aca;
		position: fixed;
		right: 50px;
		top: 50px;

	}

	.jump {
		position: fixed;
		right: 50px;
		top: 50px;
		width: 70px;
		height: 70px;
		line-height: 70px;
		font-size: 24px;
		;
		text-align: center;
	}
</style>