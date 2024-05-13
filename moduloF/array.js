let array = ['alexsa', 'victor', 'juntos para sempre', 'vito ama alexsa demais', 'lexsa ama vito demais', 'jaja eles tao casado']

console.log(array)

let array2 = [1508, 17, 16, 13, 4]

console.log('\n', array2)

console.log('tenho comigo os valores:',array, 'e', array2)

console.log(`tenho comigo o valor da segunda array, que é: ${array2}`)

console.log(`\n agora tenho comigo o valor do primeiro array, que é: ${array}`)

//com o template string os valores vem sem os cochetes, ja na concatenação normal vem com cochete


array2.push(8)

console.log(`${array2}`)

array2[6] = 11

console.log(`\n ${array2}`)

//com esses dois métodos é possível adicionar itens à um array já existente

console.log(`\n ${array2.sort()}`)

//coloca um array em ordem crescente (colocar o sort antes de adicionar um elemento fará com que o elemento não siga a ordem crescente, ja q o sort será executado antes do elemento)

array2.push()
array2.sort()

array2.sort()
array2.push()

//influencia na execução do código

for(let c = 0; c < 6; c ++) {
    console.log(array[c])
}
console.log('\n')

for (let pos in array) {
    console.log(`a posição ${pos} tem valor ${array[pos]} `)
}
//um loop resumido q só funciona para array
for (pos in array2) {
    console.log(`${array2[pos]}`)
}

