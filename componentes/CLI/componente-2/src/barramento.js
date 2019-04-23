import Vue from 'vue'

export default new Vue( {
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeMudou', callback)
        }
    }

})

/* event Bus

A ideia aqui é criar uma comunicação entre componentes filhos sem a necessidade de interação com os componetnes pais.
Considerando que em certo momentos é enviável uma comnicção que envolva o componente pai, quando se tem muito componentes no caminho.


com a criação da barramento.js exportando Vue, podemos importar essa instancia para outros componetnes e usar das propriedades de uma instância Vue.

Pra isso vamos importar

import barrramento from @/barramento.js
*/
