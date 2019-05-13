<template>
    <nav class="menu">
        <ul>
            <!-- active-class é um propriedade do vue-router, que identifica se a componente está ativo-->
            <!-- exact serve para que o Vue considere apenas o endereço com o /, e nada mais-->
            <router-link to='/' tag='li' active-class='active' exact>
                <a>Inicio</a>
            </router-link>
            <router-link to='/usuario' tag='li' active-class='active'>
                <a> Usuário</a>    
            </router-link>

        </ul>
    </nav>
</template>

<script>
/*router-link
usando router-link para criar link entre componentes,
sem a necessidade de fazer novas requisições ao servidor
*/
export default {

}
</script>

<style>

</style>
