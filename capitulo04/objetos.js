// Utilizando objetos (Object)
const heroi = {
  nome: "Flash",
  idade: 100,
  sexo: "Masculino",
};

console.log("1 - nome: ", heroi.nome);
console.log("2 - idade: ", heroi["idade"]);
console.log("3 - sexo: ", heroi.sexo);
console.log("4 - não existe: ", heroi.naoExiste);

// Criando nova chave
heroi.id = 0001;
console.log("5 - Id: ", heroi);

// Pegando as chaves do objeto
console.log("6 - chaves: ", Object.keys(heroi));

// Pegando somente os valores do objeto
console.log("7 - valores: ", Object.values(heroi));

// Juntando objetos com .assign
const pessoa = {
  tamanho: "10 metros",
};

const novoObj = Object.assign(heroi, pessoa);

console.log("8 - ", novoObj);

// Remover uma chave do objeto no js
delete novoObj.nome;
console.log("9 - ", novoObj);
