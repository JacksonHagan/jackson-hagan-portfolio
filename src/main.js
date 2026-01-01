import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAnimateOnScroll from 'vue-animate-onscroll'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAnimateOnScroll)

app.mount('#app')

// document.addEventListener("keydown", function (event){
//     if (event.ctrlKey){
//         event.preventDefault();
//     }
//     if(event.keyCode == 123){
//         event.preventDefault();
//     }
// });
//
// document.addEventListener('contextmenu',
//     event => event.preventDefault()
// );