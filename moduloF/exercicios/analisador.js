let btnAdd = document.getElementById('btnAdd')
let btnFinish = document.getElementById('btnFinish')
let number = document.getElementById('inputNumber')
let selectLista = document.getElementById('lista')
let arr = []

btnAdd.addEventListener('click', adicionar)
btnFinish.addEventListener('click', finalizar)

function itsNumber(n) {

    if (Number(n) > 0 && Number(n) <= 100) {
        return true

        
    }
    else {
        return false
    }


}
function inLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false 
    }
}



function adicionar() {
    if (itsNumber(number.value) &&  !inLista(number.value, arr)) {
        
        arr.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `` 
        item.text = `${Number(number.value)} adicionado...`
        selectLista.appendChild(item)
        console.log(arr)
    }
    else {
        alert('Número inválido ou já encontrado na lista')
    }
    number.value = ``
    number.focus()
}
function finalizar() {
    let res = document.getElementById('resFinalizar')
    let maior = arr[0]
    let menor = arr[0]
    let soma = 0
    let media = 0 

    for (let pos in arr) {
        soma += arr[pos]
        media += arr[pos] / arr.length

        if(arr[pos] > maior) {
            maior = arr[pos]
        }
        else if (arr[pos] < menor) {
            menor = arr[pos]
        } 
    }
    res.innerHTML = ''
    res.innerHTML = `<p>Ao todo, foram postos ${arr.length} valores </p>`
    res.innerHTML += `<p>O maior número foi ${maior}</p>`
    res.innerHTML += `<p> O menor número foi ${menor}</p>`
    res.innerHTML += `<p>A soma entre os números foi ${soma}</p>`
    res.innerHTML += `<p>A media entre os números foi ${media.toFixed(2)}</p>`
    

}

//praticar estrutura de repetição, manipulação de array e função composta.
