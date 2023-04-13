function verificaProduto(produto) {

    const cardFlip = document.getElementById("flip");



    var elemento = document.getElementById("opcaoProduto");

    switch (produto) {
        case "1":
            if (cardFlip.classList) cardFlip.classList.add("flip-card");
            else cardFlip.className += " flip-card";

            //Adiciona botao para limpar a class do flip-card
            var select = document.createElement("button");
		    select.setAttribute("name", "OK");
            elemento.appendChild(select);

            var texto = document.createTextNode("Produto em estoque!");
            elemento.appendChild(texto);
            
            console.log("Produto em estoque");
            break;
        case "2":
            console.log("Produto em estoque");
            break;
        case "3":
            console.log("Produto em estoque");
            break;
        default:
            console.log("Produto esgotado, por favor selecione outro.");
    }
}


function verificaSubtrair() {
    console.log("passou aqui")
    let valor1 = document.getElementById("subtrair1").value;
    console.log(valor1);
    let valor2 = document.getElementById("subtrair2").value;
    console.log(valor2);

    let calcular = valor1 - valor2;
    return console.log(calcular);

}

function verificaDividir() {
    console.log("passou aqui")
    let valor1 = document.getElementById("dividir1").value;
    console.log(valor1);
    let valor2 = document.getElementById("dividir2").value;
    console.log(valor2);

    let calcular = valor1 / valor2;
    return console.log(calcular);

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

