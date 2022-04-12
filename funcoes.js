//criarListaNegociacao recebe o array negociacoes e tranforma em array de objetos, criando as propriedades data, operação, acao, qtd, pmOperacao 
//e total para cada operação realizada

const criarListaNegociacao = (negociacoes) => {

    let listaNegociacao = [];

    for (let linha of negociacoes)
    {
        let linhaNegociacao = linha.split('	');
        let negociacao = {                              //A posição 0 do array recebe um espaço em branco(ao copiar os dados da tabela excel 
            data: linhaNegociacao[1].trim(),            //esse 'espaço' indica a divisão entre colunas), portanto utiliza-se da posição 1 em diante
            operacao: linhaNegociacao[2].trim(),        //Os dados copiados diretamente do excel tinham alguns espaços em branco nas células
            acao: linhaNegociacao[3].trim(),            //para reduzir ao máximo as operaçoes previas no excel, utiliza-se a função .trim()
            qtd: linhaNegociacao[4].trim(),
            pmOperacao: linhaNegociacao[5].trim(),
            total: linhaNegociacao[6].trim()
        }
        listaNegociacao.push(negociacao);
    }
    return listaNegociacao
}

// Próximos passos
// 1- conseguir identificar todos as ações compradas e criar um vetor com elas sem duplicatas
// 2- conseguir calcular o PM 

//Função q filtra o array

/* const listaDeAcoesNegociadas = listaNegociacao.acao.filter(function(ele , pos){
    return listaNegociacao.acao.indexOf(ele) == pos;
}) */








export default criarListaNegociacao