import VueRouter from 'vue-router';

let views = new Map([
        ['/', './views/Home.vue'],
        ['/about', './views/About.vue'],
    ]),
    routes = []

for (let view of views.keys()) {
    routes.push({
        path: `${view}`,
        component: require(`${views.get(view)}`)
    })
}
/*let routes =[
    {
        path: '/',
        component: require('./views/Home.vue')
    },
    {
        path: '/about',
        component: require('./views/About.vue')
    }
]*/

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
})