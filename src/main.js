import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/style/index.css';
import plugin from './plugin/link'
import Nav from '@/components/nav.vue'
import Foot from '@/components/foot.vue'
import VueStorage from 'vue-ls'
import vueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css' 
import '@/assets/css/common.css' // 公共样式

// iviewui 按需引入
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(VueStorage);
Vue.component("Nav", Nav);
Vue.component("Foot", Foot);
Vue.use(vueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.use(plugin, {router: router}, )
console.log(process.env.NODE_ENV, "当前开发模式");
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
