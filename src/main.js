import Vue from 'vue'
import App from './App.vue'
//引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
//引入codemirror
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//全部导入
import _ from 'lodash'
Vue.prototype._ = _  //全部导入的挂载方式
Vue.use(ElementUI);

Vue.use(VueCodeMirror)
Vue.use(iView)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
