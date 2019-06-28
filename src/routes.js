import VueCmp from "@/vue/index.vue"
import CssSecretCmp from "@/cssSecret/index.vue"
import CommunicationCmp from "@/vue/communication/index.vue"
import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
Vue.use(VueRouter)
const router=new VueRouter({
  base:__dirname,
  mode:"history",
  routes:[
    { path: '/', component: App},
    { path: '/vue', component: VueCmp,
      children:[
        {path:"communication",component:CommunicationCmp}
      ]
    },
    { path: "/css",component:CssSecretCmp}
  ]
})
export default router
