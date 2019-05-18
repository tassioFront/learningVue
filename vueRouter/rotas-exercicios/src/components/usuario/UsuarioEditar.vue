<template>
    <div class="usuario-editar">
        <h3> Usuário editar</h3>
        <p> Usuário: {{ id }} (via props) / {{ $route.params.id }} (via $route)</p>
        <!-- interpolando dados passados pela query -->
        <p>Completo : {{ $route.query.completo}}</p>
        <p>Lingua : {{ $route.query.lingua}}</p>
        <hr>

        <button primario @click="confirmou = true"> Confirmar </button>
         
         <!-- usando hash -->
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>

    </div>
</template>

<script>
export default {
    props: ['id'], //nome da priedade igual ao parametros passado em router.js
    data() {
        return {
            confirmou: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if(this.confirmou) {
            next()
        } else if (confirm('Tem certeza?')) {
            next()
        } else {
            next(false)
        }

    }
}
</script>

<style>
    #rodape {
        margin-top: 1000px; /*Apenas para fins didáticos, para entender o hash*/

    }
</style>
