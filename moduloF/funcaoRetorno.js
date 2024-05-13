//agora trabalharemos com funções que possuem parâmetros



function par(n) {

  if  (n % 2 == 0) {
    return `${n} é par`
  }
  else {
    return `${n} é impar`
  }
}

let parametro = par(2508)
console.log(parametro)

//esse parametro vai ser jogado dentro da função e vai passar pela condição 

function divisao(n1, n2) {
    return n1 / n2 
}


console.log(divisao(80, 8))

//nesse exemplo de função, se um dos valores não é passado, o próprio JavaScript o considera "undefined", porém

function soma(n3=0, n4=0) {
    return n3 + n4
}

// se eu igualar o parametro a algum valor, se eu nao der esse valor no console.log, o JavaScript considera o valor q foi igualado

console.log(soma(15))

let v = function (b) {

    return `v = ${b * 2}`
}
console.log(v(6))

//outra forma de usar uma function com parametro

function fatorial(n) {

    let fat = 1
    for (c = n; c > 1; c--) {
     fat *= c
     
    }
    return fat
}
console.log(fatorial(5))