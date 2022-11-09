console.log("Hola")
let nombreUsuario = prompt("Ingrese su nombre")
console.log(`el tipo de elemento ingresado es ${typeof(nombreUsuario)}`)
document.getElementById("parrafoPrincipal").innerText="Hola"

document.getElementsByClassName("parrafosSecundarios").innerText="Soy un parrafo secundario"

document.getElementById("imagenPrincipal").style="width:100px;"

document.getElementById("nombre")

let botonSaludo = document.getElementById("saludar")

let botonSaludo2 = document.querySelector("#saludar")

botonSaludo2.addEventListener("click",saludar)

document.querySelector("saludar")
function saludar(){
    alert("Hola")
}

function validar(palabra){
    if(typeof(palabra) ==="string"){
        return palabra
    }else{
        return "El elemento no es valido"
    }
}

document.querySelector("#areaNueva").innerHTML=`<h1> Hola ${nombreUsuario} </h1> <p>Lorem ipsum</p>`

