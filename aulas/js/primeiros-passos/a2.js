//estruturas condicionais
// "==" o valor é igual, mas ignora o tipo; "===" é idêntico (valor e tipo)
let precoEtanol = 4.9,
  precoGasolina = 5.5,
  precoComb,
  litroKm = 10,
  viagemKm = 35.75,
  valorViagem,
  tipoComb = "etanol";

if (tipoComb == "etanol") {
  precoComb = precoEtanol;
}
if (tipoComb == "gasolina") {
  precoComb = precoGasolina;
}

valorViagem = ((viagemKm / litroKm) * precoComb).toFixed(2);

console.log(valorViagem);
