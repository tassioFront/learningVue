import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio' //importando os componentes que serão usados na rotas
import Usuario from './components/usuario/Usuario' //importando os componentes que serão usados na rotas

Vue.use(Router) //registrando a Router

export default new Router ({
    routes: [{
        path: '/', //definindo o caminho da rota
        component: Inicio //identificando o componente da rota
    }, {
        path: '/usuario',//definindo o caminho da rota
        component: Usuario //identificando o componente da rota
    }]

})