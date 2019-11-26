<template>
	<div id="content">
		我是内容组件
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "数据"				
			}
		},
		components: { // 挂载组件

		},
		methods: { // 自定义方法

		},
		mounted() { // 请求数据、操作dom，放在这个里面 必须记住 mounted
			// 获取get传值
			console.log(this.$route.query);
		}
	}
</script>

<style>

</style>
