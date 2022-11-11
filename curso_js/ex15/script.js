function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano");
    let res = document.querySelector("div#res");
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente.")
    }else {
        let fSex = document.getElementsByName("radsex");
        let idade = ano - Number(fano.value);
        let genero = "";
        let img = document.createElement("img");
        img.setAttribute("id", "foto")
        if(fSex[0].checked){
            genero ="Homem"
            if(idade <=10){
                img.setAttribute("src","bb.png")
            }else if(idade < 21){
                img.setAttribute("src","jovemM.png")
                
            }else if ( idade <50){
                img.setAttribute("src","homem.png")
                
            }else{
                img.setAttribute("src","vovoM.png")
                
            }
        }else if (fSex[1].checked){
            genero = "Mulher";
            if(idade >=0 && idade <=10){
                img.setAttribute("src","bbM.png")
            }else if(idade < 21){
                img.setAttribute("src","jovemF.png")
            }else if ( idade <50){
                img.setAttribute("src","mulher.png")
            }else{
                img.setAttribute("src","vovoF.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}