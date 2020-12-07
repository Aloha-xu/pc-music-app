import Vue from 'vue'
import VueRouter from 'vue-router'
//使用VueRouter
Vue.use(VueRouter)
const routes=[
    
]
//注册router
const router = new VueRouter({
    routes,
    mode:"history"
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//导出router
export default router