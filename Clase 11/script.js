// objetos literales

let profesor1 = {
    nombre : "Esteban",
    apellido: "Piazza",
    rol: "Docente",
    Edad: 29,
    enActividad: true
    // par clave:valor,
    //
}

console.log(profesor1.nombre)


/**********/

let usuarioInstagram ={
    id:"1",
    mail:"",
    telefono:"",
    usuario:"",
    contrasenia:"",
    nombre:"",
    apellido:"",
    fechaDeNacimiento:"",
    cantidadDeFotos:"",
    usuariosQueSigue:"",
    usuariosSeguidores:"",
}
console.log(usuarioInstagram.id)
let usuarioLinkedin={
    id:"",
    nombre:"",
    apellido:"",
    experienciaProfesional:"",
    formacionAcademica:"",


}
console.table(profesor1)

let usuarioTinder={
    id:"",
    nombre:"",
    apellido:"",
    fechaDeNacimiento:"",
    genero:"",
    gustosMusicales:"",
    facultad:"",
    queBusca:"",
}


let usuarios = [{
    "id": 1,
    "first_name": "Bobby",
    "last_name": "McKerron",
    "email": "bmckerron0@ustream.tv",
    "gender": "Male",
    "ip_address": "100.72.171.52"
  }, {
    "id": 2,
    "first_name": "Susanne",
    "last_name": "Doiley",
    "email": "sdoiley1@psu.edu",
    "gender": "Female",
    "ip_address": "82.48.162.174"
  }, {
    "id": 3,
    "first_name": "Allistir",
    "last_name": "Vinter",
    "email": "avinter2@go.com",
    "gender": "Male",
    "ip_address": "234.238.28.76"
  }, {
    "id": 4,
    "first_name": "Anya",
    "last_name": "Cawte",
    "email": "acawte3@yelp.com",
    "gender": "Non-binary",
    "ip_address": "160.139.138.204"
  }, {
    "id": 5,
    "first_name": "Cristian",
    "last_name": "Grouvel",
    "email": "cgrouvel4@feedburner.com",
    "gender": "Male",
    "ip_address": "223.81.57.72"
  }, {
    "id": 6,
    "first_name": "Blisse",
    "last_name": "Egalton",
    "email": "begalton5@google.ca",
    "gender": "Female",
    "ip_address": "202.58.249.28"
  }, {
    "id": 7,
    "first_name": "Shanda",
    "last_name": "Ramsdell",
    "email": "sramsdell6@addtoany.com",
    "gender": "Female",
    "ip_address": "237.87.204.21"
  }, {
    "id": 8,
    "first_name": "Cindy",
    "last_name": "McCourt",
    "email": "cmccourt7@nifty.com",
    "gender": "Female",
    "ip_address": "95.94.186.35"
  }, {
    "id": 9,
    "first_name": "Clareta",
    "last_name": "Izacenko",
    "email": "cizacenko8@google.de",
    "gender": "Female",
    "ip_address": "39.45.27.11"
  }, {
    "id": 10,
    "first_name": "Starlin",
    "last_name": "Gerriet",
    "email": "sgerriet9@google.it",
    "gender": "Female",
    "ip_address": "84.99.246.164"
  }]

  console.log(usuarios)
  console.table(usuarios)


  // Arrays - vector - lista
  const NOMBRES = ["Esteban","Valentina","Valentin","Guadalupe"]
  //4 elementos, del 0 al 3
  console.log(NOMBRES)
  console.log(NOMBRES[1])
  console.log(NOMBRES[0])

const CARRITO = []
console.log(CARRITO)
CARRITO.push("hola") //agregar un elemento al final
console.log(CARRITO)
CARRITO.push("chau")
console.log(CARRITO)
CARRITO.pop() //elimina el ultimo elemento
console.log(CARRITO) // LAST IN - FIRST OUT (LIFO) (PILA)
CARRITO.unshift("Unshift") //agrega un elemento al principio
console.log(CARRITO)
CARRITO.shift() //elimina el primer elemento
console.log(CARRITO)// FIRST IN - FIRST OUT (FIFO) (COLA)
console.log(CARRITO.length)

const ARRAYDEVARIASCOSAS = ["Esteban",29,true]
console.log(ARRAYDEVARIASCOSAS)

const Indices = [0,1,2]
const NOMBRESUSUARIOS = ["asd","dsa","wasd"]
const APELLIDOSUSUARIOS = ["perez","dominguez","guiterrez"]

console.log(APELLIDOSUSUARIOS.includes("perez"))
console.log(Indices.length>2)

let ultimoValor = NOMBRESUSUARIOS.pop()
console.log(ultimoValor)

const EQUIPOS = ["BOKE","RIVER","BOKE"]
console.log(EQUIPOS.indexOf("BOKE"))
console.log(EQUIPOS.lastIndexOf("BOKE"))

// push - pop
// shift - unshift
// splice - slice
// join - toString
// indexOf - lastIndexOf - includes

/* let nombre = "Estenba"
console.log(nombre[0])

console.log(nombre.toUpperCase()) */
