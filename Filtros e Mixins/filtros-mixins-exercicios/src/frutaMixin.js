export default {
    /*
    Veja que os dados abaixo serão usado para criar lista em Frutas.vue e em App. 
    O mixin nos permite deixar esse código isolado aqui, sem necessidade de coloca-lo em nenhum dos componentes que o usarão.
    */
    data() {
        return {
            fruta: '',
            frutas: ['laranja', 'melancia', 'abacaxi']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    },
    created() {//método de ciclo de vida
        console.log('Created - frutaMixin.js')
    }


}