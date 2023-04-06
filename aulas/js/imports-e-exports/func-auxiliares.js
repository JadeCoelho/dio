//mock = simular; mockado = simulado
const alunos = [5, 50, 10, 98 , 23];
let i = 0;
function gets() {
  let aluno = alunos[i];
  i++;
  return aluno;
}

function print(texto) {
  console.log(texto);
}

module.exports = {
  gets,
  print,
};
