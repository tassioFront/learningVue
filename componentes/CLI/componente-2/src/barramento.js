import Vue from 'vue'

export default new Vue( {
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade)//emit criando evento personalizado e passando idade como parametro
        },
        quandoIdadeMudar(callback) { //depois que o evento idadeMudou é chamado, essa função é disparada. E recebe como parametro uma callback
            this.$on('idadeMudou', callback)
        }
    }

})

/* event Bus

A ideia aqui é criar uma comunicação entre componentes filhos sem a necessidade de interação com os componetnes pais.
Considerando que em certo momentos é enviável uma comnicção que envolva o componente pai, quando se tem muito componentes no caminho.


com a criação da barramento.js exportando Vue, podemos importar essa instancia para outros componetnes e usar das propriedades de uma instância Vue.

Pra isso vamos importar

import barramento from @/barramento.js
*/
