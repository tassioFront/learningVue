import Vue from 'vue'
import axios from 'axios'

//declarando url base (vou deixar comentado por usei o método create do axios na instancia Vue)
// axios.defaults.baseURL = 'https://curso-vue-2393d.firebaseio.com/'

/*
com o import do axios e a definiçãp da URL base,
vamos associar axios a instancia Vue para que $http tenha acesso global a  funções axios
Para isso vamos cria Vue.use...

Após isso será necessário iniciar essa instância através d main.js, fazendo o registro
*/
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-2393d.firebaseio.com/'
        })//OU  Vue.prototype.$http = axios //associando axios ao $http para acessar globalmente

        //Fazendo interceptors a partir de REQUISIÇÕES que forem feitas usando axios
        Vue.prototype.$http.interceptors.request.use(request => {
            //Podemos, por exemplo, descobrir qual métodos axios está sendo usado, quando este for chamado
            console.log(request.method)
            return request

        }, error => Promise.reject(error))

         //Fazendo interceptors a partir de RESPOSTAS que forem feitas usando axios
         Vue.prototype.$http.interceptors.response.use(res => {

            return res
        }, error => Promise.reject(error))



    }
        
})
