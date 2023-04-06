class Carros {
  marca;
  cor;
  qtdCombKm;

  constructor(marca, cor, qtdCombKm) {
    this.marca = marca;
    this.cor = cor;
    this.qtdCombKm = qtdCombKm;
  }

  gastoViagem(distancia, valorComb) {
    return (
      "O valor da viagem é de R$ " +
      ((distancia / this.qtdCombKm) * valorComb).toFixed(2)
    );
  }
}

const uno = new Carros("fiat", "branco", 11);
console.log(uno.gastoViagem(40, 5.4));

const palio = new Carros("fiat", "preto", 10);
console.log(palio.gastoViagem(40, 5.4));

class NovaPessoa {
  nome;
  peso;
  altura;
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calculaImc() {
    let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
    return imc
}
  classificaImc(){
    let imc = this.calculaImc()
    let situacao
    if (imc < 18.5) {
        situacao = "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 25) {
        situacao = "Peso normal";
      } else if (imc >= 25 && imc < 30) {
        situacao = "Acima do peso";
      } else if (imc <= 30 && imc > 40) {
        situacao = "Obesidade";
      } else {
        situacao = "Obesidade grave";
      }
      return situacao
  }
}

const jose = new NovaPessoa("José", 70, 1.75);
console.log(jose.calculaImc());
console.log(jose.classificaImc());
