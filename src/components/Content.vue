<template>
	<div id="content">
		我是内容组件
		<div v-html="list.content">{{list.content}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "数据",
				list: []
			}
		},
		components: { // 挂载组件

		},
		methods: { // 自定义方法
			requestData() {
				var aid = this.$route.params.aid;

				// get请求如果跨域的话 后台php java里面要允许跨域
				var api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
				this.$http.get(api).then((res) => {
					console.log(res)
					this.list = res.body.result[0];
				}, (err) => {

				})
			}
		},
		mounted() { // 请求数据、操作dom，放在这个里面 必须记住 mounted
			// 获取动态路由传值
			console.log(this.$route.params);
			this.requestData();
		}
	}
</script>

<style lang="scss" scoped>
	#content {
		padding: 1rem;
		line-height: 2;
		img {
			max-width: 98%;

		}
	}
</style>
