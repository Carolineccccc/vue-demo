import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 1. state在vuex中用于存储数据
var state = {
	count: 1
}
// 2.mutation里面放的是方法,方法主要是用于改变state里面的数据
var mutations = {
	incCount() {
		++state.count;
	}
}

// 3.有点类似计算属性  改变state里面的count数据的时候会出发getters里面的方法 获取新的值
var getters = {
	computedCount: (state) => {
		return state.count * 2
	}
}

// 4.action
var actions={
	
	}

// Vuex 实例化 Vuex.Store
const store = new Vuex.Store({
	state,
	mutations: mutations,
	getters: getters // 或者直接写为 getters
})

export default store;
