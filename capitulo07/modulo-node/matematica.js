// criando uma class com static, pois não precisa usar o this e métodos no seu contexto
class Matematica {
  static somar(valor1, valor2) {
    return valor1 + valor2;
  }

  static multiplicar(valor1, valor2) {
    return valor1 * valor2;
  }
}

// deixar o arquivo publico
module.exports = Matematica;
