<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

		<b-alert show dismissible v-for="mensagem in mensagens"
			:key='mensagem.texto'
			:variant="mensagem.tipo">
		{{ mensagem.texto }}</b-alert>

		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size='lg'
					v-model="usuario.nome"
					placeholder="Informe o Nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size='lg'
					v-model="usuario.email"
					placeholder="Informe o e-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" variant="primary"> $http.post || $http.patch </b-button>
			<b-button class="ml-2" @click="obterUsuarios" variant="success"> $http.get </b-button>

		</b-card>

		<hr>

		<b-list-group>
			<b-list-group-item v-for='(usuario, id) in usuarios' :key="id">
				<strong> Nome: </strong> {{ usuario.nome }} <br>
				<strong> E-mail: </strong> {{ usuario.email }} <br>
				{{ id }} <br>
				<b-button @click="carregar(id)" variant="warning"> $http.upload </b-button>
				<b-button class="ml-2" @click="excluir(id)" variant="danger"> $http.delete </b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import axios from 'axios' //para acessar o axios localmente. Neste caso não é necessário usar this.$http, mas sim axios.
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario = '',
			this.id = null,
			this.mensagens = []
		},
		carregar(id) {
			//o fato de atribuirmos o id passado na função ao this.id, dará a possibildiade de identificarmos se a estamos salvando um novo user ou alterando um que já esta no banco
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id) {
			//para deletar algo no banco, veja sintaxe
			this.$http.delete(`usuarios/${id}.json`)
				.then(() => this.limpar())
				.catch(err => this.mensagens.push({
					texto: 'Deu problema',
					tipo: 'danger'
				}))
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalURL = this.id ? `/${this.id}.json` : '.json'

			let texto = this.id ? 'Dados atualizados' : 'Dados cadastrados'
			
			this.$http[metodo](`/usuarios${finalURL}`, this.usuario).
				then(() => {
					this.limpar()
					this.mensagens.push({
							texto, tipo: 'success'
					})
					
				})

			//método post usando axios. Veza a sintaxe:
			//this.$http.post('NomeDaColeção.json', this.DadoEnviado).then(resposta => { tratamento caso tenha resposta positiva})
			// this.$http.post('usuarios.json', this.usuario).
			// 	then( () => {
			// 		this.limpar()
			// 	})
		},
		obterUsuarios() {
			this.$http.get('usuarios.json').then(res => {
					this.usuarios = res.data
				
				})

		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
