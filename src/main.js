import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faSearch);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateCollectionComponent from './components/CreateCollectionComponent.vue';
import CreateDiscComponent from './components/CreateDiscComponent.vue';
import ListCollectionComponent from './components/ListCollectionComponent.vue';
import EditCollectionComponent from './components/EditCollectionComponent.vue';
import EditDiscComponent from './components/EditDiscComponent.vue';
import SearchComponent from './components/SearchComponent.vue';


const routes = [{
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'createCollection',
        path: '/colecao/novo',
        component: CreateCollectionComponent
    },
    {
        name: 'createDisc',
        path: '/colecao/:id/disco/novo',
        component: CreateDiscComponent
    },
    {
        name: 'editDisc',
        path: '/colecao/:cid/disco/:did/detalhar',
        component: EditDiscComponent
    },
    {
        name: 'editCollection',
        path: '/colecao/:id/editar',
        component: EditCollectionComponent
    },
    {
        name: 'listCollection',
        path: '/colecao/:id',
        component: ListCollectionComponent
    },
    {
        name: 'search',
        path: '/search',
        component: SearchComponent
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue(Vue.util.extend({
    router
}, App)).$mount('#app');