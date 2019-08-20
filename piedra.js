let user1 = prompt("Dame el primer")
let user2 = prompt("Dame el segundo")


/*if (user1 == user2) {
    console.log("Empate");
}  else 
    switch (user1) {
        case "piedra":
            if(user2 == "papel"){
                resultado = "gana2"
            } else {
                resultado = "gana1"
            }
            break;
        case "papel":
            break;
        case "tijera":
            break; 
    }*/

let resultado
if(user1 == user2){
    resultado = "empate";
    console.log("aoaososo")
    

}  else {
    switch (user1) {
        case "piedra":
            resultado = user2 == "papel" ? "gana 2" : "gana 1"
                break;
        case "papel":
            resultado = user2 == "piedra" ? "gana 1" : "gana 2"
            break;
        case "tijera":
            resultado = user2 == "piedra" ? "gana 2" : "gana 2"
            break; 
    }
}

console.log(resultado);