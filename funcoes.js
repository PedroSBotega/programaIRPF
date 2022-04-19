//criarListaNegociacao recebe o array negociacoes e tranforma em array de objetos, criando as propriedades data, operação, acao, qtd, pmOperacao 
//e total para cada operação realizada

const criarListaNegociacao = (negociacoes) => {

    let listaNegociacao = [];
    let i = 0;
    for (let linha of negociacoes)
    {
        let linhaNegociacao = linha.split('	');
        let negociacao = {       
            posicao: i,                                 //A posição 0 do array recebe um espaço em branco(ao copiar os dados da tabela excel 
            data: linhaNegociacao[1].trim(),            
            operacao: linhaNegociacao[2].trim(),        
            acao: linhaNegociacao[3].trim(),            
            qtd: parseInt(linhaNegociacao[4].trim()),
            pm: parseFloat(linhaNegociacao[5].trim().replace(",",".")),
            total: parseFloat(linhaNegociacao[6].trim().replace(",",".")),
            pmTotal: null,
            qtdTotal: null
        }
        i += 1;
        listaNegociacao.push(negociacao);
    }
    return listaNegociacao
}

//Utilizado para criar uma array apenas com os códigos das ações negociadas

const apenasCodigo = (lista) => {
    return lista.acao
}

//Calcula PM e imputa no pmTotal (declarado como Null na listaNegociacao)

const calcularPM = (listaNegociacao) => {
    let i=0;
    //let vetorPmFim = [];
    for (let linha of listaNegociacao){
        let ii = linha.posicao - 1;
        listaNegociacao[i].pmTotal = linha.pm;                          //PmFim será alterado caso exista alguma operação com a mesma ação nas linhas anteriores
        listaNegociacao[i].qtdTotal = linha.qtd;
        while (ii >= 0){                                                //Percorre o array listaNegociacao em busca da operação mais recente com a mesma ação
            if (linha.operacao == "Compra"){
                if (listaNegociacao[ii].acao == linha.acao) {           //Entrou nessa condição, encontrou a operação mais recente com a mesma ação e encerra a busca
                    let pm = linha.pm;
                    let qtd = linha.qtd;
                    let ultimoPm = listaNegociacao[ii].pmTotal;
                    let ultimoQtd = listaNegociacao[ii].qtdTotal;
                    let calculo = (pm*qtd+ultimoPm*ultimoQtd)/(qtd+ultimoQtd);
                    listaNegociacao[i].pmTotal = parseFloat(calculo.toFixed(2));
                    listaNegociacao[i].qtdTotal = qtd + ultimoQtd;
                    ii=-1;
                }
                else{                                        
                    ii-=1;
                }
            }
            else{                                                       //linha.operação=="Resgate"
                if (listaNegociacao[ii].acao == linha.acao) {           //Entrou nessa condição, encontrou a operação mais recente com a mesma ação e encerra a busca
                    let qtd = linha.qtd;
                    let ultimoPm = listaNegociacao[ii].pmTotal;
                    let ultimoQtd = listaNegociacao[ii].qtdTotal;
                    listaNegociacao[i].qtdTotal = ultimoQtd - qtd;
                    if  (listaNegociacao[i].qtdTotal == 0){
                        listaNegociacao[i].pmTotal = 0
                    }
                    else{
                        listaNegociacao[i].pmTotal = ultimoPm;          
                    }

// ############################# Necessário prever uma operação de venda com quantidade superior a quantidade total da ação em carteira ##############

                    ii=-1;
                }
                else{                                        
                    ii-=1;
                }
            }   
        }
        i+=1;
    }
}








export {criarListaNegociacao, apenasCodigo, calcularPM};
// Próximos passos
// 1- conseguir identificar todos as ações compradas e criar um vetor com elas sem duplicatas
// 2- conseguir calcular o PM 

//Função q filtra o array

/* const listaDeAcoesNegociadas = listaNegociacao.acao.filter(function(ele , pos){
    return listaNegociacao.acao.indexOf(ele) == pos;
}) */








