function comprar(){
    let tipoDeIngresso = document.getElementById("tipo-ingresso");
    let quantidadeDeIngressos = parseInt (document.getElementById("Quantidade").value);

    if (quantidadeDeIngressos > 5){
        alert ("A quantidade máxima de ingressos por pessoa é de 5");
        return;
    }
    if (tipoDeIngresso.value == "pista") {
        comprarPista(quantidadeDeIngressos);
    }
    if (tipoDeIngresso.value == "superior"){
        comprarCadeiraSuperior(quantidadeDeIngressos);
    }
    if (tipoDeIngresso.value == "inferior") {
        comprarCadeiraInferior(quantidadeDeIngressos);
    }
    if (tipoDeIngresso.value == "camarote") {
        comprarCamarote(quantidadeDeIngressos);
    }
    if (tipoDeIngresso.value == "visitante") {
        comprarVisitante(quantidadeDeIngressos);
    }
}

function comprarPista(quantidadeDeIngressos){
    let qtdPista = parseInt (document.getElementById("qtd-pista").textContent);
    if (quantidadeDeIngressos > qtdPista) {
        alert ("Quantidade indisponível para compra");
    } else {
        qtdPista = qtdPista - quantidadeDeIngressos;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert ("compra realizada com sucesso!");
    }
}

function comprarCadeiraSuperior(quantidadeDeIngressos){
    let qtdSuperior = parseInt (document.getElementById("qtd-superior").textContent);
    if (quantidadeDeIngressos > qtdSuperior) {
        alert ("Quantidade indisponível para compra");
    } else {
        qtdSuperior = qtdSuperior - quantidadeDeIngressos;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert ("Compra realizada com sucesso!");
    }
}

function comprarCadeiraInferior(quantidadeDeIngressos){
    let qtdInferior = parseInt (document.getElementById("qtd-inferior").textContent);
    if (quantidadeDeIngressos > qtdInferior) {
        alert ("Quantidade indisponível para compra");
    } else {
        qtdInferior = qtdInferior - quantidadeDeIngressos;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert ("Compra realizada com sucesso!");
    }
}

function comprarCamarote(quantidadeDeIngressos){
    let qtdCamarote = parseInt (document.getElementById("qtd-camarote").textContent);
    if (quantidadeDeIngressos > qtdCamarote) {
        alert ("Quantidade indisponível para compra");
    } else {
        qtdCamarote = qtdCamarote - quantidadeDeIngressos;
        document.getElementById("qtd-camarote").textContent = qtdCamarote;
        alert ("Compra realizada com sucesso!");
    }
}

function comprarVisitante(quantidadeDeIngressos){
    let qtdVisitante = parseInt (document.getElementById("qtd-visitante").textContent);
    if (quantidadeDeIngressos > qtdVisitante) {
        alert ("Quantidade indisponível para compra");
    } else {
        qtdVisitante = qtdVisitante - quantidadeDeIngressos;
        document.getElementById("qtd-visitante").textContent = qtdVisitante;
        alert ("Compra realizada com sucesso!");
    }
}
