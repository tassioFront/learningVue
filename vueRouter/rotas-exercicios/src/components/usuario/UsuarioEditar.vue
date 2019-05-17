<template>
    <div class="usuario-editar">
        <h3> Usuário editar</h3>
        <p> Usuário: {{ id }} (via props) / {{ $route.params.id }} (via $route)</p>
        <!-- interpolando dados passados pela query -->
        <p>Completo : {{ $route.query.completo}}</p>
        <p>Lingua : {{ $route.query.lingua}}</p>
         
         <!-- usando hash -->
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>

    </div>
</template>

<script>
export default {
    props: ['id'], //nome da priedade igual ao parametros passado em router.js

}
</script>

<style>
    #rodape {
        margin-top: 1000px; /*Apenas para fins didáticos, para entender o hash*/

    }
</style>
