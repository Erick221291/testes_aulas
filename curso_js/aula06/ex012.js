
let agora = new Date()
let hora = agora.getHours()
//let hora = new Date().toLocaleTimeString();;
console.log(`Agora são ${hora} horas`);
if(hora < 12){
    console.log("Bom dia !!");
}else if(hora < 18 ){
    console.log("Boa tarde!");

}else{
    console.log("Boa noite!");
}