// Utilizando datas.
// Meses se inicia com 0
const dataAniversario = new Date(2022, 11, 05);
console.log("1 - ", dataAniversario);

// Data de quando se deu inicio o JS
const primeiraDataDoJS = new Date(0);
console.log("2 - ", primeiraDataDoJS);
console.log("3 - ", primeiraDataDoJS.getTime()); // Mostra o valor inicial da data

// Mostrando a datas
const dataHoje = new Date();
console.log("4 - ", dataHoje.toString()); // Não é o formato recomendado de se mostrar
console.log("5 - ", dataHoje.toLocaleDateString()); // Local da máquina configurado
console.log("6 - ", dataHoje.toISOString()); // Função correta de se trabalhar (FORMATO GLOBAL RECOMENDADO)

// Trazendo a data de hoje
const dia = dataHoje.getDate();
dataHoje.setDate(dia + 5); // Somando o dia de hoje mais 5 dias
dataHoje.setHours(10, 30, 0); // Setando hora
console.log("7 - ", dataHoje);

// Usando todas as variáveis declaradas
console.log(`
  Dia: ${dataHoje.getDate()}
  Mês: ${dataHoje.getMonth()}
  Ano: ${dataHoje.getFullYear()}
  Hora: ${dataHoje.getHours()}
  Minutos: ${dataHoje.getMinutes()}
  Segundos: ${dataHoje.getSeconds()}
`);

// Comparando datas
console.log("8 - ", new Date(2022, 1, 20) > new Date(2000, 1, 1));
