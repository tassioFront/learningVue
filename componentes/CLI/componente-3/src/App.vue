<template>
	<div id="app">

		<button @click='componente = "appCitacoes"'> Citações </button>
		<button @click='componente = "appSobre"'> Sobre </button>

		<keep-alive> 
			<component :is="componente"/>
		</keep-alive> 

	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

/* COMPONENTES DINAMICOS

No HTML, estamos usando uma tag do  Vue chamada component, essa tag recebe componente inteiros e renderiza de acordo com o valor interpretado e atribuido a :is='NomeDoComponenteQueSeraRenderizad'
Observe que nesse caso criamos um atributo de nome componente para passar esse valor.

o controle da renderização será feita pelos botões

- Tag keep-alive.

Quando clicamos no botão e tem a renderização do componente dentro tag componente, ocorre a destruição do componente que estava renderizado anteriormente.
Isso pode ser notado no componente appCitacoes. Se clicar em no botão Sobre e depois do botão Citações, irá observar que a citação mudará. Isso porque o template é recriado.

Para prevenir esse comportamento, pode colocar a tag component dentro de keep-alive

<keep-alive> <component :is="componente"/> </keep-alive>

Quando fazemos isso, os componentes que estão dentro de keep-alive ganham os métodos activated() e deactivated(). 
O primeiro é disparado quando o componente é renderizado e o segundo faz o inverso. 

Veja exemplo o componente Citacoes.vue, nele estã esses dois métodos. Se retirar o keep-alive daqui, ele não irão mais funcionar

*/

export default {
	components: { 'appCitacoes': Citacoes, 'appSobre': Sobre },
	data() {
		return { 
			componente: 'appCitacoes'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
		background-color: rgba(0, 0, 0, .5);
		cursor: pointer;
    }
</style>