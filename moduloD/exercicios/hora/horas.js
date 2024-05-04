function carregar() {
    var hoje = new Date()
    var agora = hoje.getHours()
    var tempo = document.getElementById(`tempo`)
    var hora = document.getElementById(`hora`)
    hora.innerHTML = `Agora sao ${agora} horas. `
    var img = document.getElementById('imagem')

 if(agora > 23 || agora < 6)  {
    tempo.innerHTML = `Hora da madrugada`
    document.body.style.background = `#24022c`
    img.src = 'madrugada.jpeg'
}
else if (agora < 12) {
    tempo.innerHTML = `Hora do dia`
    document.body.style.background = `#f5f589`
    img.src = 'dia.jpeg'
}
else if (agora < 18) {
    tempo.innerHTML = `Hora da tarde`
    document.body.style.background = `#f3bf7b`
    img.src = 'tarde.jpeg' 
}
else if (agora < 23) {
    tempo.innerHTML = `Hora da noite`
    document.body.style.background = `#11013d`
    img.src = 'noite.jpeg'
}
}
