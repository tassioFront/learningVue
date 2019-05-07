export default {
    computed: {
        putVirgulaMixin() {
            return this.palavra.replace(/ /g, ',')
        }
    }
        

}