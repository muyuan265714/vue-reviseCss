import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'

export default new Router({
    routes:[
        {
            path:"/",
            name:"首页",
            component:home
        }
    ]
})