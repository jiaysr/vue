import { createApp } from 'vue'
// import App from './App.vue'
import App from './components/prop/App.vue'
import './index.css'
import  user from './components/user/user.vue'
import ElementPlus from 'element-plus';
import '/node_modules/element-plus/dist/index.css';




const  app=createApp(App)

app.component('myuser',user)
app.mount("#app")