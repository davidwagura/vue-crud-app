import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import vueConfig from 'vue.config';

vueConfig.productionTip = false;

new Vue({
    render: (h) => h(App),
    router,
}).mount('#app')
