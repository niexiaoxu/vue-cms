// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import AppHeader from './Header'
// import ListMenu from './ListMenu'
// import PopWindow from './components/PopWindow'
// import PopContextMenu from './components/PopContextMenu'

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 加入国际化
import i18n from './commons/i18n/i18n'

// 应用组件
Vue.use(ElementUI)
Vue.config.productionTip = false

// Vue.component('app-header', AppHeader)
// Vue.component('app-menu-list', ListMenu)
// Vue.component('pop-window', PopWindow)
// Vue.component('context-menu', PopContextMenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
