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

		<h3> lista que vem Localmente</h3>
		 <ul>
            <li v-for="fruta in frutas" :key="fruta" > {{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" >


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

Vamos duplicar a lu de frutas. Onde uma vem do componente Frutas.vue e outra está localmente

*/
import Fruta from "./Frutas.vue"
export default {
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
		
			//mixins
            fruta: '',
            frutas: ['laranja', 'melancia', 'abacaxi']
        }
	},
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = '';
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
