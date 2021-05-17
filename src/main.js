import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Particles from "particles.vue3";
import VueScrollingTable from "vue-scrolling-table"
import "vue-scrolling-table/dist/style.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueHtmlToPaper from "./plugins/VueHtmlToPaper";
library.add(faBars);

createApp(App).use(store).use(router).use(Particles).use(VueHtmlToPaper).component(VueScrollingTable.name, VueScrollingTable).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
