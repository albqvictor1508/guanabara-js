var btn = document.getElementById('btn')
btn.addEventListener('click', verificar)

function verificar() {
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let input3 = document.getElementById('input3')
    let res = document.getElementById('res')


    if (input1.value.length == 0 || input2.value.length == 0 || input3.value.length == 0 ) {
        alert('bota numero seu merda')
    }
    else {
        let inicio = Number(input1.value)
        let fim = Number(input2.value)
        let passo = Number(input3.value)
        if (passo <= 0) {
            alert('Não pode macaco, vamo considerar que é passo 1')

            passo = 1
        }
        if (inicio < fim) {
            //contagem crescente
            for (let c = inicio; c <= fim; c += passo) {

                res.innerHTML += `\u{1F51C} ${c} `      
            }
        }
        else {
            //contagem decrescente

            for (let c = inicio; c >= fim; c -= passo) {

                res.innerHTML += `\u{1F51C} ${c}`

            }
        }
    }
    
}
res.innerHTML += `Contando: \u{1F3C1}`