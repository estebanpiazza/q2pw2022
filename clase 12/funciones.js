function saludar(){
    console.log("Hola")
} // Declaración de una función

saludar() // invocación de una función

function sumar(num1,num2){
 console.log(num1+num2)
}

sumar(1,2)

function restar(num1,num2){
    return num1 - num2
}

restar(10,5)

function mostarPorConsola(string, dato){
    console.log(`${string} ${dato}`)
}

mostarPorConsola("el resultado es:",restar(10,5)) 


mostarPorConsola("el resultado es: ", restar(18,5))  // callback 

function multiplicar(a,b){
    return `el resultado de la multiplicación entre ${a} y ${b} es ${a*b}`
    //template literal
}

mostarPorConsola(multiplicar(2,2))

let sumarFlecha = (a, b) => a + b + 100;

mostarPorConsola(sumarFlecha(1,2))