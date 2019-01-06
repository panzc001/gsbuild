import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import pageRouter from './router.js'
import '@/common/css/index.less'
import 'swiper/dist/css/swiper.css';
// import VueI18n from 'vue-i18n';

//地图
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
	key: '7231bc828cfc39536e71a160e37462d0',
	plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
	// 默认高德 sdk 版本为 1.4.4
	v: '1.4.4',
	uiVersion: '1.0.11' // 版本号
});
//国际化
// Vue.use(VueI18n)
// const i18n = new VueI18n({
// 	locale: 'zh-CN',    // 语言标识
// 	//this.$i18n.locale // 通过切换locale的值来实现语言切换
// 	messages: {
// 		'zh-CN': require('./common/lang/zh'),   // 中文语言包
// 		'en-US': require('./common/lang/en')    // 英文语言包
// 	}
// })



Vue.use(VideoPlayer)

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes: pageRouter
});
new Vue({
	router,
	// i18n,
	render: h => h(App),
}).$mount('#app')
