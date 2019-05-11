import Vue from 'vue'
import axios from 'axios'

//declarando url base
axios.defaults.baseURL = 'https://curso-vue-2393d.firebaseio.com/'

/*
com o import do axios e a definiçãp da URL base,
vamos associar axios a instancia Vue para que $http tenha acesso global a  funções axios
Para isso vamos cria Vue.use...
*/
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios //associando axios ao $http para acessar globalmente
    }
})