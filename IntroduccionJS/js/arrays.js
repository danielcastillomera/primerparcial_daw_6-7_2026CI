//areglos o arrays

const numeros =[1, 2, 3, 4, 5];
console.log(numeros);
console.table(numeros); //mostrar el arreglo en forma de tabla

const meses = new Array("Enero", "Febrero", "Marzo"); //menos comun

const arreglo = [
    "Hola",
    true,
    20,
    { nombre: "Daniel", edad: 21 },
    [1, 2, 3],
];
console.table(arreglo);
console.log(arreglo[3]);

//conocer el tamaño del arreglo

console.log(numeros.length); //tamaño del arreglo

//iterar todo el arreglo
numeros.forEach(function(numero){
    console.log(numero);
});