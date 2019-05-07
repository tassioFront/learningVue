import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//filter global
Vue.filter('inverter', function(valor) {
	return valor.split('').reverse().join('');
})

//mixin global
Vue.mixin({
	/*
	Qualquer propriedade criada no mixin global pode ser acessada por qualquer componente
	 */
	created() {//observe que a partir de mixins é possível usar métodos de ciclo de vida
		console.log('Mixin global')
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
