function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        //bom dia
        img.src = "Manha.png"
        document.body.style.background = '#fe9594'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = "Tarde.png"
        document.body.style.background ='#fa862d'

    }else {
        // boa noite
        img.src = "Noite.png"
        document.body.style.background = '#23373c'
    }
}

