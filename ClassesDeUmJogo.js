class jogador{
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  ataqueMago(){
    console.log(`O ${this.nome} atacou usando magia`)
  }

  ataqueGuerreiro(){
    console.log(`O ${this.nome} atacou usando espada`)
  }

  ataqueMonge(){
    console.log(`O ${this.nome} atacou usando artes marciais`)
  }

  ataqueNinja(){
    console.log(`O ${this.nome} atacou usando shuriken`)
  }
}

let heroiMago = new jogador("Undel", 18, "Mago")
let heroiGuerreiro = new jogador("Azel", 21, "Guerreiro")
let heroiMonge = new jogador("Kal", 17, "Monge")
let heroiNinja = new jogador("Kashi", 19, "Ninja")


if (heroiMago.tipo == "Mago"){
  heroiMago.ataqueMago()
} 

if (heroiGuerreiro.tipo == "Guerreiro"){
  heroiGuerreiro.ataqueGuerreiro()
}

if (heroiMonge.tipo == "Monge"){
  heroiMonge.ataqueMonge()
}

if (heroiNinja.tipo == "Ninja"){
  heroiNinja.ataqueNinja()
}