<template>
    <div class="citacao">
        <slot> </slot>
    </div>
</template>

<script>
/*Vamos usar slots para transferir tag de um componente para o outro. 
Observe aqui nesse  componente, na tag slot (tag do vue), será renderizado todo conteúdo de outro componente que criar uma tag personalizada vinda de Citacao.vue

Neste caso,vamos criar uma tag personalizada em Citacoes.vue (considere que já tenha Citacao.vue importado): 

components: { 'citacao': Citacao
}

depois, dentro da tag criada (citacao) vamos colocar o conteúdo que será renderizado aqui, dentro de slot.
Observe que só o conteúdo da tag slot é renderizado.
*/


export default {
    

}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
