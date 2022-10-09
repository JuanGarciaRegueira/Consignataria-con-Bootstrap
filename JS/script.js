let i = 0;


while(saludo != "Hola" && saludo != "hola"){
    var saludo = prompt("Salude con un Hola para ingresar");
    i++;
}

alert("Bienvenido");

/*  
let LoteA = {
    nombre: "Vacas",
    precio: 180000,
    stock: 200,
}
let LoteB = {
    nombre: "Toros",
    precio: 500000,
    stock: 50,
}
*/

/* for(const Lote of listaLotes){
    if(Lote.stock > 0){
        listaCategoria.push(Lote.categoria)

    }
    
} */

function Lote(categoria, precio, stock){
   this.categoria = categoria;
   this.precio = precio;
   this.stock = stock || 0; 
   this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}

let loteA = new Lote("Vacas", 180000, 200)
let loteB = new Lote("Toros", 500000, 50)
let loteC = new Lote("Vaquillonas", 100000, 0)
let loteD = new Lote("Novillitos", 90000, 0)

let listaLotes = [loteA, loteB, loteC, loteD]

let listaLotesConSTock = listaLotes.filter((lote) => lote.stock > 0)

let listaCategoria = listaLotesConSTock.map((lote) => lote.categoria)





for(const detalle in loteA){
    console.log(loteA[detalle])
}

for(const detalle in loteB){
    console.log(loteB[detalle])
}


console.log(loteA)
console.log(loteB)


let precioTotal = 0


alert( "estos son los lotes a vender: \n - " + listaCategoria.join("\n - "))


//Ciclo de compra

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)

}


function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
     
    }
    else{
        alert("Actualmente tenemos " + stock + " de esta categoria")
    }


}


let cantidadCompra = parseInt(prompt("Que cantidad de lotes desea comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){



let loteCompra = prompt(" Ingrese que lote quiere comprar: \n1 - Vacas\n2- Toros")


if (loteCompra.toLowerCase() == 'vacas'){
    let cantidadLoteA = prompt("ingrese que cantidad de " + loteA.categoria + " desea comprar:")
    calculoStock(cantidadLoteA, loteA.stock, loteA.precio)
    loteA.restarStock(cantidadLoteA)
    
    

}
else if(loteCompra.toLowerCase() == 'toros'){
    let cantidadLoteB = prompt("ingrese que cantidad de " + loteB.categoria + " desea comprar:")
    calculoStock(cantidadLoteB, loteB.stock, loteB.precio)
    loteB.restarStock(cantidadLoteB)
    
    
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






