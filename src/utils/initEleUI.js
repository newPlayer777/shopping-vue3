import ElementPlus from 'element-plus';
//引入element-plus的样式
import 'element-plus/dist/index.css'

//配置element-plus的国际化
const install = (app) => {
    app.use(ElementPlus, { locale: 'zh-cn' })
}

const EleUICFG = {
    install
}
export default EleUICFG