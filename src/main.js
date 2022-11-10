import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import store from './store/index.js';
import './hub.js'

const app=createApp(App);
app.use(store);

app.use(router);
app.mount('#app');
