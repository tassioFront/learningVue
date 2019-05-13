import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router' //importando o arquivo js para usar as rotas

Vue.config.productionTip = false

new Vue({
  router: router, //registrando na Instancia

  render: h => h(App),
}).$mount('#app')
