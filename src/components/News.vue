<template>
	<div id="news">
		我是新闻组件 -- {{this.$store.state.count}}
		<button @click="incCount()">增加数量</button>
		<!-- <ul class="list">
			<li v-for="(item,key) in list">
				<router-link :to="'/content/' +item.aid">{{item.aid}}--{{item.title}} </router-link>
			</li>

		</ul> -->
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default {
		data() {
			return {
				msg: "我是一个新闻组件",
				list: ['1111', '2222', '3333']
			}
		},
		store,
		methods: {
			/*	requestData() {
					// jsonp请求的话 后台api接口要支持jsonp
					var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
					this.$http.jsonp(api).then((res) => {
						// 注意：this要注意this指向
						this.list = res.body.result;
					}, (err) => {
						console.log(err);
					})
				}
				*/
			incCount() {
				// 改变vuex store中的数据
				// 
				this.$store.commit('incCount');
			}
		},
		mounted() {
			this.requestData();
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		li {
			height: 3.4rem;
			line-height: 3.4rem;
			border-bottom: 1px solid #eee;
			font-size: 1.6rem;

			a {
				color: #409EFF;
				text-decoration: none;
			}
		}
	}
</style>
