//Prueba Live Server
console.log("Pre Entrega 1 - Guiñazu Santiago")

//E-commerce: Botingold - Compra y venta de Botines

// 1) Ingreso Usuario Nuevo o Usuario cargado ("DB" con 3 intentos)
alert("Bienvenido a BotinGold - El lugar para comprar o vender su botin de oro")

let ingreso = Number(prompt("Paso 1 - Ingrese 1 si ya es Usuario o 2 para crear su Usuario"))

let passwordBD = "santi123"
let userBD = "santiago"

let password = ""
let user = ""

let intentos = 0

while (ingreso != 1 && ingreso != 2) {
    alert("Numero Incorrecto - 1 si ya es Usuario o 2 para Nuevo Usuario")
    ingreso = Number(prompt("Ingrese 1 o 2"))
} if (ingreso === 1) {
    do {
        user = prompt("Ingrese Usuario")
        password = prompt("Ingrese contraseña")
        intentos++
    } while (user !== userBD && password !== passwordBD && intentos < 3) 
    
    if (intentos === 3 ) {
        alert("Datos incorrectos, reintente mas tarde")
    } else {
        alert("Bienvenido/a"+" "+user+" "+"a BotinGold")
    }
} else if (ingreso === 2) {
        let nombreCompleto = prompt("Ingrese su nuevo Usuario")
        let nuevaContrasenia = prompt("Ingrese su nueva Contraseña")
        alert("Su usuario se creo correctamente:" +" "+ nombreCompleto)
} else if ((ingreso !== 1 || ingreso !== 2)) {
    alert("Ingrese 1 si es Usuario o 2 para crear Usuario nuevo")
}


// 2) Eleccion de Presupuestos
alert("Paso 2 - Elegir el presupuesto de su Botin en pesos")

let presupuesto = Number(prompt("Ingrese su presupuesto en pesos"))

if ((presupuesto >= 0)&&(presupuesto<=5000)){
    alert("Presupuesto bajo")
} else if ((presupuesto >= 5001)&&(presupuesto<=15000)){
    alert("Presupuesto medio")
} else if (presupuesto>15000) {
    alert("Presupuesto alto")
} else {
    alert("Cargar un numero mayor a 1")
}


// 3) Eleccion del talle de tu BotinGold
alert("Paso 3 - Elegi tu Talle del BotinGold")

let talle;

do { 
    talle = prompt("Ingrese entre 38 y 44")
} while (talle < 38 || talle > 44);

alert("El talle seleccionado es:"+" "+talle)


// 4) Sumatoria de Articulos elegidos - "Suponiendo que elige 1 o mas articulos"
alert("Paso 4 - Sumamos los articulos elegidos (Maximo 3 articulos por pedido)")


let articulo1 = Number(prompt("Ingrese precio del primer articulo"))
let articulo2 = Number(prompt("Ingrese precio del segundo articulo"))
let articulo3 = Number(prompt("Ingrese precio del tercer articulo"))
let precioFinal = sumar(articulo1, articulo2, articulo3, "+")

function sumar(articulo1, articulo2, articulo3) {
    let precioFinal
    precioFinal = articulo1 + articulo2 + articulo3
    return precioFinal
}
alert("La sumatoria de sus articulos elegidos es:"+" "+ precioFinal)
console.log(precioFinal)


// 5) Descuento - "Descuentos 20% o 30%"
alert("Paso 5 - Si tiene un codigo de Descuento ingreselo")

let codigoBD20 = "descuento20"
let codigoBD30 = "descuento30"

let descuento = prompt("Ingrese codigo de descuento").toLowerCase()

if (descuento == codigoBD20) {
    let descuento20 = (precioFinal-(precioFinal*0.20))
    alert("El precio final con descuento del 20% incluido es:"+" "+descuento20)
} else if (descuento == codigoBD30){
    let descuento30 = (precioFinal-(precioFinal*0.30))
    alert("El precio final con descuento del 30% incluido es:"+" "+descuento30)
} else {
    alert("Codigo ingresado Incorrecto")
}