// Usando arrays, listas, vetores
// Array sempre inicia na posição 0

const minhaLista = [];
const minhaListaDeTarefas = [
  "mandar email",
  "colocar comida para o dog",
  "limpar o quarto",
];
console.log("------------ Exemplos ---------------\n");
console.log("1 - " + minhaListaDeTarefas[0]);
console.log("2 - " + minhaListaDeTarefas[1]);
console.log("3 - " + minhaListaDeTarefas[2]);

// Quantidades de itens no array
console.log("4 - " + minhaListaDeTarefas.length);

// .push adiciona item no final da lista
minhaListaDeTarefas.push("formatar computador"); //
console.log("5 - " + minhaListaDeTarefas);

// .pop remove o ultimo da lista
const ultimo = minhaListaDeTarefas.pop();
console.log("6 - " + ultimo);
console.log("7 - " + minhaListaDeTarefas);

// .shift remove o primeiro item da lista
const primeiro = minhaListaDeTarefas.shift();
console.log("8 - " + primeiro);
console.log("9 - " + minhaListaDeTarefas);

// .splice remove um item especifico a partir de um indice onde dentro de splice(1,2)
// 1 - informa a posição do item
// 2 - informa quantos itens serão removidos
minhaListaDeTarefas.splice(1, 1);
console.log("10 - " + minhaListaDeTarefas);

// Lista com vários tipos diferentes
const itens = [1, "computador", 0.22];

// Verifica o tipo de "array"
console.log("11 - " + typeof itens);

// Verificar se é array de forma correta
console.log("12 - " + Array.isArray(itens));

// Ordenadar lista com .sort()
const letras = ["c", "b", "a", "d"];
console.log("13 - " + letras.sort());

const numeros = [4, 2, 3, 1];
console.log("14 - " + numeros.sort());

// Juntar dois arrays com .concat()
const novo = itens.concat([1, 2, 3]);
console.log("15 - " + novo);

// Juntar arrays em apenas uma string com .join()
console.log("16 - " + itens.join(";"));

// Verificar indice do item com .indexOf()
// Quando o indexOf não encontra o item, o valor retornado no console é negativo
const index = itens.indexOf("computador");
console.log("17 - " + index);
console.log("18 - " + itens[index]);
