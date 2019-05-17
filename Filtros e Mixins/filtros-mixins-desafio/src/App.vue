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

		<hr>

		<ul >
			<li v-for= "consume in arra" :key="consume.andar" :class="putAndar(consume.andar)" > {{ consume.nome }} {{ consume.andar }}</li>
			
		</ul>
	</div>
</template>

<script>
import fraseMixin from './fraseMixin'
export default {
	data() {
		return {
			palavra: 'Trocando os espaços vazios por vírgula',
			palavra1: 'Tássio é Dev Vue',
			arra: [
				{nome: 'te', andar: 1}, {nome: 'ti', andar: 2}
				
			],
			
			
			aplicarC1: false
		}
	},
	methods: {
		 putAndar(andar) {
            andar == 1 ? this.aplicarC1 = true : this.aplicarC1 = false
            return {
                c1: this.aplicarC1, //aqui retornamos a class c1 e c2 com os valores (booleanos) de aplicar c1. Deixando dinamico a interação da class
                c2: !this.aplicarC1
            }
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

.c1 {
	background: green;
	background-color: green;	
	}

.c2 {
	background: coral;
	background-color: coral;	
	}
</style>
