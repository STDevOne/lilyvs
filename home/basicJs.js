var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});

var encuentraArticulos = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo)){
   return articulo.costo <= 700
});

// .pop() .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4.
// .unshift()
// .shift() .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
// .push() El método .push() nos permite agregar uno o más elementos al final de un array.
for(articulo of articulos){
    console.log(articulo);
}}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

if(coupons.includes("JuanDC_es_Batman")){
    console.log("entro");
}

const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

function esCereza(fruta) {
    return fruta.nombre === 'cerezas';
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }

[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    console.log("vector: " + vector);
    return valorAnterior + valorActual;
});

console.log(parseInt(2.5));

[2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9].sort(function (uno,dos) {
    console.log(uno + " " + dos);
});


var list = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9].map(function (uno,dos) { //// ordenar
    console.log(uno + " " + dos);
});

Object.entries(list); //convertir una lista en un array

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let ultNumSplice = numeros.splice(7, 3);

let ultNumSlice = numeros.slice(7, numeros.length)
