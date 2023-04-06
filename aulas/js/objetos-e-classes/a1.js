// objetos são coleções de dados agrupados em pares dinâmicos de chave e valor
//o "this" dentro de uma função que está dentro (método) de um objeto assume o nome daquele objeto
//classe é uma definição (define a estrutura), instância é uma ocorrência (usa a definição/base para aplicar novos valores)
//um constructor dentro de uma classe serve para que a cada instância seja exigido os valores dos parâmetros que foram passados no constructor

const pessoa = {
  nome: "Jade",
  idade: 22,
  descrever: function () {
    console.log(`Meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`);
  },
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa["nome"]);
pessoa["idade"] = 23;
console.log(pessoa.idade);

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

const jade = new Pessoa("Jade", 22);
// jade.nome = "Jade";
// jade.idade = 22;
console.log(jade);

//jade é uma instância

function comparaPessoas(p1, p2){
    if (p1.idade > p2.idade){
        return `${p1.nome} é mais velho(a) que ${p2.nome}`
    } else if (p1.idade < p2.idade){
        return `${p2.nome} é mais velho(a) que ${p1.nome}`
    } else {
        return `${p1.nome} e ${p2.nome} têm a mesma idade.`
    }
}

const yuri = new Pessoa('Yuri', 23)
const guelisson = new Pessoa('Guelisson', 2)
const b2 = new Pessoa('B2', 2)

console.log(comparaPessoas(yuri, guelisson));
console.log(comparaPessoas(jade, guelisson));
console.log(comparaPessoas(yuri, jade));
console.log(comparaPessoas(guelisson, b2));