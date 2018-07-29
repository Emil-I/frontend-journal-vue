'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import dashboardRoutes from './components/dashboard/dashboard.router'

export default new VueRouter({
    routes: [dashboardRoutes]
});