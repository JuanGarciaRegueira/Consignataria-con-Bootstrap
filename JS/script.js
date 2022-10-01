let i = 0;


while(saludo != "Hola" && saludo != "hola"){
    var saludo = prompt("Salude con un Hola para ingresar");
    i++;
}

alert("Bienvenido");



let nombreLoteA = "Vacas"
let precioLoteA = 150000
let stockLoteA = 100

console.log(nombreLoteA)

let nombreLoteB = "Toros"
let precioLoteB = 300000
let stockLoteB = 50

console.log(nombreLoteB)

let precioTotal = 0


alert( "estos son los lotes a vender: \n - Vacas\n - Toros")


//Ciclo de compra

function precio(cantidad, precio){
    precioTotal += (cantidad * precio)

}


let cantidadCompra = prompt("Que cantidad de lotes desea comprar:")

for(let i = 0; i < cantidadCompra; i = i + 1){



let loteCompra = prompt(" Ingrese que lote quiere comprar: \n1 - Vacas\n2- Toros")


if (loteCompra.toLowerCase() == 'vacas'){
    let cantidadLoteA = prompt("ingrese que cantidad de " + nombreLoteA + " desea comprar:")
    if(cantidadLoteA <= stockLoteA){
        precio(cantidadLoteA, precioLoteA)
     
    }
    else{alert("Actualmente tenemos " + stockLoteA + " Vacas")}
    

}
else if(loteCompra.toLowerCase() == 'toros'){
    let cantidadLoteB = prompt("ingrese que cantidad de " + nombreLoteB + " desea comprar:")
    if(cantidadLoteB <= stockLoteB){
        precio(cantidadLoteB, precioLoteB)
    }
    else{alert("Actualmente tenemos " + stockLoteB + " Toros")}
    
    
}
else {
    alert("No contamos con ese Lote o Producto")
}


}
if(precioTotal != 0){
    alert("el precio total es: " + precioTotal)
}






let texto = prompt("Ingrese SI para seguir comprando \nIngrese NO para salir")

if (texto == "SI") {
    alert("Gracias por su respuesta")
}
else {
    alert("Lo esperamos para mas Lotes")
}

function proximamente (categoriaA, categoriaB) {
    alert( "Proximamente ingresaran  " + categoriaA + " y " + categoriaB)
}

proximamente("Vaquillonas", "Novillitos")
proximamente("Terneros","Terneras")






