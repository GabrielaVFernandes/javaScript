function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = 'Agora são ' + hora + ' horas e ' + min + ' minutos.'
    if (hora >= 0 && hora <12) {
        //bom dia 
        img.src = 'fotomanha.png'
        document.body.style.background = '#efb47c'
    } else if (hora >=12 && hora <=18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#D74B12'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#041750'
    }
}




