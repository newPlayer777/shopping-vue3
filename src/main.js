import { createApp } from 'vue'
import App from '@/App.vue'
const title = document.querySelector('.title')
//获取生产环境信息
const envInfo = import.meta.env
//设置标题
title.innerHTML = envInfo.VITE_APP_TITLE

createApp(App).mount('#app')
