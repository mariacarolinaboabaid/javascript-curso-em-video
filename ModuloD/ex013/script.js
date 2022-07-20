function carregar(){
    var mensagem = window.document.getElementById("txtmensagem")
    var img = window.document.getElementById("foto")
    var agora = new Date()
    var hora = agora.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = "#559CAD"
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.peq.jpg'
        document.body.style.background = "#F19A3E"
    } else {
        img.src = 'imagens/noite.peq.jpg'
        document.body.style.background = "#555358"
    }
} 