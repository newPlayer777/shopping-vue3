import CTest from '@/components/test.vue'
import CSVG from 'base/SVG.vue'

//获取所有自定义组件
const components = {
    CTest,
    CSVG
}

//定义install方法，接收app作为参数，使用时app.use(xxx)
const install = (app) => {
    Object.keys(components).forEach(key => {
        app.component(key, components[key])
    })
}

const initComps = {
    install
}
//默认导出install方法
export default initComps