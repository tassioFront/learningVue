import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './plugins/axios' //registrando o axios para instancia-lo


new Vue({
  render: h => h(App),
}).$mount('#app')
