var btn = document.getElementById('btn')
btn.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var inputt = document.getElementById('inputt')

    if (inputt.value.length == 0 || inputt.value > ano) {
        window.alert('[ERRO] Verifique se os dados estão corretos e tente novamente')
    }
    
}
