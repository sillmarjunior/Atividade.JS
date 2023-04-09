function verificaProduto(produto) {

    switch (produto) {
        case "1": 
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

function verificaSubtrair(){
    console.log("passou aqui")
    let valor1 = document.formSubtrair.subtrair1.value;
    console.log(valor1); 
    let valor2 = document.formSubtrair.subtrair2.value;
    console.log(valor2);

    let calcular = valor1 - valor2;
    return console.log(calcular);
    
}

function verificaDividir(){
    console.log("passou aqui")
    let valor1 = document.formDividir.dividir1.value;
    console.log(valor1); 
    let valor2 = document.formDividir.dividir2.value;
    console.log(valor2);

    let calcular = valor1 / valor2;
    return console.log(calcular);
  
}
