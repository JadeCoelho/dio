//práticas com variáveis, operadores e estruturas condicionais

let n1 = 4,
  n2 = 7,
  n3 = 5;

let media = ((n1 + n2 + n3) / 3).toFixed(1);

console.log(media);

if (media < 5) {
  console.log(`média: ${media}. Reprovado(a).`);
} else if (media >= 5 && media <= 7) {
  console.log(`média: ${media}. Recuperação.`);
} else {
  console.log(`média: ${media}. Aprovado(a).`);
}

//

let peso, altura, situacao;
peso = 52;
altura = 1.52;

let imc = (peso / (altura * altura)).toFixed(2);

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

console.log(`IMC ${imc} - ${situacao}`);

//

let precoProduto, pagamento, precoFinal;
// 1 = débito = 10% desconto
// 2 = dinheiro ou pix = 15% desconto,
// 3 = 2x = preço normal,
// 4 = mais de 2x = juros de 10%
precoProduto = 39.99;
pagamento = 2;

if (pagamento === 1) {
  precoFinal = precoProduto - precoProduto * 0.1;
} else if (pagamento === 2) {
  precoFinal = precoProduto - precoProduto * 0.15;
} else if (pagamento === 3) {
  precoFinal = precoProduto;
} else {
  precoFinal = precoProduto + precoProduto * 0.1;
}
console.log(`R$ ${precoFinal.toFixed(2)}`);

