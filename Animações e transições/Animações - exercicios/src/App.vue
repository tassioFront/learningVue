<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<b-button variant='primary' class="mb-4" @click="exibir = !exibir" >
			Mensagem
		</b-button>

		<!-- o name da transition pode ser usada no CSS para manipular o momento da transição-->
		<transition name="fade">
			<b-alert variant='info' show v-if='exibir'>{{ msg }}</b-alert>	
		</transition>	


	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Fique de olho na transição',
			exibir: false
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

/*
Para manipular as transições a partir de CSS:
Quando se faz uma transiçao, é possível manipula-la em momentos diferentes da sua entrada e da sua saída:
Entrada: 

.nameDaTransition-enter  - inicio da entrada da transição
.nameDaTransition-enter-active - execução da entrada da transição
.nameDaTransition-enter-to  - final da entrada da transição
*quando não se define um name para a transition, o nome padrão fica: v-enter, v-enter-active, v-enter-to

Saída:

.nameDaTransition-saida  - inicio da saída da transição
.nameDaTransition-saida-active - execução da entrada da transição
.nameDaTransition-saida-to  - final da saída da transição

*/

.fade-enter, .fade-leave-to {
	opacity: 0; /*O elemento começa e termina com opacidade 0*/
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s; /* o decorrer da transição*/
}
</style>
