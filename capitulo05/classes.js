// Aprendendo a organizar utilizando class
class Heroi {
  atacar() {
    console.log(`atacou!!`);
  }
  defender() {
    console.log(`defendeu!!`);
  }
}

const heroi = new Heroi();
heroi.atacar();
heroi.defender();

// Usando constructor e chamando a funções somente depois evitando código replicado
class Heroi2 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  atacar() {
    console.log(`O ${this.nome} atacou`);
  }
}

const heroi2 = new Heroi2(`Flash`, 80);
heroi2.atacar();

// Função sem precisar usar a palavra chave This onde vai utilizar a Static. Static são para valores que nunca se alteram
class Heroi3 {
  static obterAnoNascimento(idade) {
    return 2022 - idade;
  }
}

const anoNascimento = Heroi3.obterAnoNascimento(34);
console.log(`O ano de nascimento do Heroi é ${anoNascimento}`);
