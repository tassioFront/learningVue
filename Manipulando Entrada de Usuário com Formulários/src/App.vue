<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password"  v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number"  v-model.number="usuario.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox"
						 value="reproduzivel" v-model="caracteristicas" > Reproduzível</span>
					<span><input type="checkbox"
						 value="intermitente" v-model="caracteristicas" > Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span>
					<span class="mr-4"><input type="radio" value="Mobile" v-model="produto"> Mobile</span>
					<span><input type="radio" value="Outro" v-model="produto"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
						<option
							v-for="prioridade in prioridades"
							:key="prioridade.codigo"
							> 
								
								{{ prioridade.codigo }} - {{ prioridade.label}}

						</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?" >
					<Escolha v-model="escolha" />
				</Rotulo>
				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>


			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span> {{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span >{{ usuario.senha }}</span >
				</Rotulo>
				<Rotulo nome="Idade">
					<span> {{ usuario.idade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span style="white-space: pre;"> {{ mensagem }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções" >
					<span> 
						<ul> 
							<li v-for="carac in caracteristicas" :key="carac"> 
								{{ carac }}
							</li>
						</ul>

					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span> {{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span> {{ prioridade }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span> {{ escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
/*Modificadores de input:
lazy: atualiza o input que está com data biding apenas quando perdemos o foco do input, veja a label email para conferir .

trim: tira os espaços vazios antes e depois da string. Também coloquei na label email, mas não é necessa´rio combinar com lazy para funcionar.

number: converte um string com valor numérico em number. Usei no campo idade. Observer que mesmo sendo input do tipo number, ao alterarmos o valor, o input transforma o número em strign.
Mas, com o modificador number, o Vue usa um parseFloat por debaixo dos panos e converte a string em number.

------------
Checkbox

Como checkbox permite multiplas seleções, vamos criar um propriedade de nome caracteristicas e associa-la por data biding no check box desse form.

Para cada opção do checkbox, é necessário fazer a associação. Nesse caso vamos usar v-model para refletir o valor na view.
Depois, na view, faremos um v-for para mostrar ao usuário quais valores ele selecionou. Observe que o Vue usurá o value definido em cada checkbox para refletir isso na view.

Quanto radio

Funciona muito parecido com checkbox quanto ao uso do value para refletir na view. Mas, quando associamos a v-model, em cada opção do radio, o Vue já entende que aquelas input[radio] são todos do mesmo grupos.
logo apenas um pode ser selecionado.

*/

import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data() {
		return {
			mensagem: '',
			caracteristicas: [],
			prioridade: '1 - Baixa' ,
			prioridades: [
				{codigo: 1, label: 'Baixa'},
				{codigo: 2, label: 'Moderada'},
				{codigo: 3, label: 'Alta'}
			],
			produto: 'web',
			usuario: {
				email:'',
				senha:'',
				idade:23

			},
			escolha: true,
			enviado: false
				
		}
	},
	methods: {
		enviar() {
			this.enviado = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
