function verificaProduto(produto) {

    const cardFlip = document.getElementById("flip");
    var elemento = document.getElementById("opcaoProduto");

    switch (produto) {
        case "2":
        case "3":
        case "4":
            if (cardFlip.classList) cardFlip.classList.add("flip-card");
            else cardFlip.className += " flip-card";

            //Adiciona botao para limpar a class do flip-card
            var resposta = document.createElement("span")
            resposta.setAttribute("class", "resposta")
            var texto = document.createTextNode("Produto em estoque!");
            resposta.appendChild(texto)
            elemento.appendChild(resposta);
            var quebraLinha = document.createElement("br")
            elemento.appendChild(quebraLinha);
            var botao = document.createElement("button");
            botao.setAttribute("name", "Limpar");
            var texto = document.createTextNode("OK");
            botao.appendChild(texto);
            elemento.appendChild(botao);
            console.log("Produto em estoque");
            break;
        default:
            if (cardFlip.classList) cardFlip.classList.add("flip-card");
            else cardFlip.className += " flip-card";

            var resposta = document.createElement("span")
            resposta.setAttribute("class", "resposta")
            var texto = document.createTextNode("Produto esgotado, por favor selecione outro.");
            resposta.appendChild(texto)
            elemento.appendChild(resposta);
            var quebraLinha = document.createElement("br")
            elemento.appendChild(quebraLinha);
            var botao = document.createElement("button");
            botao.setAttribute("name", "Limpar");
            var texto = document.createTextNode("OK");
            botao.appendChild(texto);
            elemento.appendChild(botao);
            console.log("Produto esgotado, por favor selecione outro.");
    }
}


function verificaSubtrair() {

    const cardFlip = document.getElementById("flip2");
    if (cardFlip.classList) cardFlip.classList.add("flip-card");
    else cardFlip.className += " flip-card";

    let valor1 = document.getElementById("subtrair1").value;
    let valor2 = document.getElementById("subtrair2").value;
    var subtracao = valor1 - valor2;

    var elemento = document.getElementById("valorSubtracao");
    var resposta = document.createElement("span")
    resposta.setAttribute("class", "resposta")
    var texto = document.createTextNode("O valor da subtração é igual: " + subtracao);
    resposta.appendChild(texto)
    elemento.appendChild(resposta);
    var quebraLinha = document.createElement("br")
    elemento.appendChild(quebraLinha);
    var botao = document.createElement("button");
    botao.setAttribute("name", "Limpar");
    var texto = document.createTextNode("OK");
    botao.appendChild(texto);
    elemento.appendChild(botao);



}

function verificaDividir() {

    const cardFlip = document.getElementById("flip3");
    var elemento = document.getElementById("valorDivisao");
    let valor1 = document.getElementById("dividir1").value;
    let valor2 = document.getElementById("dividir2").value;

    if (cardFlip.classList) cardFlip.classList.add("flip-card");
    else cardFlip.className += " flip-card";

    let divisao = valor1 / valor2;

    var resposta = document.createElement("span")
    resposta.setAttribute("class", "resposta")
    var texto = document.createTextNode("O valor da divisão é igual: " + divisao);
    resposta.appendChild(texto)
    elemento.appendChild(resposta);
    var quebraLinha = document.createElement("br")
    elemento.appendChild(quebraLinha);
    var botao = document.createElement("button");
    botao.setAttribute("name", "Limpar");
    var texto = document.createTextNode("OK");
    botao.appendChild(texto);
    elemento.appendChild(botao);

}

function imprimir() {

    const cardFlip = document.getElementById("flip4");
    if (cardFlip.classList) cardFlip.classList.add("flip-card");
    else cardFlip.className += " flip-card";
    var elemento = document.getElementById("imprimir");

    var resposta = document.createElement("input");
    resposta.setAttribute("id", "contador");
    resposta.setAttribute("placeholder", 1);
    elemento.appendChild(resposta);
    var quebraLinha = document.createElement("br");
    elemento.appendChild(quebraLinha);
    var botao = document.createElement("button");
    botao.setAttribute("id", "contar");
    var texto = document.createTextNode("OK");
    botao.appendChild(texto);
    elemento.appendChild(botao);

    contagem = document.getElementById("contador");


       let myInterval = setInterval(() => {
            contagem.value++
        }, 10);
    
       setTimeout(() => {
            clearInterval(myInterval);
       },10000);
}

function contagem() {
    contagem = document.getElementById("display");

    setInterval(() => {
        contagem.value++
    });
}

function cadastro() {

    const cardFlip = document.getElementById("flip5");
    var elemento = document.getElementById("imprimirCadastro");

    if (cardFlip.classList) cardFlip.classList.add("flip-card");
    else cardFlip.className += " flip-card";

    let user = {
        cidade: "Joinville",
        estado: "SC",
        bairro: "Centro",
        rua: "Rua dos Pinheiros",
        numero: 123
    }

    var resposta = document.createElement("span")
    resposta.setAttribute("class", "resposta")
    var texto = document.createTextNode("O usuário mora em " + user.cidade + "/" + user.estado + ", no bairro " + user.bairro + ", na rua " + user.rua + " nº " + user.numero);
    resposta.appendChild(texto)
    elemento.appendChild(resposta);
    var quebraLinha = document.createElement("br")
    elemento.appendChild(quebraLinha);
    var botao = document.createElement("button");
    botao.setAttribute("name", "Limpar");
    var texto = document.createTextNode("OK");
    botao.appendChild(texto);
    elemento.appendChild(botao);

}

function constante() {

    const atividade = "Atividade EAD"
    alert(atividade);
    alert(typeof (atividade));
}

function validarNota() {

    var nota = document.getElementById("nota").value;
    console.log(nota);

    if (nota == 7) {
        situacao = "Aluno está aprovado!";
    } else if (nota == 5 || nota == 6) {
        situacao = "Aluno está em recuperação!";
    } else if (nota < 5 && nota >= 0) {
        situacao = "Aluno está reprovado!";
    } else {
        situacao = "Nota inválida!";
    }

    const cardFlip = document.getElementById("flip7");
    var elemento = document.getElementById("informaNota");

    if (cardFlip.classList) cardFlip.classList.add("flip-card");
    else cardFlip.className += " flip-card";

    var resposta = document.createElement("span")
    resposta.setAttribute("class", "resposta")
    var texto = document.createTextNode(situacao);
    resposta.appendChild(texto)
    elemento.appendChild(resposta);
    var quebraLinha = document.createElement("br")
    elemento.appendChild(quebraLinha);
    var botao = document.createElement("button");
    botao.setAttribute("name", "Limpar");
    var texto = document.createTextNode("OK");
    botao.appendChild(texto);
    elemento.appendChild(botao);
}
