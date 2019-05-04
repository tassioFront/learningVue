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

		<p v-destaque-local:corFonte="'blue'"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>

		<p v-destaque-local:borda.atraso="'3px solid pink'"> Adiciono uma borda depois de 3 segundos devido o modificador </p>
		

	</div>
</template>

<script>
export default {
	
	/*Cada diretiva tem 5 métodos de ciclo de vida, que já são gearados por Vue quando uma diretiva é instancia

	veja https://br.vuejs.org/v2/guide/custom-directive.html
	para consulta das diretivas gerenciadas por Vue
	*/
	//diretiva localmente
	directives: {'destaque-local': {

		bind(el, binding) {
			//el vai manipular o elemento html que tiver a diretivar destaque (digitar v-NomeDaDiretiva na tag)
			//el.style.backgroundColor = 'red'
		
			// com bindign também é possível passar valores para a diretiva

			if (binding.arg === 'corFonte') { //arg aqui se refere ao argumento passado no momento de dispardo da diretiva. Então se olhar no html, verá que lá existe a diretiva corFonte
				el.style.color = binding.value

			} else {
				el.style.background = binding.value //passando o valor que for passado para a diretiva (v-destaque='valor')
			}

			//trabalhando com modificadores: Da mesma forma, quando criamos um, precisamos o js para identificar se existe ou não e o que fazer caso exista

			let atraso = 0

			//com podemos passar diversos modificadores, vue cria um array dele. Portanto, vamos verificar se dentro do array modifiers(criado por Vue) ha 'atraso'
			if (binding.modifiers['atraso']) atraso = 3000

			setInterval(() => {
					el.style.border = binding.value
			}, atraso);
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
