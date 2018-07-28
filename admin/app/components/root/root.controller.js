'use strict';

import leftMenu from './left-menu/left-menu.vue';

export default {
    name: 'root',

    data: () => {
        return {
            rootTitle: 'root'
        }
    },

    props: {},

    methods: {},

    components: {
        leftMenu
    }

}