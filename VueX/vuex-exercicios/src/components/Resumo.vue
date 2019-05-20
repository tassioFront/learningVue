<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex' //importando o mapGetters

export default {
/*Para acessar os valores, existem 3 maneiras de usar os getters, vou deixar duas comentadas e uma única funcionando
*/
    computed: mapGetters ({
            total: 'valorTotal' //dessa forma preservamos o valor que está interpolado. Do contrário teriamos que alterar total por valorTotal
    
    })

    // computed:  //usando mapGetters para deixar o código mais limpo (ele por de baixo dos panos faz como a opção definida abaixo)
    //    (mapGetters: ['valorTotal']) // para usar dessa forma, será necessário alterar a propriedade ques está sendo interpolada no template acima
    

    // computed: { //acessando diretamento a função dentro da propriedade getters
    //     total() {
    //         //usando a função definidida na propriedade getters para ter acesso aos valores da store
    //         return this.$store.getters.valorTotal
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
