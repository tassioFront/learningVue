import Vue from 'vue'

export default new Vue( {

    methods: {
        dadosUsuario(usuario) {
            this.$emit('usuarioClicado', usuario)
        },
        monstraUsuario(callback) { 
            this.$on('usuarioClicado', callback)
        }
    }

})