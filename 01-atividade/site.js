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

    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

function cadastro() {

    let user = {
        cidade: "Joinville",
        estado: "SC",
        bairro: "Centro",
        rua: "Rua dos Pinheiros",
        numero: 123
    }

    console.log("O usuário mora em " + user.cidade + " / " + user.estado + ", no bairro " + user.bairro + ", na rua " + user.rua + " nº " + user.numero);
}

function constante() {

    const atividade = "Atividade EAD"
    alert(atividade);
}

function validarNota() {

    var nota = document.getElementById("nota").value;
    console.log(nota);

    if (nota == 7) {
        console.log("Aprovado");
    } else if (nota == 5) {
        console.log("Recuperação");
    } else if (nota < 5 && nota >= 0) {
        console.log("Reprovado")
    } else {
        console.log("Nota inválida")
    }
}

