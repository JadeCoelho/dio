//tabuada

let tabuada = [];

// function criaTabuada(n){
//     for (let i = 0; i < 11; i++) {
//         tabuada.push(n * i)
//     }
//     return tabuada
// }
function criaTabuada(n) {
  for (let i = 0; i <= 10; i++) {
    tabuada.push(`${n} x ${i} = ${n * i}`);
  }
  return tabuada;
}
console.log(criaTabuada(2));
console.log(criaTabuada(3));

//imprimindo números
const nums = [9, 9, 4, 4, 0, 6, 3, 1, 9];

function listaNum(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
      console.log(n[i]);
    }
  }
}

listaNum(nums);
