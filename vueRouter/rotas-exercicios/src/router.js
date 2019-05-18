import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio' //importando os componentes que serão usados na rotas
import Usuario from './components/usuario/Usuario' //importando os componentes que serão usados na rotas
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router) //registrando a Router

const router = new Router ({
    //mode: 'hash',
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        /*Essa função irá definir se para onde a page será scrollada a partir do seletor informado em UsuarioDetalhe
        a função recebe 3 parametros: to é a nagevação, então colocando to.hash (ele está indo para a hash declarada, no caso em UsuarioDetalhe)
        from é origem
        savedPosition é porque o navegador pode fazer um cache da posição do seletor e scrollar a page automaticamente até lá. 
        */
       if (savedPosition) {
           return savedPosition //caso tiver um cache
       } else if (to.hash) {
           return {selector: to.hash} //caso não tiver o cash ,mas tem o seletor no hash
       } else {
           return {x: 0, y:0} //mantém a page no inicio
       }
    },
    routes: [{
            name: 'inicio', //o bom de dar nome as rotas é que podemos usa-las para navegar. Veja no componente Usuario o exemplo de uso de rota a partir do name
            path: '/', //definindo o caminho da rota
            //component: Inicio //identificando o componente da rota
            components: {
                default: Inicio,
                menu: Menu
            }
        }, {
            path: '/usuario',//definindo o caminho da rota (o :id é sintaxe para adicionar parametros a router)
            //component: Usuario, //identificando o componente da rota
            components: {
                default: Usuario,
                menu: MenuAlt,
                menuAlt: MenuAlt 
            },

            props: true, //com essa propriedade = true, a router passará os parametros por props, permitindo o acesso aos dados

            //podemos também criar rotas aninhadas que tem como pai o componete princial
            children: [
                {path: '', component: UsuarioLista},
                {path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('Antes da rota - UsuarioDetalhe')
                        next()
                    }
                },
                {path: ':id/editar', component: UsuarioEditar, props: true,
                    name: 'editarUsuario'}
            ]
        }, {
            /*É possível redirencionar o usuário para um componente expecifico caso ele digite algo errado na barra de endereço do nagevador. 
            Para isso temos que usar a propriedade redirect. Mostrarei dois exemplos abaixos

            Isso é muito usado para redirecionar o usuário pro famoso erro 404, que é quando a URL não é encontrada no site        
            */
            path: '*', //aqui um caso genérico, qualquer URL que não exista que for digitada pelo user redirecionará o componente Inicio
            redirect: '/'
            
        },{
            path: '/redirecionar', //aqui um caso especifico, onde o user digita a rota redirecionar e Vue redirecionar a view para o componetne usuario
            redirect: '/usuario'
            
        }
    ]

})

export default router

/* Usando eventos inicialização de componentes. 
Esportando toda a router globalmente, como fizemo acima. É possível declarar um evento padrão para todos os componentes,
antes de iniciarem
*/
router.beforeEach((to, from, next) => {
    /*Veja a função beforeEach, que inicia antes de cada router for carregada. Para que ocorre inicialização do componente,
    é mandatório executar a função next  */
    console.log('Antes da rota - global')
    next()
    //ainda no next é possível passa uma rota, objeto, ou boolean.
    //next('./usuario')
    //next(true)
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