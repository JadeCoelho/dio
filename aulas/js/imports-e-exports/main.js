//object destructuring = destruturação de objeto
// const { nome } = pessoa == const nome = pessoa.nome

const { gets, print } = require("./func-auxiliares");
// print(gets());

//alunos, sorteio de numeros de 1 a 100, mostrar numero maior
// let a1 = 5,
//   a2 = 50,
//   a3 = 10,
//   a4 = 98,
//   a5 = 23;

// const alunos = [a1, a2, a3, a4, a5];

// function mostraMaior(n) {
//   let nMaior = 0;
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] > n[i + 1]) {
//       nMaior = n[i];
//     }
//   }
//   console.log(nMaior);
// }

// mostraMaior(alunos);

const numsSorteados = [];

for (let i = 0; i < 5; i++) {
  const numSorteado = gets();
  numsSorteados.push(numSorteado);
}

let nMaior = 0;
for (let i = 0; i < numsSorteados.length; i++) {
  let numSorteado = numsSorteados[i];
  if (numSorteado > nMaior) {
    nMaior = numSorteado;
  }
}
print(nMaior);
