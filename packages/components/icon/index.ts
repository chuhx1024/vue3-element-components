// 用来整合组件
import _Icon from './src/icon.vue'
import { Plugin } from 'vue'

_Icon.install = (app) => {
    app.component(_Icon.name, _Icon)
}

export default _Icon