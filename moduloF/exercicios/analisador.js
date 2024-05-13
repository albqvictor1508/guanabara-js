let btnAdd = document.getElementById('btnAdd')
let btnFinish = document.getElementById('btnFinish')
let number = document.getElementById('inputNumber')
let arr = []

btnAdd.addEventListener('click', adicionar)
btnFinish.addEventListener('click', finalizar)

function itsNumber(n) {

    if (n > 0 && n <= 100) {
        return true

        
    }
    else {
        return false
    }


}
function inLista(n, l) {

    if (l.indexOf != -1) {
        return true
    }
    else {
        return false 
    }
}


item.text = `` 
function adicionar() {
    if (itsNumber(number.value) <= 0 && itsNumber(number.value) != inLista) {
        alert('Número inválido')

    }
    else {
        let selectLista = document.getElementById('lista')
        
        arr.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `${Number(number.value)} adicionado...`
        selectLista.appendChild(item)
        console.log(arr)
    }
}
function finalizar() {
    let res = document.getElementById('resFinalizar')
    let resItem = document.createElement('p')
    resItem.text = `Ao total, teve em média ${arr} números`
    res.appendChild(resItem)
}