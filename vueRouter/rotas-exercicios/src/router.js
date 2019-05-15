import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio' //importando os componentes que serão usados na rotas
import Usuario from './components/usuario/Usuario' //importando os componentes que serão usados na rotas

import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router) //registrando a Router

export default new Router ({
    //mode: 'hash',
   
    mode: 'history',
    routes: [{
        name: 'inicio', //o bom de dar nome as rotas é que podemos usa-las para navegar. Veja no componente Usuario o exemplo de uso de rota a partir do name
        path: '/', //definindo o caminho da rota
        component: Inicio //identificando o componente da rota
    }, {
        path: '/usuario',//definindo o caminho da rota (o :id é sintaxe para adicionar parametros a router)
        component: Usuario, //identificando o componente da rota
        props: true, //com essa propriedade = true, a router passará os parametros por props, permitindo o acesso aos dados

        //podemos também criar rotas aninhadas que tem como pai o componete princial
        children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true },
            {path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario'}
        ]
    }]

})

/*mode hash e history

existem dois modos para usar o router:

hash: esse modo não envia o caminho para o sevidor quando é feito uma composição.
o que é enviado para o servidor é:
localhost:8080 

Mas com a requisoção feita, o router - usandp JS (com Vue)- coloca o /#/ que a partir disso carrega o componente conforme o caminho configurado
ex: localhost:8080/#/usuario

history: já o history faz a requisição ao servidor usando todo o endereço (exceto o #):
localhost:8080/usuario

Mas cno modo history, é necessário configurar o sevidor
 

*/