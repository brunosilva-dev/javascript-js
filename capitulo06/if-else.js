// Usando IF/ELSE/IFELSE
let frutaExistenteNoMercado = false;
let temCPUSuficiente = true;

// obter valores do terminal
const args = process.argv;
const saldo = args[args.length - 1];
console.log("1 - args", args);
console.log("2 - saldo", saldo);

// verifica se o valor é NaN (Not a Number)
if (isNaN(saldo)) {
  console.log("3 - valor invalido!!");
  return;
}

// manipulação de clientes e verificar saldo
let tipoCliente = "premium";
if (saldo < 9) {
  tipoCliente = "basic";
} else if (saldo >= 10 && saldo < 20) {
  tipoCliente = "gold";
} else {
  tipoCliente = null;
}

// null, undefined, vazio, 0 === false
if (!tipoCliente) {
  tipoCliente = "indefinido";
}

console.log("4 - tipoDoCliente", tipoCliente);

// Ccondição ternaria
const idade = 18;
const resultado = idade >= 18 ? "pode dirigir" : "não pode dirigir";
console.log("5 - resultado: ", resultado);
