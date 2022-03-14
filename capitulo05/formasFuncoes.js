// Várias formas de se usar function
// Função
function minhaFuncao1(parametro1) {
  return `Hello Dev!`;
}

console.log(`1 - `, minhaFuncao1());

// Criando com uma const e função anonima
const minhaFuncao2 = function (parametro1) {
  return `Hello ${parametro1}`;
};

console.log(`2 - `, minhaFuncao2("Dev!!"));

// Utilizando arrow function
const minhaFuncao3 = (parametro1) => {
  return `Hello ${parametro1}`;
};

console.log(`3 - `, minhaFuncao3("Dev!!!"));
// Quando se utiliza vários parametros não precisa colocar dentro do parenteses
// const minhaFuncao4 = parametro1 => `Hello ${parametro1}`; = O VSCode corrige automaticamente devido minha conf de formatação
const minhaFuncao4 = (parametro1) => `Hello ${parametro1}`;

console.log(`4 - `, minhaFuncao4("Dev!!!!"));
// Criando function dentro de objetos
const obj1 = {
  minhaFuncao: (parametro1) => `Hello ${parametro1}`,
};

obj1.minhaFuncao("Test");
console.log(`5 - `, obj1.minhaFuncao("Dev!!!!!"));

// Criando dentro do objeto sem utilizar a palavra function
const obj2 = {
  minhaFuncao(parametro1) {
    return `Hello ${parametro1}`;
  },
};

obj2.minhaFuncao();
console.log(`6 - `, obj2.minhaFuncao("Dev!!!!!!"));
