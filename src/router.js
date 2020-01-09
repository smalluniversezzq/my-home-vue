import Vue from "vue";
import Router from "vue-router";
import router from './router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component:()=>import(/* webpackChunkName: "home" */ "@/views/home/Home.vue"),
      meta: {
        title: '主页',
        keepAlive:false,
      }
    },
    {
      path: "/about",
      name: "about",
      component: () =>import(/* webpackChunkName: "about" */ "@/views/about/About.vue"),
      meta: {
        title: '关于我',
        keepAlive:false,
      }
    },
    {
      path: "/works",
      name: "works",
      component: () =>import(/* webpackChunkName: "works" */ "@/views/works/Works.vue"),
      meta: {
        title: '作品',
        keepAlive:false,
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>import(/* webpackChunkName: "contact" */ "@/views/contact/Contact.vue"),
      meta: {
        title: '联系方式',
        keepAlive:false,
      }
    },
    {
      path: "/message",
      name: "message",
      component: () =>import(/* webpackChunkName: "message" */ "@/views/message/Message.vue"),
      meta: {
        title: '留言板',
        keepAlive:false,
      }
    },
  ]
});
//设置title
const defaultTitle = 'smallUniverse'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title+'-smalluniverse' : defaultTitle
  next()
})
router.afterEach(() => {

  // NProgress.done() // finish progress bar

})
