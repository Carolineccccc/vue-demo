<template>
	<div id="home">
		我是首页组件 -- {{this.$store.state.count}}---{{this.$store.getters.computedCount}}
		<button @click="goNews()">通过脚本跳转到新闻页面</button>
		<button @click="incCount()">增加数量</button>
		
		
	</div>
</template>

<script>
	// 1. 引入store
	import store from '../vuex/store.js'
	export default {
		data() {
			return {
				msg: '我是一个首页组件'
			}
		},
		store,
		methods: {
			goNews() {
				// 编程式导航

				// this.$router.push({
				// 	path: "news"
				// })
				this.$router.push({
					path: "/content/495"
				})
			},
			incCount() {
				// 改变vuex store中的数据
				// 
				this.$store.commit('incCount');
			}
		}
	}
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>
