<template>
    <div>
        <h3> lista que vem de Frutas.vue, usando frutaMixin</h3>
        <ul>
            <li v-for="fruta in frutas" :key="fruta" > {{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" >
        
    </div>

</template>

<script>
import frutaMixin from './frutaMixin'

export default {
    //criando mixins
    mixins: [frutaMixin]

}
</script>

<style>

</style>
