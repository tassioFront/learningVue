<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p> Nome é {{ nome }} </p>
        <p> idade {{ idade }}</p>
        <button @click='alteraNome'> Altera Nome</button>
        <hr>
        <div class="componentes">

            <!--Aqui vamos fazer uma relação direta De componente pai para filho através de props-->            
            <app-usuario-info
                :nomeUser="nome" 
                @mudaNome='nome = $event'
                :idadeUser='idade'
                :reiniciaFn = "reiniciarNome"
                 /> <!--Evento personalizado que foi criado em UsuarioInfo. Esse evento é chamado ao clicar no botão reiniciar que fica no componente filho-->
            <app-usuario-editar
                :idadeUser='idade'/>
                   <!--@idadeMudou='idade = $event'   comentei para usarmos o evento emitado ($emit) para barramento-->
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default { //AppUsuarioInfo: AppUsuarioInfo
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: "Pedro",
            idade: 21
        }
    },
    methods: {
        alteraNome() {
            this.nome ='Ana'
        },
        reiniciarNome() { //essa função será passada como parametro para a reiniciaFn 
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
