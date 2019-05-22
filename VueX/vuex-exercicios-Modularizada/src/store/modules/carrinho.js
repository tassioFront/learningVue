export default {
     /*Observe que tudo que está em state pertence unicamente a este estado
    
    Então para acessar a propriedades dentro do state:

    this.$store.state.carrinho.produtos

    namespaced, como acessar: 

    ...mapActions('carrinho', ['adicionarProduto']),

    seria um exemplo de como acessar o métodos de carrinho.js,
    agora que é namespaced

    ('nomeDoModulo', ['nomeDoMetodo'])

    
    */
    namespaced: true, //uma forma de garantir que os modulos de estado não terão métodos com nome iguais (isso gera conflito)
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}