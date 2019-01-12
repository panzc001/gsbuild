import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import pageRouter from './router.js'
import '@/common/css/index.less'
import 'swiper/dist/css/swiper.css';
//地图
// import BaiduMap from "vue-baidu-map";

Vue.use(VideoPlayer)

Vue.use(VueRouter);
//地图
// Vue.use(BaiduMap,{
// 	ak:"D0toceDBsThhuH81qjkEUayhLxkkoB5q"
// })

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes: pageRouter
});
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
