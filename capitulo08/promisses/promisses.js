// pegando dados do terminal e convertendo ele
const readline = require("readline");
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// terminal.question("Qual é o seu nome?\n", (nome) => {
//   terminal.question("Qual é o seu nome?\n", (nome) => {
//     console.log(
//       `
//       Nome: ${nome},
//       Telefone: ${telefone}
//       `
//     );
//     terminal.close();
//   });
// });

// encapsulamento
function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto}\n`, resolve);
  });
}

let nome = "";
let telefone = "";
Promise.resolve() // Para não perder a execução do primeiro item caso use futuramente .then
  .then(() => questionAsync("Qual é seu nome?"))
  .then((respostaNome) => {
    if (!respostaNome) throw new Error("Preencher o campo nome!!");
    nome = respostaNome;
  })
  .then(() => questionAsync("Qual é o seu telefone?"))
  .then((respostaTelefone) => {
    if (!respostaTelefone) throw new Error("Preencher o campo telefone!!");
    telefone = respostaTelefone;
  })
  .then(() => {
    console.log(`Nome: ${nome}, Telefone: ${telefone}`);
  })
  .catch((error) => {
    console.error("Deu ruim***", error.stack);
  })
  .finally(() => terminal.close());
