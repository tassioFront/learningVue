<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- O menu vai alternar de acordo com o componente ativio, graças ao vue router nomeado -->
		<router-view name="menu" />
		<router-view name="menuAlt"/>
		<router-view />
	</div>
</template>

<script>

export default {

	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
