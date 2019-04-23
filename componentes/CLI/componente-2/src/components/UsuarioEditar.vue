<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p> Idade {{ idadeUser }}</p>
        <button @click="alteraIdade"> Alterando a idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

/*Com o barramento (event bus) trazendo uma instancia Vue. podemos usa-la pra transferencia de dados entre os componetnes filhos.
Faremos um exemplo no métodos alteraIdade()*/ 

export default {
    props: ['idadeUser'],
    methods: {
        alteraIdade() {
            this.idadeUser = 34
            barramento.alterarIdade(this.idadeUser) //por se tratar de uma instancia Vue, podemos usar direto barramento.$emit...agora quem tem barramento.js importado pode observar o evento criado idadeMudou. Veja em UsuarioInfo
            // this.$emit('idadeMudou', 34)
        }
    }    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
