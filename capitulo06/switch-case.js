// Utilizando switch | case
const readLine = require("readline"); // pega classe que já existe no js

// Captura tudo via interface
const terminal = readLine.createInterface({
  // Tudo o que entrar na aplicação será via terminal
  input: process.stdin,

  // Saíra tudo pelo termial
  output: process.stdout,
});

// Texto do menu
const textoMenu = `
Olá, seja bem-vindo ao sistema de Bruno!
- Digite 1 para acessar o menu inicial
- Digite 2 para acessar o menu de Herois
- Digite 3 para acessar o menu de Guerreiros
- Digite 0 para sair
`;
// console.log("textoMenu", textoMenu);
// const opcao = 3;
// switch (opcao) {
//   case 1:
//     console.log("Menu Inicial");
//     break;
//   case 2:
//     console.log("Menu de Heróis");
//     break;
//   case 3:
//     console.log("Menu de Guerreiros");
//     break;
//   default:
//     console.log("Opção Inválida!");
//     break;
// }

// // Criando questões no terminal para tomada de decisões onde ocorrerá uma ação após o usuário digitar e apertar enter:
// terminal.question("Qual é o seu nome? \n - ", (msg) => {
//   console.log("Você escreveu", msg);
//   // Interrompe o processo e libera o terminal
//   terminal.close();
// });

// Criando de uma forma mais inteligente utilizando objetos
const questoes = {
  menuInicial: {
    texto: textoMenu,
    fn: menuInicial,
  },
  opcao1: {
    texto: "Submenu! Pressione ENTER para selecionar mais opções...",
    fn: opcao1,
  },
};

function opcao1(msg) {
  console.log("Não há mais opções!");
  terminal.close();
}

function menuInicial(msg) {
  const opcao = Number(msg);
  if (isNaN(opcao)) {
    throw new Error("Não é um número", msg);
  }
  switch (opcao) {
    case 0:
      console.log("Saindo...");
      terminal.close();
      break;
    case 1: // chama o objeto
      console.log("Menu Incial");
      terminal.question(questoes.opcao1.texto, questoes.opcao1.fn);
      break;
    default:
      console.log("Inválido");
      terminal.close();
      break;
  }
}

terminal.question(questoes.menuInicial.texto, questoes.menuInicial.fn);
