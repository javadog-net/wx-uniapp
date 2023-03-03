import App from './App.vue'
import Vue from 'vue'
import uView from 'uview-ui'
import api from "@/common/api"
import config from '@/common/config/env.js'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(uView)
Vue.prototype.$api = api;
Vue.prototype.$config = config;

const app = new Vue({
	...App
})

// uview-request
require('@/common/http/request.js')(app)

app.$mount();
