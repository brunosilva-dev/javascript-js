// Termo de parada usando FOR, FOR IN, FOR OF
const textoPar = "par";
const textoImpar = "impar";

for (let index = 0; index <= 10; index++) {
  const decisao = index % 2 === 0 ? textoPar : textoImpar;
  console.log(`1 - O número ${index} é ${decisao}`);
}

// fazendo de uma forma mais complexa
const superHerois = [
  {
    id: parseInt(Math.random() * 10),
    nome: "Superman",
    superPoder: "Força",
  },
  {
    id: parseInt(Math.random()),
    nome: "Batman",
    superPoder: "Dinheiro",
  },
];
console.log("2 - ", superHerois);

for (let index = 0; index < superHerois.length; index++) {
  // Pegando um item especifico da lista
  const item = superHerois[index];
  console.log(
    `
    3 - 
    id: ${item.id}
    nome: ${item.nome}
    `
  );
}

// for in, não precisa de contador
for (const index in superHerois) {
  const item = superHerois[index];
  console.log(`4 - Nome`, item.nome);
}

// for of, não precisa usar index
for (const item of superHerois) {
  console.log(`5 - Nome`, item.nome);
}
