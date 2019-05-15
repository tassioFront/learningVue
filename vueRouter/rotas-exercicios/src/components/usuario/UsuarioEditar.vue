<template>
    <div class="usuario-editar">
        <h3> Usuário editar</h3>
        <p> Usuário: {{ id }} (via props) / {{ $route.params.id }} (via $route)</p>
         

    </div>
</template>

<script>
export default {
    props: ['id'], //nome da priedade igual ao parametros passado em router.js

}
</script>

<style>

</style>
