import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'
import Movie from '../components/Movie.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search/:name',
            name: 'Search',
            props: true,
            component: Search,
        },
        {
            path: '/movie/:id',
            name: 'Movie',
            props: true,
            component: Movie
        }
    ],
    mode : 'history'
})