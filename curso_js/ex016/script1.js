function contar(){
    let ini = document.getElementById("txti");
    let fim =  document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    
    if(ini.value.lenght === 0 || fim.value.lenght === 0 || passo.value.lenght === 0){
      window.alert("[ERRO] faltam dados!!")
    } else {
      alert("Tudo OK!")
    }
}