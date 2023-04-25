/*Selecionando elementos a serem manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const status = formulario.querySelector("#status");
const botaolocalizar = formulario.querySelector("#localizar-cep");

 /* Monitorar o movimento de acionamento do botão de localizar cep */
 botaolocalizar.addEventListener("click", function(event){
    event.preventDefault();

    // Pegar o cep digitado
    let cep = campoCep.value;

    console.log(cep);

    /* AJAX: técnica de comunicação assincroma
     API (Web Service) ViaCEP
    www.viacep.com.br */


    /* Etapa 1: preparar uma URL contendo o cep
    digitado e o caminho da API (ViaCEP) */
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    /* Etapa 2: Acesse e inicie uma comunicação/requisição
    com o servidor da URL indicada */
    fetch(url)


    /* Etapa 3: ... e entâo, recupere a resposta do servidor
    no formato de objeto (JSON). Este objeto contem todas
    as informações do endereço referente ao CEP informado.  */
    .then(resposta => resposta.json())
        
    

    /* Etapa 4: ... e então, extraia os dados da respostas
     e mostre  na tela */
    .then( dados => {
        console.log(dados);
    })
 })