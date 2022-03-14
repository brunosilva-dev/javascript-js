// Valores boleanos
const podeDirigir = true;

if (podeDirigir) {
  console.log("Ela pode dirigir!");
}

const saldoEmConta = 0;

if (!saldoEmConta) {
  console.log("não tem saldo!");
}

const boolComString = "hackerzão";

// Força o valor a true ou false de acordo com a tabela
console.log("boolComString", !!boolComString);

// negação
console.log("negação", !boolComString);

// Negação + forçar a bool
console.log("negação + forçar boolstring", !!!boolComString);
