<template>
	<div id="app">
		<header class="header">
			<router-link to="/home">首页</router-link>
			<router-link to="/news">新闻</router-link>
		</header>
		<hr />
		<router-view></router-view>
	</div>

</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: '你好vue'
			}
		},
		methods: { // 自定义方法

		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.header{
		height: 4.4rem;
		background: #000;
		color: #FFFFFF;
		line-height: 4.4rem;
		text-align: center;
	}
	a{
		color: #fff;
		padding: 0 1rem;
	}
</style>
