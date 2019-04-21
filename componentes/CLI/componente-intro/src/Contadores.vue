<template>
    <div class="contadores">
        <h1> Contadores</h1>
        <app-contador v-for="c in 5" :key="c"> </app-contador>
    </div>
</template>

<script>
//importando localmente Contador. O que significa que apenas Contadores tem acesso ao componente Contador
import Contador from './Contador.vue'

export default {
    components: {'app-contador': Contador} //dizendo que usaremos o template de Contador como app-contador
}

/*Agora, esse componente será importado globalmente por main, permitindo que possa ser usado em qualquer local da aplicação.*/
</script>

<style>

</style>
