<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <citacao>  <!--tudo criado dentro citacao é mandado para Citacao.vue e colocado dentro da tag slot-->
            <h1>  {{ citacoes[indice].autor }} </h1>
            <p> {{ citacoes[indice].texto }} </p>
            <h6> {{ citacoes[indice].fonte }} </h6>
        </citacao>
        
    </div>
</template>

<script>

    import Citacao from './Citacao.vue'

export default {
    components: { 'citacao': Citacao},
   
    data() {
        return {
            
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3) //pegando valor de indice aleatório para randomizar qual citação aparece
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
