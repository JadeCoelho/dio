// imc com funções

function calcImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function condPeso(imc) {
  let situacao;
  if (imc < 18.5) {
    situacao = "Abaixo do peso";
    return situacao;
  } else if (imc >= 18.5 && imc < 25) {
    situacao = "Peso normal";
    return situacao;
  } else if (imc >= 25 && imc < 30) {
    situacao = "Acima do peso";
    return situacao;
  } else if (imc <= 30 && imc > 40) {
    situacao = "Obesidade";
    return situacao;
  } else {
    situacao = "Obesidade grave";
    return situacao;
  }
}

let imc = calcImc(52, 1.52);
console.log(condPeso(imc));

//funções imediatamente invocadas = funcionam/existem a tempo de execução

(function () {
  let peso = 65;
  let altura = 1.75;
  let imc = calcImc(peso, altura);
  console.log(condPeso(imc));
})();

//juros com funções
function desconto(precoProduto, desconto) {
  return precoProduto - (precoProduto * desconto / 100);
}
function juros(precoProduto, juros) {
  return precoProduto + (precoProduto * juros / 100)
}
function pagamento(precoProduto, formaPag) {
  let precoFinal;
  if (formaPag === 1) {
    precoFinal = desconto(precoProduto, 10);
  } else if (formaPag === 2) {
    precoFinal = desconto(precoProduto, 15);
  } else if (formaPag === 3) {
    precoFinal = precoProduto;
  } else {
    precoFinal = juros(precoProduto, 10);
  }
  return `R$ ${precoFinal.toFixed(2)}`;
}

console.log(pagamento(39.99, 1));
