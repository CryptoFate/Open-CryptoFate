import Vue from 'vue';
import Router from 'vue-router';

import diceVerify from './components/diceVerify';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/dice',
            name: 'diceVerify',
            component: diceVerify,
        },
    ],
});

export default router;
