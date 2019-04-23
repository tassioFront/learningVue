<script>
/*A forma mais facil de passar informações do COMPONENTE PAI para um elemento filho é através de PROPS.

Onde no elemento filho (exemplo este que vos lê) precisa definir as propriedades a partir da palavra reservada props. Uma das forma é props: ['nomePersonalizadoDaPropriedade]

Depois de definir o nome da propriedade personalizada, é necessário ir no componente pai e referencia a propriedade na tag personalizada (componente)
Ficando
<nomeTagPersonalizada :nomePropriedadeCriada="valorPassadoPeloCOmponentePai" />

No nosso caso, lá em Usuario.vue estará:

<app-usuario-info :nomeUser="nome" />

Observe que a propriedade criada recebe o valor por um v-bind(:). A partir da alteração da propriedade, o Vue automaticamente já sabe que aquele pedaço da aplicação sofreu alteração e precisa ser atualizada.

*/

/* Já a comunicação de filho pra pai deve ser feita através de eventos. De forma Indireta.
Usaremos como exemplo o methods reiniciaNome.

Outra forma é usando uma callback, onde temos que criar uma props do tipo function. Faremos a reiniciaFn
 */

</script>

<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do user: <strong> {{ inverteNome() }}</strong></p> 
        <button @click='reiniciaNome' > Reiniciar Nome com '$emit'</button>
        <button @click='reiniciaFn()' > Reiniciar Nome (callback)  </button>
    </div>
</template>

<script>
export default {
    props: {
        nomeUser: {
            type: String, //fazendo validação da propriedade com Vue. 
            //required: true, //com o required, é obrigatório o uso da propriedade ao chamar a tag personalizada
            default: 'Sem nome' //caso o user não por value
        },
        reiniciaFn: Function //props do tipo function (callback). A função reiniciaFn está recebendo uma função como paramentro em Usuario.vue
    
    }, //definindo a propriedade para ser usada na tag(componente) personalizada
    
    methods: {
        inverteNome() {
            return this.nomeUser.split('').reverse().join('');
        },
        reiniciaNome() {
            /* Esse methodo alterará uma propriedade  do componente filho (UsuarioInfo.vue), mas que alterará também a Usuario.vue.
            Para isso vamos usar o evento reservado $emit, que permite que façamos um evento personalizado e este seja chamado na tag personalizada */
            this.nome = 'Pedro' //alterando a propriedade que pertence ao pai
            this.$emit('mudaNome', this.nome)

            /*this.$emit ('nomeDoEventoPersonalizado', this.AtributoQueSeraPassadoComoParametro)
            O primeiro paramentro é criado por nós, e esse nome será usado dentro da tag fazendo um @ para que Vue observe o evento. Então note que mudaNome agora é um evento como click, input e etc.
            Podendo usar a escrita @mudaNome assim como @click
            O segundo parametro será armazenada dentro de $event e recebido pela tag personalizada.

            Para demonstrar, vá em Usuario.vue e veja a tag personalizada do componente UsuarioInfo
            */
        }
    }
    
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
