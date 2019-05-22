<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    /* Aqui vamos usar o v-model para alterar o valor reativamente de outro componente (Loja)

    Repare que vamos usar um propriedade computada e seu métodos (get e set) nativos

     */
        computed: {
            quantidade: { //repare que dentro da propriedade quantidade tem o método get e set (nativamente)
               
                get() {
                    return this.$store.state.quantidade
                },
                set (valor) {
                    this.$store.commit('setQuantidade', valor) //alterando o valor na store
                }
            },    
            preco: { //repare que dentro da propriedade preco tem o método get e set (nativamente)
            
                get() {
                    return this.$store.state.preco
                },
                set (valor) {
                    this.$store.commit('setPreco', valor) //alterando o valor na store
                }
            
            }
        }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
