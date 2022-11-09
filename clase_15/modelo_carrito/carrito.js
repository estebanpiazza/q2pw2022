console.log("Hola")
let carritoCliente = []
let frutas = []
let productos = [
    {id:1,nombre:"Mouse"},
    {id:2,nombre:"teclado"},
    {id:3,nombre:"Monitor"},
]

//Si es con items sueltos
function agregarItem(item,array){
    array.push(item)
    console.log(array)
}

let boton = document.getElementById("agregarPera")

boton.addEventListener("click",agregarItem("pera",frutas),true)

const element = document.getElementById("myBtn");


function myFunction() {
 console.log("aqui")
}


let nombreUsuario = document.getElementById("nombre").addEventListener("focusout",document.getElementById("nombre").value)
console.log(nombreUsuario)