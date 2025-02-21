function convertebase(numero,baseOrigem,baseDestino){
    let decimal = parseInt(numero,baseOrigem);
    if (isNaN(decimal)){
        return"Numero Invalido";
    }
    return decimal.toString(baseDestino);
}

function processarOctalBinairo(){
    let numero = document.getElementById("inputBinario").value;
    let baseOrigem = document.getElementById("Binario").getAttribute("data-valor");
    let saida = document.getElementById("1")
    saida.innerText = convertebase(numero,baseOrigem,8)
    console.log(convertebase(numero,baseOrigem,8));
}

function processarDecimalBinario(){
    let numero = document.getElementById("inputBinario").value;
    let baseOrigem = document.getElementById("Binario").getAttribute("data-valor");
    let saida = document.getElementById("1")
    saida.innerText = convertebase(numero,baseOrigem,10)
    console.log(convertebase(numero,baseOrigem,10));
}

function processarHexadecimalBinario(){
    let numero = document.getElementById("inputBinario").value;
    let baseOrigem = document.getElementById("Binario").getAttribute("data-valor");
    let saida = document.getElementById("1")
    saida.innerText = convertebase(numero,baseOrigem,16)
    console.log(convertebase(numero,baseOrigem,16));
}

function processarBinarioOctal(){
    let numero = document.getElementById("inputOctal").value;
    let baseOrigem = document.getElementById("Octal").getAttribute("data-valor");
    let saida = document.getElementById("2")
    saida.innerText = convertebase(numero,baseOrigem,2)
    console.log(convertebase(numero,baseOrigem,2));
}

function processarDecimalOctal(){
    let numero = document.getElementById("inputOctal").value;
    let baseOrigem = document.getElementById("Octal").getAttribute("data-valor");
    let saida = document.getElementById("2")
    saida.innerText = convertebase(numero,baseOrigem,10)
    console.log(convertebase(numero,baseOrigem,10));
}

function processarHexadecimalOctal(){
    let numero = document.getElementById("inputOctal").value;
    let baseOrigem = document.getElementById("Octal").getAttribute("data-valor");
    let saida = document.getElementById("2")
    saida.innerText = convertebase(numero,baseOrigem,16)
    console.log(convertebase(numero,baseOrigem,16));
}

function processarOctalDecimal(){
    let numero = document.getElementById("inputDecimal").value;
    let baseOrigem = document.getElementById("Decimal").getAttribute("data-valor");
    let saida = document.getElementById("3")
    saida.innerText = convertebase(numero,baseOrigem,8)
    console.log(convertebase(numero,baseOrigem,8));
}

function processarBinarioDecimal(){
    let numero = document.getElementById("inputDecimal").value;
    let baseOrigem = document.getElementById("Decimal").getAttribute("data-valor");
    let saida = document.getElementById("3")
    saida.innerText = convertebase(numero,baseOrigem,2)
    console.log(convertebase(numero,baseOrigem,2));
}

function processarHexadecimalDecimal(){
    let numero = document.getElementById("inputDecimal").value;
    let baseOrigem = document.getElementById("Decimal").getAttribute("data-valor");
    let saida = document.getElementById("3")
    saida.innerText = convertebase(numero,baseOrigem,16)
    console.log(convertebase(numero,baseOrigem,16));
}

function processarOctalHexa(){
    let numero = document.getElementById("inputHexa").value;
    let baseOrigem = document.getElementById("Hexa").getAttribute("data-valor");
    let saida = document.getElementById("4")
    saida.innerText = convertebase(numero,baseOrigem,8)
    console.log(convertebase(numero,baseOrigem,8));
}

function processarDecimalHexa(){
    let numero = document.getElementById("inputHexa").value;
    let baseOrigem = document.getElementById("Hexa").getAttribute("data-valor");
    let saida = document.getElementById("4")
    saida.innerText = convertebase(numero,baseOrigem,10)
    console.log(convertebase(numero,baseOrigem,10));
}

function processarBinarioHexa(){
    let numero = document.getElementById("inputHexa").value;
    let baseOrigem = document.getElementById("Hexa").getAttribute("data-valor");
    let saida = document.getElementById("4")
    saida.innerText = convertebase(numero,baseOrigem,2)
    console.log(convertebase(numero,baseOrigem,2));
}