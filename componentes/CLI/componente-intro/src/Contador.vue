<script>
//Script para explicação

/*Agora, vamos criar um componente que será usado em outros locais da nossa aplicação.
Pra isso acontecer, precisamos dá um export default, conforme foi visto a baixo. 

Vamos simbolizar um uso local e global de componentes, então vamos importar Contador localmente em Contadores.Vue. E depois colocaremos Contadores globalmente.




para importar Globalmente:

import Contadores from './Contadores.vue'

para criar a tag:

Vue.componente('nomeDoComponente', NomeDoArquivo.vue)
nomeDoComponente será o nome da tag personalizada

NomeDoArquivo.Vue é o componente de origem, no caso Contadores

A partir destes comandos nosso componente estará disponível para ser acessado em qualquer template da aplicação

 */

</script>


<template>
    <div class="contador">
        <span> {{ contador }}</span>
        <button @click='adicionar'> + </button>
        <button @click='subtrair'> - </button>    
    </div>    

    <!--Quando importado, o template é convertido em JS para ser interpretador por VUe renderizado na view-->
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }
 
}
</script>

<style>

.contador span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px;
}

.contador button {
    height: 30px;
    width: 30px;
    /* metade do border-radius faz um botão totalmente esferico*/
    border-radius: 15px;
    background-color: orange;
    margin-left: 10px;
    color: white;
    outline: none;
}

</style>
