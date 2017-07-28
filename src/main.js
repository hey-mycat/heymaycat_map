import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  	ak: 'GfMwGWF7R4eqbf5XbptcIC47xxHtbeGU',
})

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})