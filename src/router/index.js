import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import indexComponent from '@/components/index'
import mapComponent from '@/components/map'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'indexComponent',
            component: indexComponent
        },{
            path: '/map',
            name: 'mapComponent',
            component: mapComponent
        }
  ]
})
