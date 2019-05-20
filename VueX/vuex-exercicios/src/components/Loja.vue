<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
        }
    },
    methods: {
        ...mapMutations(['adicionarProduto']), //observe que para usar mapMutations adicionamos em methods, diferente de getters que é computed
        //é necessário usar o spread + o nome da função dentro de mutations que será usada aqui em methods, umas vez que temos mais de um método dentro de methods
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            
            // this.$store.state.produtos.push(produto) //como seria para auterar diretamento no estado
            //usando mutations, para alterar valores no eestado:
            // this.$store.commit('adicionar', produto) //uma das formas
            this.adicionarProduto(produto) //usando mapMutations

        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
