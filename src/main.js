import './set-public-path';

import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
	createApp,
	appOptions: {
		el: '#content',
		render: () => h(App),
	},
	handleInstance: (app, singleSpaProps) => {
		app.provide('sessionService', singleSpaProps.data.sessionService)
	},
	replaceMode: true,
});

export const { bootstrap, mount, unmount} = vueLifecycles;