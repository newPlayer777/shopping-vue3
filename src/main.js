import { createApp } from 'vue'
import App from '@/App.vue'
//svg配置代码
import 'virtual:svg-icons-register'

//全局引入组件
import initComps from '@utils/initComp.js';
//配置element-plus
import EleUICFG from '@utils/initEleUI.js';


const app = createApp(App)

// 挂载应用
app.use(EleUICFG).use(initComps).mount('#app');
