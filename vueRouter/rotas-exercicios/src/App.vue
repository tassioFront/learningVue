<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- O menu vai alternar de acordo com o componente ativio, graças ao vue router nomeado -->
		<router-view name="menu" />
<!-- 
		Vamos usar o transition e o animate.css (que foi importado em index) para criar animações nas transições entre componenter
		Para usar o animate é necessário por o animated antes da class(consulte o gitHub do animate.css) -->
		<transition mode="out-in"
			enter-active-class="animated jello"
			leave-active-class="animated heartBeat">
					
					<router-view  />

		</transition>
						<router-view name="menuAlt"/>
		
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
