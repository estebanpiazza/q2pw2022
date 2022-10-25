let edad = parseFloat(prompt("Ingrese su edad: "))
console.log(typeof(edad))

function condicional(parametro){
 if(parametro > 18){ 
    alert("Puede ingresar")
 }else{
    alert("No puede ingresar")
 }
}

condicional(edad)

/*
if parametro > 18:
    print("Puede ingresar")
else:
    print("No puede ingresar")
*/

edad > 18 ? console.log("puede pasar") : console.log("no puede pasar")


function IMC(peso,altura){
    let indiceMasaCorporal = peso / (altura**2)
    if (indiceMasaCorporal < 18.5){
        console.log("Su IMC es Peso inferior al normal")
    }else if(indiceMasaCorporal < 25 ){//elif 
        console.log("Su IMC es Normal")
    }else if(indiceMasaCorporal< 30){
        console.log("SU IMC es Superior al normal")
    }else{
        console.log("SU IMC es Obesidad")
    }

}

IMC(85,1.75)

function queHagoDias(dia){
    switch(dia){
        case "Monday":
            console.log("Party (Lunes)")
            break;
        case "Tuesday":
            console.log("Party (Martes)")
            break;
        case "Wednesday":
            console.log("Party (Miercoles)")
            break;
        case "Saturday":
            console.log("Weekend Party (Sabado)")
            break;
        default:
            console.log("Error en el ingreso")
            break;
    }
}

if(dia == "Lunes" || dia == "lunes" || dia == "lun3s"){
    //typo
}

/*
1) Dados 3 numeros por parametros, determinar cual es el mayor.
2) Dado un numero, determinar si es par o impar.
3) Dada una serie de 6 numeros, mostrar los que son pares y los que son impares (Deben estar en dos arrays distintos)
4) Dado un numero determinar si es primo o no
5) Dado un numero aleatorio, pedirle al usuario un numero, y decirle si es mayor o menor o adivino el numero
let numeroRandom = parseInt((Math.random())*10)
6) Dado un año confirmar si fue biciesto o no
Plus:
1) Dado una palabra calcular la cantidad de letras
*/

