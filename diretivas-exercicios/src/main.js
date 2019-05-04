import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//criando diretivas globalmente 
Vue.directive('destaque', {
	/*Cada diretiva tem 5 métodos de ciclo de vida, que já são gearados por Vue quando uma diretiva é instancia

	veja https://br.vuejs.org/v2/guide/custom-directive.html
	para consulta das diretivas gerenciadas por Vue
	*/

	bind(el, binding) {
	

		if (binding.arg === 'corFonte') { //arg aqui se refere ao argumento passado no momento de dispardo da diretiva. Então se olhar no html, verá que lá existe a diretiva corFonte
			el.style.color = binding.value

		} else {
			el.style.background = binding.value //passando o valor que for passado para a diretiva (v-destaque='valor')
		}

	
		let atraso = 0

		if (binding.modifiers['atraso']) atraso = 3000

		setInterval(() => {
				el.style.border = binding.value
		}, atraso);
	}
	
})

new Vue({
	render: h => h(App),
}).$mount('#app')
