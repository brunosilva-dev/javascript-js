// Utilizando While e Do While
// enquanto não mudar, não para
let termoDeParada = true;
let contador = 0;

// exibir somente pares na tela
while (termoDeParada) {
  termoDeParada = contador < 10;
  if (contador % 2 === 0) {
    console.log("Numero par", contador);
  }
  // contador = contador + 1
  contador += 1;
}

// roda a primeira vez e testa a variavel depois
do {
  console.log("Só uma vez, pois o termo de parada é", termoDeParada);
} while (termoDeParada);

while (termoDeParada) {
  // não vai executar
  console.log("Nem vai executar!");
}
