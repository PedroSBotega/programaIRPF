import negociacoes from "./dados.js";
import {criarListaNegociacao, apenasCodigo, calcularPM} from "./funcoes.js";

var listaNegociacao = criarListaNegociacao(negociacoes); 

var listaAcoes = listaNegociacao.map(apenasCodigo); // Array com o código de todas as negociações, necessário remover duplicatas.

var listaAcoesUnicas = [ ... new Set(listaAcoes)]; // Remove duplicatas



var teste = calcularPM(listaNegociacao);
console.log(listaNegociacao);
//console.log(teste);