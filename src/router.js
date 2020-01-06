import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component:()=>
      import(/* webpackChunkName: "about" */ "@/views/home/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/About.vue")
    },
    {
      path: "/works",
      name: "works",
      component: () =>
      import(/* webpackChunkName: "about" */ "@/views/works/Works.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
      import(/* webpackChunkName: "about" */ "@/views/contact/Contact.vue")
    },
    {
      path: "/message",
      name: "message",
      component: () =>
      import(/* webpackChunkName: "about" */ "@/views/message/Message.vue")
    },
  ]
});
