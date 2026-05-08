const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio: 300,
    disponibilidad: true,
    categoria: "Monitores",
};

const medidas ={
    peso: "1kg",
    medida: "1m",
};

const nuevoProducto ={...producto, ...medidas}; //con el spread operator se pueden combinar objetos
console.log(nuevoProducto);