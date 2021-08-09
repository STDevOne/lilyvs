//.map
const dobles = [7,10].map(function(numero){
   return numero * 2;
});

const productos = [
    {nombre : "Tenis A",precio : 25.25},
    {nombre : "Tenis B",precio : 50.25},
    {nombre : "Tenis C",precio : 60.25},
];
const valorRetorno = productos.map(function(producto){
    if (producto.precio < 50) return producto;

    return {
        ...producto, //objeto nuevo
        precio : producto.precio * 0.9 //aplicando descuento
    }
});

//--
const nombreProducto = productos.map(function(producto){
    return producto.nombre;
});
//--
const nombreProducto = productos.map(producto => producto.nombre);
//--
const nombreProducto = productos.map(({nombre}) => nombre);

//.filter

const giveMeBaratos = producto => producto.precio < 50; //predicado
const giveMeCaros = producto => !giveMeBaratos(producto); //predicado

const precioBarato = productos.filter(giveMeBaratos);
const precioCaro = productos.filter(giveMeCaros);

const arraySinRepetidos = [1,2,3,4,5,6,1,3,5].filter(function (numero,index,arrayOriginal) {
    return index === arrayOriginal.indexOf(numero);
});


//.reduce
const responseAcumulador = ["Miguel","Liliana","Ricardo","Jessica","Hilda","Froy","Raul","Alejandro"].reduce((acumulador,persona,index,arrayOriginal) => {
    return acumulador + " " + persona;
},"");

const responseAcumulador = [15,15,15,20].reduce((acumulador,valor,index,arrayOriginal) => {
    return acumulador + valor;
},1);
