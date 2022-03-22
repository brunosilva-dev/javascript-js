class JogoDaMemoria {
  constructor({ tela, util }) {
    this.tela = tela;
    this.util = util;

    // inserindo imagem default
    this.iconePadrao = "../arquivos/anonymous.png";
    // caminho do arquivo é sempre relativo ao index.html
    this.heroisIniciais = [
      {
        img: "../arquivos/batman.png",
        nome: "batman",
      },
      {
        img: "../arquivos/deadpool.png",
        nome: "deadpool",
      },
      {
        img: "../arquivos/flash.png",
        nome: "flash",
      },
      {
        img: "../arquivos/hellboy.png",
        nome: "hellboy",
      },
    ];

    // escondendo as cartas
    this.heroisEscondidos = [];
    this.heroisSelecionados = [];
  }
  // para usar o this, não podemos usar static!
  inicializar() {
    // vai pegar todas as funcoes da tela.
    // coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais);
    // força a tela a usar o THIS de jogo da memória
    this.tela.configurarBotaoJogar(this.jogar.bind(this));
    // configurar a funcao de clicar na tela
    this.tela.configurarClickVerificarSelecao(this.verificarSelecao.bind(this));
    this.tela.configurarBotaoMostrarTudo(
      this.mostrarHeroisEscondidos.bind(this)
    );
  }

  esconderHerois(herois) {
    // funcao que vai trocar os heróis existentes pelo icone padrão. Vai pegar os ocultos e extrair
    // usando sintaxe ({chave: 1}) retorna o que estiver dentro dos parenteses
    // quando não é usado dois pontos (:), o JS entende que o nome é o mesmo valor. Ex: id: id
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao,
    }));
    // atualiaza as imagens com os herois ocultos
    this.tela.atualizarImagens(heroisOcultos);
    // guarda-se os herois para trabalhar com eles depois
    this.heroisEscondidos = heroisOcultos;
  }

  // nomes dos herois
  exibirHerois(nomeDoHeroi) {
    // buscar o heroi pelo nome e obter somente a imagem dele
    const { img } = this.heroisIniciais.find(
      ({ nome }) => nomeDoHeroi === nome
    );
    // funcao na tela para exibir somente a imagem do heroi
    this.tela.exibirHerois(nomeDoHeroi, img);
  }

  // verificar se foi clicado certo ou errado
  verificarSelecao(id, nome) {
    const item = { id, nome };
    // verificar a quantidade de herois selecionados e tomar uma ação se escolheu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length;
    switch (heroisSelecionados) {
      case 0:
        // adiciona a escolha esperando a seleção da próxima
        this.heroisSelecionados.push(item);
        break;
      case 1:
        // se a quantidade pode escolher mais um apenas
        const [opcao1] = this.heroisSelecionados;
        // zerar itens da lista para não selecionar mais de dois
        this.heroisSelecionados = [];
        let deveMostrarMensagem = false;
        // conferencia se o nome e o id são os mesmos
        if (
          opcao1.nome === item.nome &&
          // verifica se são diferentes para o usuario não clicar duas vezes no mesmo
          opcao1.id !== id
        ) {
          deveMostrarMensagem = true;
          this.exibirHerois(item.nome);
          // para a execução
          this.tela.exibirMensagem(true);
          return;
        }
        this.tela.exibirMensagem(false);
        // fim do case
        break;
    }
  }

  mostrarHeroisEscondidos() {
    // pega os herois e coloca os respectivos valores
    const heroisEscondidos = this.heroisEscondidos;
    for (const heroi of heroisEscondidos) {
      const { img } = this.heroisIniciais.find(
        (item) => item.nome === heroi.nome
      );
      heroi.img = img;
    }
    this.tela.atualizarImagens(heroisEscondidos);
  }

  // logica que vai mostrar ou ocultar as imagens
  async embaralhar() {
    const copias = this.heroisIniciais
      // duplicar os itens
      .concat(this.heroisIniciais)
      // criar um ID aleatorio para cada item
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      // utilizando .sort para ordenar
      .sort(() => Math.random() - 0.5);
    this.tela.atualizarImagens(copias);
    this.tela.exibirCarregando();

    const idDoIntervalo = this.tela.iniciarContador();
    // esperando 3 segundo para atualizar a tela
    await this.util.timeout(3000);
    this.tela.limparContador(idDoIntervalo);
    this.esconderHerois(copias);
    this.tela.exibirCarregando(false);
  }

  // funcao que aciona o jogo
  jogar() {
    this.embaralhar();
  }
}
