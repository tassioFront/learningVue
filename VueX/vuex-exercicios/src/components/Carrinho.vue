<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex' //importando o mapGetters

export default {
    computed: {
        ...mapGetters({ //usando spread para que as prop. computadas tenham acesso ao getter
            total: 'valorTotal'  //atribuindo a função valorTotal (definida em store) a total
        }),
        // total() {
        //     //usando a função definidida na propriedade getters para ter acesso aos valores da store
        //     return this.$store.getters.valorTotal
        // },
        produtos () {
           return this.$store.state.produtos //acessando os dados que estão na store (gerenciada por Vuex)
        }
    }
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

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
