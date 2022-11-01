// while - do while - for
let numero = 0
let x = 11
while ( x < 10 ){
    numero++ 
    x++
    console.log(numero)
}

do {
    console.log("hola")
} while (x < 10);

// for ( variable contadora ; condicion ; variación )
/* for ( let i = 0; i > 10; i++ ){
    console.log(i)
}
 */

let nombre = "Esteban"
let frutas = ["manzana","anana","pera"]
for ( let i = 0; i < frutas.length;i++){
    console.log(frutas[i])
}

let mail = "asd@asd.com"

for (let i = 0; i < mail.length;i++){
    if(mail[i]==="@"){
        return console.log("hay un arroba");
    }
}

let estudiantes = [
{nombre:"valentin",apellido:"Beltramo",},{nombre:"valentina",apellido:"pardiñas",},{nombre:"stefania",apellido:"ranucci",}
]
// JSON javascript object Notation



for (let i = 0 ; i < estudiantes.length;i++){
    console.log(estudiantes[i])
    console.log(estudiantes[i].nombre)
}


let frutas2 = ["manzana","anana","pera"]

console.log("------------------------");
/* for ( let fruta in frutas2){
    console.log(fruta)
} */


frutas2.forEach(fruta => console.log(fruta))
for ( let i = 0; i < frutas.length;i++){console.log(frutas[i])}

let notas = [1,2,3]
notas.forEach(nota => console.log(nota+1))


/*
1) Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24, etc.

2) Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

3) Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.

4) Validar si un string es un email.
A TENER EN CUENTA:
a) debe tener un @
b) no puede tener mas de un @
c) debe haber un punto luego del arroba, no instantaneamente
d) no debe haber caracteres especiales no validos ( ñ , etc)
*/

