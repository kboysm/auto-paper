import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Particles from "particles.vue3";
import VueScrollingTable from "vue-scrolling-table"
import "vue-scrolling-table/dist/style.css"

createApp(App).use(store).use(router).use(Particles).component(VueScrollingTable.name, VueScrollingTable).mount('#app')
