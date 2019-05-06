<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-quando:click="acao"> Executar</button>
		<p v-quando:mouseenter="mouseEnter"> Passe o Mouse </p>
	</div>
</template>

<script>
export default {
	directives: {
		quando: {
			bind(el, binding) {
				/*Vamos tratar os argumentos passados e também os valores,
				 onde arg será o tipo de função passada e
				 value será a função em si. O JS ficará monitorando qualquer ação no el através do addEventListener  */
				const tipo = binding.arg;
				const fn = binding.value;
				el.addEventListener(tipo, fn);
			}
		}
	},
	methods: {
		acao() {
			alert('Diretiva que tem comportamento parecido com v-on')
		},
		mouseEnter() {
			console.log('mouse enter');
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
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
