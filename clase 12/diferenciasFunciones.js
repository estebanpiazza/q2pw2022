saludar()


function saludar(){
    console.log("hola")
}




let saludarFlecha = () => console.log("Hola en flecha")

let sumarEnFlecha = (a,b) => {
    let c = a + b
    return c
}

let restar = (a,b) => a-b
console.log(restar(10,5))
