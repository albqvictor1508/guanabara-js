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



function adicionar() {
    if (itsNumber(number.value) <= 0 && itsNumber(number.value) != inLista) {

    }
}