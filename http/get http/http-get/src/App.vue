<template>
  <div id="app">
		<ul>
			<li v-for='(usuario, id) in usuarios' :key="id">
				<strong> Nome: </strong> {{ usuario.nome }} <br>
				<strong> E-mail: </strong> {{ usuario.email }} <br>
				{{ id }}
			</li>
		</ul>

    <button @click="getUsers"> Get It</button>
  </div>
</template>

<script>

export default {
 data() {
   return {
     usuarios: []
     
   }
 },
 methods: {
   getUsers() {
      this.$http('usuarios.json').then(res => {
          this.usuarios = res.data
      })
   },
   
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
}
</style>
