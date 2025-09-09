import Vue from "vue";
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

new Vue ({
	router,
	render: h => h(App)
}).$mount("#app");