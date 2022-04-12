import negociacoes from "./dados.js";
import {criarListaNegociacao, apenasCodigo} from "./funcoes.js";

var listaNegociacao = criarListaNegociacao(negociacoes); 
console.log(listaNegociacao);

var listaAcoes = listaNegociacao.map(apenasCodigo); // Array com o código de todas as negociações, necessário remover duplicatas.
console.log(listaAcoes);

var listaAcoesUnicas = [ ... new Set(listaAcoes)]; // Remove duplicatas
console.log(listaAcoesUnicas);


