<template>
	<div id="app">
		<h1>Diretivas</h1>

		<p v-destaque="'red'"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>
		<p v-destaque="cor"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>

		<hr>
		<!--Anatomia das diretivas: vNomeDaDiretiva:argumentos.modificador1.modificador2="'valor'"-->
		<p v-destaque:corFonte="'blue'"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>

		<p v-destaque:borda.atraso="'3px solid pink'"> Adiciono uma borda depois de 3 segundos devido o modificador </p>
		
		<hr>

		<p v-destaque-local:corFonte.atraso="'blue'"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>

		<p v-destaque-local:atraso.alternar="cor"> Adiciono uma borda depois de 3 segundos devido o modificador </p>
		
		<hr>

		<p v-destaque-local:corFonte.atraso.alternar="{cor1: 'green', cor2: 'red', atraso:'2000', intervalo: 200}"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>
		<p v-destaque-local:atraso.alternar="{cor1: 'green', atraso:'5000'}"> Adiciono uma borda depois de 3 segundos devido o modificador </p>
		

	</div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
	
	/*Cada diretiva tem 5 métodos de ciclo de vida, que já são gearados por Vue quando uma diretiva é instancia

	veja https://br.vuejs.org/v2/guide/custom-directive.html
	para consulta das diretivas gerenciadas por Vue
	*/

	//diretiva localmente
	directives: {'destaque-local': {

			bind(el, binding) {
				
				let aplicarCor = cor => {

					if (binding.arg === 'corFonte') { 
						el.style.color = cor
					} else {
						el.style.color = cor
					}
				}
				
							
				let atraso = 0
				if (binding.modifiers['atraso']) atraso = 3000 //verificando se tem o modifier atraso

				const cor1 = binding.value.cor1 //forma de acessar um valor de objeto 
				const cor2 = binding.value.cor2
				let corAtual = cor1

				setInterval(() => {

					if(binding.modifiers['alternar']) {

						setTimeout(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo)

					} else {

						aplicarCor(binding.value.cor1)

					}

				}, binding.value.atraso);
				
				

			}
		}



	},

	data() {
		return {
			cor: 'green'
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
</style>
