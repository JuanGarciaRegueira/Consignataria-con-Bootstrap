/* let nombre = prompt("ingrese su nombre: ")

let catalogo = document.getElementById("catalogo")

catalogo.innerText = "Bienvenido " + nombre
console.log(catalogo.innerText) */

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









function Lote(categoria, precio, stock, clase, img){
   this.categoria = categoria;
   this.precio = precio;
   this.stock = stock || 0;
   this.clase = clase
   this.img = img; 
   this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}

let loteA = new Lote("Vacas", 180000, 200, "hembras", "..//imagenes/fotoVacas.jpg")
let loteB = new Lote("Toros", 500000, 50, "machos", "..//imagenes/toros.jpg")
let loteC = new Lote("Vaquillonas", 100000, 0, "hembras")
let loteD = new Lote("Novillitos", 90000, 0, "machos")

let listaLotes = [loteA, loteB, loteC, loteD]

let listaLotesConSTock = listaLotes.filter((lote) => lote.stock > 0)

let listaCategoria = listaLotesConSTock.map((lote) => lote.categoria)



let precioTotal = 0



let catalogo = document.getElementById("catalogo")

function render(lista){

    catalogo.innerHTML = ""

    for(const lote of lista){

        let card = document.createElement("div")

        card.className = "card"

        card.innerHTML = `<h2>${lote.categoria}</h2><p>Precio: $${lote.precio}</p><img width="560" height="315" src="${lote.img}">`

        

        catalogo.append(card)


    }
}
render(listaLotesConSTock)

let claseElegida = ''

let clases = document.getElementById("clases")
clases.addEventListener("change", ()=>{claseElegida = clases.value})

let botonFiltro = document.getElementById("filtrar")
botonFiltro.addEventListener("click", filtro)


function filtro(){
    let filtroActual = listaLotes.filter((lote)=>lote.clase == claseElegida)
    render(filtroActual)
}

let botonAll = document.getElementById("all")

botonAll.addEventListener("click", ()=>{render(listaLotesConSTock)})


localStorage.setItem("Lote", JSON.stringify (listaLotes))

let valor = JSON.parse(localStorage.getItem("Lote"))

console.log(valor)



/* alert( "estos son los lotes a vender: \n - " + listaCategoria.join("\n - "))


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
 */





