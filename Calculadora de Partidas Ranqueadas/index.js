let definirRanque = calcularRanque(200,1)

if (definirRanque < 10){
    console.log("O jogador está no Ferro, com o pdl de " + ranque)
} else if (definirRanque >= 11 && definirRanque <= 20) {
    console.log("O jogador está no Bronze, com o pdl de " + ranque)
} else if (definirRanque >= 21 && definirRanque <= 50) {
    console.log("O jogador está no Prata, com o pdl de " + ranque)
} else if (definirRanque >= 51 && definirRanque <= 80){
    console.log("O jogador está no Ouro, com o pdl de " + ranque)
} else if (definirRanque >= 81 && definirRanque <= 90){
    console.log("O jogador está no Diamante, com o pdl de " + ranque)
} else if (definirRanque >= 91 && definirRanque <= 100){
    console.log("O jogador está no Lendário, com o pdl de " + ranque)
} else if (definirRanque >= 101){
    console.log("O jogador está no Imortal, com o pdl de " + ranque)
} else {
    console.log("Valor inválido!")
}

function calcularRanque(vitorias = 0, derrotas = 0) {
    ranque = vitorias - derrotas
    return ranque   
}