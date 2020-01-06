import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/style/index.css';
import plugin from './plugin/link'

Vue.config.productionTip = false;
Vue.use(plugin, {router: router})
console.log(process.env.NODE_ENV, "当前开发模式");
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
