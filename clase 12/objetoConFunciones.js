let producto = {
    id:"1",
    nombre: "chipa",
    precioPorCuarto: 800,
    incluirIva: function (){
        return this.precioPorCuarto * 1.21
    }
}

console.log(producto.incluirIva())