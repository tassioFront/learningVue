<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>	{{ palavra | putVirgula }} </p>
		<p>	{{ palavra | putVirgulaLeo }} </p>
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>	{{ palavra1 | contaLetra }} </p>
		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>	Via mixin: {{ putVirgulaMixin }} </p>
	</div>
</template>

<script>
import fraseMixin from './fraseMixin'
export default {
	data() {
		return {
			palavra: 'Trocando os espaços vazios por vírgula',
			palavra1: 'Tássio é Dev Vue'
		}
	},
	filters: {
		putVirgula(valor) {
			let arr = valor.split('')
	
			arr.forEach((letra, index) => {
				letra === ' ' ? arr[index] = ',' : letra = letra;
			});

			return arr.join('')

		},
		putVirgulaLeo(valor) {
			return valor.replace(/ /g, ',')
		}
	},
	mixins: [fraseMixin]
	
	
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
</style>
