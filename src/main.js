import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
// 引入公共的css 要注意 创建项目的时候 必须用scss
import './assets/css/basic.scss'

Vue.use(ElementUI); // 饿了么ui
Vue.use(VueResource); // 数据请求
Vue.use(VueRouter); // 路由

// 1.创建组件
import Home from './components/Home.vue';
import News from './components/News.vue';
import Content from './components/Content.vue';
import Pcontent from './components/Pcontent.vue';

// 2.配置路由
const routes = [{
		path: '/home',
		component: Home
	},
	{
		path: '/news',
		component: News
	},
	{
		path: '/content/:aid',
		component: Content
	}, /*动态路由*/

	{
		path: '/pcontent',
		component: Pcontent
	},

	{
		path: '*',
		redirect: '/home'
	} /* 默认跳转路由 */
]

// 3.实例化VueRouter
const router = new VueRouter({
	// mode:'history',// hash模式改为history模式
	routes // (缩写) 相当于 routes: routes
})

// 4.挂载路由

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})

// 5.在App.vue中 配置路由出口
// <router-view></router-view>
