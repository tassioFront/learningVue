<template>
	<div id="app">
		<h1>Diretivas</h1>

		<p v-destaque="'red'"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>
		<p v-destaque="cor"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>

		<hr>
		<!--Anatomia das diretivas: vNomeDaDiretiva:argumentos.modificador1.modificador2="'valor'"-->
		<p v-destaque:corFonte="'blue'"> Alterando cor de fundo com diretiva personalizada que manipula o el </p>
		

	</div>
</template>

<script>
export default {
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
