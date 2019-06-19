/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';

Vue.use(VueAxios, axios);


import VeeValidate from 'vee-validate';
import { ServerTable, Event } from 'vue-tables-2';
    
Vue.use(ServerTable, {}, false, 'bootstrap4')
Vue.use(VeeValidate);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


// Vue.component('users', require('./views/users.vue'));
Vue.component('flash', require('./components/flash.vue').default);

 import ReferralsComponet from './views/Referrals.vue';
 import ReferralComponent from './views/Referral.vue';

const routes = [
    {
        name: 'referrals',
        path: '/',
        component: ReferralsComponet
    },
    {
        name: 'referral',
        path: '/referral',
        component: ReferralComponent
    }
]
const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     components: {
//         Referrals
//     }
// });
