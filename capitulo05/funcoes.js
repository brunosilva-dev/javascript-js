// Utizando funções
// Declarando uma function de data
function nomeDaFuncao() {}

function queDiaEHoje() {
  const data = new Date();
  console.log(`1 - Hojé é dia: ${data.getDate()}`);
}

queDiaEHoje();

// Declarando uma function de soma
function soma(valor1, valor2) {
  console.log(`2 - A soma de ${valor1} + ${valor2} é: ${valor1 + valor2}`);
}

soma(10, 20);
soma(3, 4);

// Retornando valores com function
function soma(valor1, valor2) {
  return valor1 + valor2;
}

const idade = 33;
const tamanho = 176;
const resultado = soma(idade, tamanho);

console.log(`3 - resultado: ${resultado}`);

// Multiplicando os valores, onde a variavel retorno está criado dentro do escopo
function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2;
  return resultado;
}

console.log(`4 - O resultado da multiplicação é: `, multiplicar(10, 30));

// Exemplo de calculando salário
const funcionario1 = {
  nome: "Bruno",
  desconto: 0.16,
  salarioBruto: 4976,
  salarioLiquido: 0,
};

const funcionario2 = {
  nome: "Silva",
  desconto: 0.11,
  salarioBruto: 2816,
  salarioLiquido: 0,
};

const descontoFuncionario1 =
  funcionario1.salarioBruto - funcionario1.desconto * funcionario1.salarioBruto;

const descontoFuncionario2 =
  funcionario2.salarioBruto - funcionario2.desconto * funcionario2.salarioBruto;

console.log(
  `5 - ⇣ \n Funcionário1: ${descontoFuncionario1} \n Funcionário2: ${descontoFuncionario2}`
);

// Função para calcular descontos com regras
function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - salarioBruto * desconto;
}

funcionario1.salarioLiquido = calcularDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
);

funcionario2.salarioLiquido = calcularDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
);

console.log(
  `6 - ⇣ \n Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido} \n Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido} \n`
);
