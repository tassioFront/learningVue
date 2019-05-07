import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaLetra', function(valor) {
	let arr = valor.split(' ')

	arr.forEach((palavra, index) => {
		arr[index] = `${palavra}(${palavra.length})`
	});

	/*leo fez:

	return valor.split(' ').map(palavra => ``${palavra}(${palavra.length})`).join(' ')
	 */

	return arr.join(" ");

})

new Vue({
	render: h => h(App),
}).$mount('#app')
