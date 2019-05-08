<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<b-button variant='primary' class="mb-4" @click="exibir = !exibir" >
			Mensagem
		</b-button>

		<!-- o name da transition pode ser usada no CSS para manipular o momento da transição-->
		<transition name="fade">
			<b-alert variant='info' show v-if='exibir'>{{ msg }}</b-alert>	
		</transition>	

		<!-- BOM SABER: se adicionar a propriedade appear na tag transition, ele usará a transição associada a tag no momento que o componente for carregado-->
		<!--Ficaria trnasition name="slide appear-->
		<transition name="slide">
			<b-alert variant='info' show v-if='exibir'>{{ msg }}</b-alert>	
		</transition>

		<hr>
		<h3> Usando v-model e v-bind para alterar a transição</h3>

		<b-select v-model="valorAnimacao" class="mb-4">
			<option value="fade"> Fade</option>
			<option value="slide"> Slide</option>
		</b-select>

		<transition :name="valorAnimacao">
			<b-alert variant='info' show v-if='exibir'>{{ msg }}</b-alert>	
		</transition>

		<hr>
		<h3> Transição entre elementos (observe que a transição é feita de forma harmoniosa, devido o mode e key)</h3>

		<b-select v-model="valorAnimacao" class="mb-4">
			<option value="fade"> Fade</option>
			<option value="slide"> Slide</option>
		</b-select>
		<!--O mode define o sentido da animação. out-in = primeiro saí o elemento, depois entra o outro...in-out é o contrário-->
		<transition :name="valorAnimacao" mode="out-in">
			<b-alert variant='info' show v-if='exibir' key="informacao">{{ msg }}</b-alert>
			<b-alert variant='warning' show v-else key='aviso'>{{ msg }}</b-alert>	
		</transition>


	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Fique de olho na transição',
			exibir: false,
			valorAnimacao: 'fade'
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
	font-size: 1.5rem;
}

/*
Para manipular as transições a partir de CSS:
Quando se faz uma transiçao, é possível manipula-la em momentos diferentes da sua entrada e da sua saída:
Entrada: 

.nameDaTransition-enter  - inicio da entrada da transição
.nameDaTransition-enter-active - execução da entrada da transição
.nameDaTransition-enter-to  - final da entrada da transição
*quando não se define um name para a transition, o nome padrão fica: v-enter, v-enter-active, v-enter-to

Saída:

.nameDaTransition-saida  - inicio da saída da transição
.nameDaTransition-saida-active - execução da entrada da transição
.nameDaTransition-saida-to  - final da saída da transição

*/

.fade-enter, .fade-leave-to {
	opacity: 0; /*O elemento começa e termina com opacidade 0*/
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s; /* o decorrer da transição*/
}

@keyframes slide-in {
	from { transform: translateY(40px);}
	to { transform: translateY(0);}
}

@keyframes slide-out {
	from { transform: translateY(0);}
	to { transform: translateY(40px);}
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
	/*BUG para animações e transições com tempos diferentes:
	
	Quando se trabalha com tempos diferentes (por exemplo, se no trasition fosse 6s), acontece um bug porque a transição continua depois que a animação acabou.
	Para resolver isso, é necessário add na tag transition  o type="nomeDaTransicaoComMenoTempo"
	Impedndo o bug

	*/
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s; 
}
.slide-enter, .slide-leave-to {
	opacity: 0; /*O elemento começa e termina com opacidade 0*/
}

</style>
