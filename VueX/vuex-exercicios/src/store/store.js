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
            produtos: []
        },
        // Vamos usar outra proprieda, os getters. QUe nos permite acessar as informações dos dados centralizador e até altera-los antes de enviar para algum componnte
        getters: {
              valorTotal(state) { //observe que ele recebe por padrão o state
                      return state.produtos.map(p => p.quantidade * p.preco)
                        .reduce((total, atual) =>  total + atual, 0)
              }  
        }

})