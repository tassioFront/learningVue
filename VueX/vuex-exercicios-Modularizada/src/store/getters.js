export const getNome = state => state.nome
export const getNomeCompleto = state => state.nome + state.sobrenome

/*
Aqui temos um exemplo de como usar getters especificios sem precisar criar modulos de estado.

para usa-lo é necessário importar em store:

import * as getters from './getters'

*/