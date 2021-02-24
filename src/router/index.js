import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../page/Homepage';
import Employ from '../page/Employ';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/employ',
            name: 'Employ',
            component: Employ
        },
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
    ],
    scrollBehavior (to) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return { x: 0, y: 0 }
    }
})