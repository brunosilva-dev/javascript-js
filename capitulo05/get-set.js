// Usando GET and SET
const pessoa = {
  _nome: "", // Variáveis criadas com _var não devem ser acessadas por fora, ela é uma var privada
  _idade: 20,
  get nome() {
    return this._nome;
  },
  set nome(valor) {
    this._nome = valor.toUpperCase();
  },
  // Verifica se pode dirigir
  get podeDirigir() {
    return this._idade > 18;
  },
  set idade(valor) {
    this._idade = valor;
  },
};

pessoa.nome = "maria do céu";
console.log("1 - " + pessoa.nome);
console.log("2 - " + pessoa.podeDirigir);
pessoa.idade = 16;
console.log("3 - " + pessoa.podeDirigir);
console.log("4 - " + pessoa.idade); // idade é uma variavel indefinida por não ter a função GET
