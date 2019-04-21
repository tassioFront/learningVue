import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue' //importando o nosso componente

Vue.config.productionTip = false

Vue.component('app-contador', Contador)//criando tag personalizada e colocando o componente de referencia. 
//A partir destes comandos nosso componente estará disponível para ser acessado em qualquer template da aplicação

new Vue({
  render: h => h(App), //renderizando a tag App na view pelo render
}).$mount('#app') //associando html #app com Vue instance
