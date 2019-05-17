<template>
    <div class="usuario-detalhe">
        <h3> Usuário Detalhe</h3>
        <p> Usuário: {{ id }}</p>
        <router-link tag="button" primario 
        :to="{ name: 'editarUsuario', params: { id }, 
            query: {
                completo: true, 
                lingua: 'pt'
            },
            hash:'#rodape'      
        }"
        
        > 
            <!-- com o hash definido, vamos usar uma função nativa JS para scrollar a page para a hash definida.
            Assim quando o usuário entrar na rota a page será escrolada até o seletor informado.
            Essa função será criada em router         -->



          
                
        <!-- passando dados por query, observe que essas informações aparecerão na url. É possível acessar os dados no componente UsuarioEditar -->
        Editar</router-link>
        <!-- ou apenas :to="`/usuatio/${id}/editar`" -->
        <!-- :to='`/usuario/${$route.params.id}/editar`' -->


        
    </div>
</template>

<script>
export default {
    
    // data() {
    //     return {
    //         id: this.$route.params.id //observe que nesse caso é $ROUTE e não $ROUTER
    //         /*O problema desse método, é quando temos um mesmo componente com parametros de router diferentes.
    //         Como o exemplo e, Usuario que tem usuario/1 e usuario/2 
    //         Por se tratarem do mesmo componente, o Vue não detecta que teve auteração na route e não atualiza os valores interpolados, nesse caso o {{id}}

    //         UMA estratégia para resolver isso, precisamos usa o watch, e faze-lo monitorar o $route através da função     
            
    //         MAS TEMOS UMA alternativa MELHOR:
            
    //         Usando props. 
    //         Onde a route foi instanciado (no caso em router.js) é possível adicionar a propriedade props e defini-la = true
    //         E assim receber o valor da router e interpolar
    //         */
    //     }
    // },
    // watch: {
    //     //função que monitora e salva mudanças de rotas
    //     $route(newRoute, oldRoute) {
    //         this.id = newRoute.params.id
    //     } 
    // },
    
    props: ['id'], //nome da priedade igual ao parametros passado em router.js

}
</script>

<style>
    

</style>
