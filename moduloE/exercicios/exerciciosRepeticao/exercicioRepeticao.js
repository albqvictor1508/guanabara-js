
function nota(n) {

    if (Number(n) == 0 || Number(n) == 100) {
        console.log('bota numero seu bosta')
    }
    else {
        if (Number(n) <= 6) {
            let c = 1
            while (c <= 5) {
                console.log('macaco burro n passoukkkkkkkkkkkkkkkkkkkkkkk')
                c++

            }
        }
        else {
            for (c=1;c<=3;c++) {
                console.log(`passou pai ${c + 'viado'}`)
                
            }
        }
    }
}
console.log(nota(7))

//as estruturas de repetição são a estrutura de um looping, ou seja, ditarão como o loop irá acontecer 

//o loop em si não exibe conteúdo na tela, podendo ser utilizado para qualquer tipo de situação

//while(teste lógico do loop) {comandos para serem executados quando o loop for executado}

//for (declaração de variável;teste lógico do loop; incremento do loop (a quantidade de vezes que vai acontecer, se vai ser em ordem crescente ou decrescente, se vai somar ou subtrair, entre outros) )