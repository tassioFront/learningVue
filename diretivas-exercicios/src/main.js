import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	/*Cada diretiva tem 5 métodos de ciclo de vida, que já são gearados por Vue quando uma diretiva é instancia

	veja https://br.vuejs.org/v2/guide/custom-directive.html
	para consulta das diretivas gerenciadas por Vue
	*/

	bind(el, binding) {
		//el vai manipular o elemento html que tiver a diretivar destaque (digitar v-NomeDaDiretiva na tag)
		//el.style.backgroundColor = 'red'
	
		// com bindign também é possível passar valores para a diretiva

		if (binding.arg === 'corFonte') {
			el.style.color = binding.value
		
		} else {
			el.style.background = binding.value //passando o valor que for passado para a diretiva (v-destaque='valor')

		}
	}
	
})

new Vue({
	render: h => h(App),
}).$mount('#app')
