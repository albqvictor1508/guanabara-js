//recursividade

function fat(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fat(n - 1)
    }
}

console.log(fat(4))

//diversas formas de fazer a mesma coisa 
