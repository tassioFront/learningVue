<script>
/*A forma mais facil de passar informações de elemto pai para um elemento filho é COMUNICAÇÃO DIRETA.

Onde no elemento filho (exemplo este que vos lê) precisa definir as propriedades a partir da palavra reservada props. Uma das forma é props: ['nomePersonalizadoDaPropriedade]

Depois de definir o nome da propriedade personalizada, é necessário ir no componente pai e referencia a propriedade na tag personalizada (componente)
Ficando
<nomeTagPersonalizada :nomePropriedadeCriada="valorPassadoPeloCOmponentePai" />

No nosso caso, lá em Usuario.vue estará:

<app-usuario-info :nomeUser="nome" />

Observe que a propriedade criada recebe o valor por um v-bind(:). A partir da alteração da propriedade, o Vue automaticamente já sabe que aquele pedaço da aplicação sofreu alteração e precisa ser atualizada.

*/

</script>

<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do user: <strong> {{ nomeUser }}</strong></p> <!--nomeUser é a o valor da propriedade que vem do elemento pai, Usuario.vue-->
    </div>
</template>

<script>
export default {
    props: ['nomeUser'] //definindo a propriedade para ser usada na tag(componente) personalizada
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
