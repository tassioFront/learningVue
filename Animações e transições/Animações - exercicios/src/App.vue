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

		<hr>

		<h2> Métodos hooks, transições usando JS</h2>

		<b-button variant="primary" @click="exibir2 = !exibir2"> Alternar</b-button>
		
		<!--Para que possíveis class css não influenciem na animação, coloquei :css='false'-->
		<transition 
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"

		>
			<div v-if="exibir2"  class="caixa"></div>
		</transition>

		<hr>
		<h3> Transição de componentes </h3>
		<div class="mb-4">

			<b-button class="mr-2" variant="primary" @click='componenteSelecionado="info"'> Info </b-button>
			<b-button @click='componenteSelecionado="advertencia"'> Advertência </b-button>

		</div>
		
		<transition name="fade" mode="out-in"> 

			<component :is='componenteSelecionado'> </component>

		</transition>


		<hr>
		<h3> Trabalhando com trasition-group </h3>

		<b-button @click='adicionarAluno' class="mb-4"> Add Aluno</b-button>
		
		
		<transition-group name="slide" tag="div">

			<b-list-group v-for="(aluno, index) in alunos" :key="aluno">
				<b-list-group-item @dblclick="removerAluno(index)">{{ aluno}}</b-list-group-item>
			</b-list-group>

		</transition-group>

	</div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';

import alertaAdvertencia from './alertaAdvertencia.vue'
import alertaInfo from './alertaInfo.vue'

export default {
	components: {
		'advertencia': alertaAdvertencia,
		'info': alertaInfo
	},
	data() {
		return {
			msg: 'Fique de olho na transição',
			exibir: false,
			valorAnimacao: 'fade',
			exibir2: true,
			larguraBase: 0,
			componenteSelecionado: 'info',
			alunos: ['Roberto', 'Julia', 'Teresa', 'João']
		}
	},
	methods: {
		animar(el, done, negativoBoolean) {
			
			let contador = 1;
			const temporizador = setInterval(() => {
				let novaLargura = this.larguraBase + 
				(negativoBoolean ? -contador * 10 : contador * 10)
				el.style.width = `${novaLargura}px`
				contador++

				if(contador >30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)

		},
		// em quase todos os hooks de transição passamos el.
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			//para que Vue saiba que o hook enter (ou o leave) acabou, é necessário chamar o método done() (native from Vue)
			this.animar(el, done, false)	
		},
		// afteEnter(el) {

		// },
		// enterCancelled() {

		// },
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			//para que Vue saiba que o hook enter (ou o leave) acabou, é necessário chamar o método done() (native from Vue)
			this.animar(el, done, true)	

		},
		// afteLeave(el) {

		// },
		// leaveCancelled() {

		// }

		//TRANSITION- GROUP (h3)
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2) //esse método randomiza e devolve letras....
			this.alunos.push(s)
		},
		removerAluno(index) {
			this.alunos.splice(index, 1)
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
	position: absolute;
	width: 100%;
}
.slide-enter, .slide-leave-to {
	opacity: 0; /*O elemento começa e termina com opacidade 0*/
}

/*Trabalhando com Hooks*/

.caixa {
	height: 100px;
	width: 300px;
	background-color: lightcoral;
	margin: 30px auto;
}


/* na b-list-group, ocorre saída e entrada de itens com transição slide (class criada)
Mas, como nossa list tem varios elementos, os elementos que nao estão sendo acionado tambpem precisam de alguma transição para melhorar a mudança da view

A class abaixo vai interagir diretamente  em todos (os outros) elementos quando algum elemento da list for adicionado ou removido.

Observe que não é necessário informar o tipo de transform da transition, pois Vue saberá a partir da transition que ocorreu no elemento disparado
 */
.slide-move {
	transition: transform 1s; 
}


</style>
