// metodos estaticos não podem trabalhar com THIS
const util = Util;

const ID_CONTEUDO = "conteudo";
const ID_BTN_JOGAR = "jogar";
const ID_MENSAGEM = "mensagem";
const CLASSE_INVISIVEL = "invisible";
const ID_CARREGANDO = "carregando";
const ID_CONTADOR = "contador";
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo";
const MENSAGENS = {
  sucesso: {
    texto: "Combinação Correta!",
    classe: "alert-sucess",
  },
  erro: {
    texto: "Combinação Incorreta!",
    classe: "alert-danger",
  },
};

class Tela {
  static obterCodigoHtml(item) {
    return `
    <div class="col-md-3">
        <div class="card" style="width: 50%" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
          <img
            src="${item.img}" name="${item.nome}"
            class="card-img-top"
            alt="Batman"
          />
        </div>
      </div>
    `;
  }

  static alterarConteudoHTML(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO);
    conteudo.innerHTML = codigoHtml;
  }

  static gerarStringHTMLPelaImagem(data) {
    // para cada item da lista, vai executar a funcao obterCodigoHtml ao final, vai concatenar tudo em uma unica string onde muda de Array para String
    return data.map(Tela.obterCodigoHtml).join("");
  }

  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM);
    if (sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe);
      elemento.classList.add(MENSAGENS.sucesso.classe);
      elemento.innerText = MENSAGENS.sucesso.texto;
    } else {
      elemento.classList.remove(MENSAGENS.sucesso.classe);
      elemento.classList.add(MENSAGENS.erro.classe);
      elemento.innerText = MENSAGENS.erro.texto;
    }
    elemento.classList.remove(CLASSE_INVISIVEL);
    await util.timeout(1000);
    elemento.classList.add(CLASSE_INVISIVEL);
  }

  static iniciarContador() {
    let contarAte = 3;
    const elementoContador = document.getElementById(ID_CONTADOR);
    // substitui o texto $$contador onde esta e adiciona o valor
    const identificadorNoTexto = "$$contador";
    const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`;
    // função em linha para atualizar o texto a cada segundo
    const atualizarTexto = () =>
      (elementoContador.innerHTML = textoPadrao.replace(
        identificadorNoTexto,
        contarAte--
      ));
    atualizarTexto();
    // chama a função a cada segundo e susbtistituindo a variavel
    const idDoIntervalo = setInterval(atualizarTexto, 1000);
    return idDoIntervalo;
  }

  static limparContador(idContador) {
    clearInterval(idContador);
    document.getElementById(ID_CONTADOR).innerHTML = "";
  }

  static exibirCarregando(mostrar = true) {
    const carregando = document.getElementById(ID_CARREGANDO);
    if (mostrar) {
      carregando.classList.remove(CLASSE_INVISIVEL);
      return;
    }
    carregando.classList.add(CLASSE_INVISIVEL);
  }

  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens);
    Tela.alterarConteudoHTML(codigoHtml);
  }

  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi);
    // cada elemento encontrado na tela, sera alterado a imagem para a imagem inicial dele
    // forEach seta o valor da imagem para cada item
    elementosHtml.forEach((item) => (item.src = img));
  }

  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR);
    btnJogar.onclick = funcaoOnClick;
  }

  static configurarClickVerificarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick;
  }

  static configurarBotaoMostrarTudo(funcaoOnClick) {
    const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO);
    btnMostrarTudo.onclick = funcaoOnClick;
  }
}
