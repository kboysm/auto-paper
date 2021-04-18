import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {firebaseInstance} from './plugins/fbase'
console.log(firebaseInstance)

createApp(App).use(store).use(router).mount('#app')
