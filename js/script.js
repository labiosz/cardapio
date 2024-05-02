console.log('calcular... ')

// Manipulação do DOM

// let = local
// var = global
// const = constante
document.querySelector("#qtde").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("prototipo_sim").addEventListener("change", calcular)
document.querySelector("prototipo_nao").addEventListener("change", calcular)

function calcular() {
    const qtde = document.querySelector("#qtde").value
    let preco = qtde * 5

    const tipo = document.querySelector("#tipo").innerText = "R$" + preco.toFixed(2)
    if (tipo == 2) preco += 5

    const temLayout = document.querySelector("#prototipo_sim").checked
    if (temLayout) preco *= 1.1 
    
}

console.log(qtde)