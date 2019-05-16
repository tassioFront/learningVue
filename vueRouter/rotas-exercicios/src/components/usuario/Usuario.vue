<template>
    <div class="usuario">
        
        <h2>Usuario</h2>
        <hr>
        <router-view/>
        <button sucesso @click="irParaInicio"> Voltar</button>

    </div>
</template>

<script>
export default {

    
    methods: {
        irParaInicio() {
            //usando $router.push para alterar de componentes. 

            //this.$router.push('/')  // para fins didáditos
            // this.$router.push( { path:'/'})
            this.$router.push( { name: 'inicio'})
        }
    }
}
</script>

<style>

</style>
