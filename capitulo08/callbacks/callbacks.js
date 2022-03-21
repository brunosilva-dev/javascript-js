// importando modulo file system
const fs = require("fs");

// usando readFile para ler o arquivo
fs.readFile("./arq1.md", (error, resposta) => {
  if (error) {
    console.error("Deu ruim***", error.stack);
    return;
  }
  console.log("resposta", resposta);
});

fs.readFile("./arq1.md", (errorArq1, respostaArq1) => {
  if (errorArq1) {
    console.error("Deu ruim no arq1", errorArq1);
    return;
  }
  fs.readFile("./arq2.md", (errorArq2, respostaArq2) => {
    if (errorArq2) {
      console.error("Deu ruim no arq2", errorArq2);
      return;
    }
    fs.readFile("./arq3.md", (errorArq3, respostaArq3) => {
      if (errorArq3) {
        console.error("Deu ruim no arq3", errorArq3);
        return;
      }

      const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`;

      // escrevendo um novo arquivo onde irá juntar os existentes
      fs.writeFile("./final.md", conteudo, (errorWrite, respostaWrite) => {
        if (errorWrite) {
          console.error("Deu ruim na gravação", errorWrite);
          return;
        }
        console.log("Arquivo salvo com sucesso!!");
      });
    });
  });
});
