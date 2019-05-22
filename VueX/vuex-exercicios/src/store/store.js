import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
Depois de registrar o Vuex na instância Vue, podemos usar de sua propriedade. 

Para fazer esse acesso, vamos instanciar Vuex chamando umas função contrutura Store diretamente na isntancia (new Vuex.Store)

lembre de registrar e importar o arquivo Store.js em main.js para ter acesso nos componentes,
mas para exemplo, veja a sintaxe para acessar produtos:
        this.$store.state.produto (this.palavraReservada.propriedadeState.dados)   

e para alterar o array:
        this.$store.state.produto.push(this.dado)
*/

export default new Vuex.Store ({
    /*
    Para deixarmos os dados centralizados e podermos usar do poder do estado centralizado do Vuex,
    temos que passar o conteúdo que será usado pelos componentes dentro de  state (propriedade do Vuex)

    em propriedades computadas temos uma função que exemplifica o o acesso aos dados dentro de state
     */
        state: { //agora, quando algum componente fizer alguma alteração/requisição em produtos, os outros componentes que dependem de produtos também serão atualizados.
            produtos: [],

           /*  Usando exemplo de v-model em diferentes componentes, que um alterando a store, atualiza o outro.
            Vamos usar propriedades computados com métodos get e set, um recurso não tao usado mas que nesse caso se aplica. 
                
            Os métodos para editar essas propriedades estão em mutations*/

                quantidade: 0, //usaremos essas duas propriedades em Parametros e em Loja
                preco: 0
        },
        // Vamos usar outra proprieda, os getters. QUe nos permite acessar as informações dos dados centralizador e até altera-los antes de enviar para algum componnte
        getters: {
              valorTotal(state) { //observe que ele recebe por padrão o state
                      return state.produtos.map(p => p.quantidade * p.preco)
                        .reduce((total, atual) =>  total + atual, 0)
              }  
        },
        //trabalhando com mutations, que equivalem a setters, pois alteram os valores centralizados (estado centralizado)

        /*O único papel das mutations e de alterar (commit) as propriedades do estado. 
        Isso significa que qualquer regra referente ao negócio, que sua execução alterar o estado, deve ser solicitado pelas actions. 
        E essas (actions) por sí só enviam a solicitação para o mutations executar. 
        
        Então, no caso de uma alteração que tenha uma Promise, toda a aquicição e resultado da requisiçao a Promise é programado nas actions, que faz informa as mutationss
      
        O sentido é: componenteSolicitante -- dispach > Actions -- commit > Mutations -- alteração do Estado > Store 
        */
        mutations: {
                adicionarProduto(state, produto) { //como padrão as funções dentro de mutations recebem state, e podem, alem deste, receber mais apenas um parametro (payLoad)
                //portanto, não suporta mais de 2 parametros na função
                        state.produtos.push(produto)
                },

                //Os próximos métodos são para exemplificar o uso do v-model em diferentes componetnes
                setQuantidade(state, payload) {
                        state.quantidade = payload //receberá o valor que vier do componente
                },
                setPreco(state, payload) {
                        state.preco = payload
                }

        },
        //criando actions para salvar as regras de negócio, aqui vamos simular uma sincronização assicroma usando setTimeOut
        actions: {
                adicionarProdutoActions(context, produto) {
                        setTimeout(() => {
                                context.commit('adicionarProduto', produto) //fazendo commit para pedir que mutations altere o estado
                        }, 1000)
                }
                
        }

})