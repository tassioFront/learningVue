<template>
	<div id="app">
		
		<h1>Filtros</h1>
		<hr>
		<p> Pegando uma <strong> string </strong> e tratando com filter: {{ cpf | tratandoCpf }}</p>

		<hr>

		<p> Pegando um <strong> número </strong> e tratando com filter: {{ 42571388827 | tratandoCpf }}</p>

		<hr>

		<p> Usando o filter globalmente : {{ cpf | tratandoCpf | inverter }}</p>

		<hr>

		<p> Input tratado com filter
			<input type="text" :value='cpf | tratandoCpf'>
		</p>
		<br>
		<h1>Mixins</h1>
		<frutas/>
		<hr>	

		<h3> lista que é impordada Localmente, que vem de frutaMixin</h3>
		 <ul>
            <li v-for="fruta in frutas" :key="fruta" > {{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" >
		<p> Observe que os valores das listas são diferentes porque o componente App tem unm array com o mesmo nome que vem do frutaMixin. 
			Lembrando que o componente tem prioridade sobre o mixin
		</p>
		<br>
		<p> Mais um teste com mixin: <strong> {{ this.user}} </strong> vem de userMixin </p>


	</div>
</template>

<script>
/*Aplicando filter localmente
Para issousa-se filter: {
	função(valor) {
		tratamento
	}
}

Já na interpolação, usamos um pipe para usar o nome do filter, conforme mostrado acima
valorInterpolado | filterQueTrataValor | n-FilterQueTraraValor...

cpf | tratandoCpf

MIXINS

Observe que queremos criar uma listra de frutas que vem tanto do componente Frutas.vue quanto do componente local. 
Com isso, vamos criar um mixin que nos permita aproveita um único código evitando duplicidade de código, limpando nossa aplicação. 
É interessante que mesmo vindo da mesma fonte (frutaMixin.js), as duas listas terão instancias diferentes, o que permite manipulação de ambas sem umas afetar a outra.

caso, em data() eu crie um array com o mesmo nome do array que está no mixin, que no caso é frutas. O array do componente de prioridade e substituirá o array do mixin,
 sem afetar os outros componentes que também usam o mesmo mixin
*/
import Fruta from "./Frutas.vue"
import userMixin from "./userMixin"
import frutaMixin from './frutaMixin'

export default {
	mixins: [frutaMixin, userMixin],
	filters: {
		tratandoCpf(valor) {
			let arr = [];

			if (typeof(valor) == typeof('string')) {
				arr = valor.split('');	
			} else {
				arr = `${valor}`.split('');
			}
			arr.splice(3, 0, ".");
			arr.splice(7, 0, ".");
			arr.splice(11, 0, "-");

			return arr.join('');
		}
	},
	components: {
		'frutas': Fruta
	},
	data() {
		return {
			//filter
			cpf: '42571388827',
			frutas: ['morange', 'uva']
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

input {
	font-size: 2rem;
}
</style>
