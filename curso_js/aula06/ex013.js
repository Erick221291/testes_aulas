let dia = new Date().toLocaleString();
console.log( dia)
let agora = new Date();
let diaSem = agora.getDay();
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log(`${dia} Domingo`)
        break
    case 1:
        console.log(`${dia} segunda-feira`)
        break
    case 2:
        console.log(`${dia} Terça-feira`)
        break
    case 3:
        console.log(`${dia} Quarta-feira`)
        break    
    case 4:
        console.log(`${dia} Quinta-feira`)
        break 
    case 5:
        console.log(`${dia} Sexta-feira`)
        break 
    case 6:
        console.log(`${dia} Sábado`)
        break  
    default:
        console.log("[ERRO] comando invalido");
        break
}      