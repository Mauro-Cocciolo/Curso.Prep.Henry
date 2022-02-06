// Do not change any of the function names
/* CALLBACKS, REDUCE, FOR EACH, MAP, FILTER.

Así como cuando una función está dentro de un objeto la llamamos metodo, cuando
una funcion es argumento de otra funcion, es parametro, la llamamos CALLBACK.
Veamos:*/

function Decirholaalusuario(usuario){
  return "Hola " + usuario + "!";
}

function Deciradiosalusuario(usuario){
  return "Adios " + usuario + "!";
}

function Crearsaludo(usuario, cb){ //:puso cb para que se entienda, pero puedo poner cualquier nombre
  return cb(usuario);
}
/*
si hago:*/
Decirholaalusuario ("toni") : //me tira "Hola toni!"
Deciradiosalusuario ("toni") : //me tira "Adios toni!"
Crearsaludo("toni",  Decirholaalusuario) : //me tira "Hola toni!"
Crearsaludo("toni",  Deciradiosalusuario) : //me tira "Adios toni!"

//Yo elijo la funcion que va a funcionar como callback.









function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1) //El segundo parámetro de slice() es opcional: 
}                                //si no lo incluyes, el corte termina al final de la cadena original.
                                 //Y, en este caso, arranca desde la posicion 1.
/*Voy al run, pego la función y pongo: */
mayuscula("nabo")    // me tira Nabo
mayuscula("titi")    // me tira Titi
/*Y si le saco el 1 al slice(1) y lo dejo slice() 
entonces me tira    Nnabo
                    Ttiti */




function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()  
}
//Now, así fciona un callback: si por ej yo creo una fcion f1 que sea 
function f1(){console.log("Hola") }
//cuando yo tipee (invoque) en el RunJS f1() va a imprimir Hola. 
//Ahora, si quiero pasar esta fcion como cb (callback) escribo abajo: 
//por ejemplo, una nueva fcion f2 que sea
function f2(cb){
  cb()} 
//y así creé una fcion que me va a ejecutar un cb cuando la llame. 
//Entonces, si despues abajo escribo 
f2(f1) 
//voy a estar ejecutando esta nueva fcion que acabo de llamar, y voy a ver que 
//esta fcion f2 ejecuta a la f1 por parámetro y entonces también me va a imprimir "Hola".



function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2) 
}



function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

var suma = numeros.reduce(function (acumulador, elemento){  // el metodo reduce crea un acumulador en el que va acumulando los elementos de un array, 
  return acumulador += elemento //ac = ac + e      le digo que los sume o los multiplique o lo que sea, en este caso los suma.
                                 // Al metodo reduce, yo le paso una funcion callback que reciba los dos argumentos de acumulador y elemento.                
}, 0) // Como se trata de una suma quiero que el acumulador arranque en 0, si me pidieran multiplicar pondría 1 acá,
      // y acumulador *= elemento arriba. El resultado final de reduce siempre va a ser un unico valor, en este caso, la suma de todos los elementos del array numeros.
cb(suma) // Cuando invoque el acumulador, me va a tirar la suma de los elementos del array


// too se podría hacer con for

 
 var suma = 0

  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i]  // suma = suma + numeros[i]
  } 

 cb(suma)  


// Hay too otra manera de hacer esto mismo, que es mas corta, usando la funcion arrow con el reduce:

var suma= numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

cb(suma)  


//con reduce too puedo sumar strings, si voy al RUNJS o a Google, boton derecho, inspeccionar, console, 
//y pego lo siguiente en la console y ejecuto el console.log, me devuelve "fran":

var arr = ["f","r","a","n"]
var str = arr.reduce(function(acc, e){
  return acc += e
}, "")

console.log(str) // "fran"
str              // "fran"



// reduce, ademas de acc y e, puede bancarse too dos argumentos mas en el parentesis:
// i y src. Ej con i:


var arr = ["f","r","a","n"]
var str = arr.reduce(function(acc, e, i){
 if (i > 1) {
   return acc += e
} else {
  return acc
}
}, "")
console.log(str)  // y vualé, devuelve "an"

/*
NOW: REDUCE:

El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
devolviendo como resultado un único valor. 
Parametros: 
la funcion callback a ejecutar sobre cada elemento del array y que a su vez 
recibe a los otros parametros: 
acumulador, valor actual (estos dos son los unicos obligatorios, serian acumulador y elemento), 
indice, array, valor inicial. El valor devuelto de la función reductora se asigna al acumulador, 
cuyo valor se recuerda en cada iteración de la matriz y, en última instancia,
se convierte en el valor final, único y resultante.

Ejemplo: */

var nums = [1, 2, 3, 4]

//sin callback, de manera imperativa, con for haría:

var suma = 0;
for (var i=0;i<nums.length; i++){
  suma = suma + nums[i];
}

//con callback, usando reduce:

var sumaReduce = nums.reduce(function(acumulador, elemento){
  return acumulador += elemento;
}, 0);

//donde 0 es el valor con el que va a empezar el acumulador, seria:
/* 
acumulador = 0
return 0 + 1 (el primer elemento del array nums)=> los suma y los guarda en el acumulador,
y ahora el acumulador = 1.
return 1 + 2
acumulador = 3
return 3 + 3
acumulador = 6
return 6 + 4
acumulador = 10   si en el RUN pongo sumaReduce, me tira 10

Y si en vez de sumar quisiera multiplicar hago: */

var multiplicacionReduce = nums.reduce(function(acumulador, elemento){
  return acumulador *= elemento;
}, 1);

multiplicacionReduce     // me tira 24

/*Y si quiero puedo hacerlo mas breve y expeditivo con un ARROW:  */

var nums= [1,2,3,4]

var suma= nums.reduce((acumulador, elemento) => acumulador + elemento, 0)

suma          // me tira 10


//o

var nums= [1,2,3,4]

var multiplicacion= nums.reduce((acumulador, elemento) => acumulador * elemento, 1)

multiplicacion         // me tira 24

}




function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(element){  // forEach es otro metodo que recorre todos los elementos de un arreglo uno por uno.
    cb(element);                    //forEach no retorna nada, a diferencia de map o reduce, por ej.
  });  //Acá estoy pasando como argumentos de la funcion cb los valores del array uno por uno.

// Too lo puedo hacer con un for:

for (var i = 0; i < array.length; i++){ 
  cb(array[i]);
}

//Now:
//otro ejemplo de uso del forEach:
//creo un arreglo:

var alumnos = ["pipi", "tita", "micha", "tati"]

//si quiero invocar una funcion en todos los elementos del arreglo, sin callback, hago:

for (var i=0; i<alumnos.length; i++){
  console.log(alumnos[i]);
}

//si quiero hacerlo con callback sería:

alumnos.forEach(function(elemento){ 
  console.log(elemento)                      
});

/*y si ejecuto esta funcion me tira:

pipi
tita
micha
tati

que sería lo mismo que me tiraría el for. 


El método forEach() ejecuta la función indicada una vez por cada elemento del array.
forEach puede tener como parametros:
funcion callback (a ejecutar por cada elemento y que recibe a los otros parametros que voy a 
escribir), current value(elemento actual siendo procesado en el array), 
index, array, thisArg.

Ej: */

var alumnos = ["pipi", "tita", "micha", "tati"]

alumnos.forEach(function(elemento,indice){ 
  console.log(elemento,indice)                    
});                                          //me tira 'pipi' 0
                                           //          'tita' 1
                                          //           'micha' 2
                                         //           'tati' 3

}



function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // Acá sería así:

  var nuevoarray = array.map(function(elemento){  
    return cb(elemento);
  });
  return nuevoarray;

// Now, si quisiera hacer el ejercicio con for en vez de map,
//lo que se llama programación imperativa, seria así:

var nuevoArray = [];
for (var i = 0; i < array.length; i++) {
  nuevoArray.push(cb(array[i]));
  nuevoArray[i]=cb(array[i]);
}
return nuevoArray;   



  /*map es un metodo que, a diferencia del anterior, sí retorna algo. Se usa cuando vos querés hacer
  lo mismo en todos los elementos. Map devuelve un nuevo array, como arriba con nuevoarray.
  Por ejemplo si hago: */

var numbers = [1, 5, 10, 15]

//y despues creo:

var doubles = numbers.map(function(element){ //:los parámetros que puede recibir map son: la funcion callback (que producirá un elemento del nuevo array y que recibirá a los otros parametros que escribo),
    return element * 2;                      // ,currentvalue (elemento acutal del array siendo procesado), index, array, thisArg.
});

//si yo pego esto en el RUNJS o en la consola de Google y escribo 
doubles
// me va a dar
[2, 10, 20, 30] //Este, doubles, es el nuevo array devuelto por map.


//Ahí va otro ememplo de como uso map:

var arr = ["f","r","a","n"]

//creo otro array 

var nuevoarr = arr.map(function(e){
  return e.toUpperCase()
})
   //Y si despues voy a RUNJS y escribo 
   nuevoarr  
   // me va a tirar ["F","R","A","N"] en el nuevoarr


//Now: un buen ejemplo de MAP:

var alumnos = ["pipi", "tita", "micha", "tati"]

String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1)
} //el metodo charAt de String returns the character at the specified index.
  //el metodo toUpperCase de String converts all the alphabetic characters in a string to uppercase.
  //el metodo slice de String returns a section of a string.
var nuevoAlumnos = alumnos.map(function(elemento) {
  return elemento.capitalize();
});
// tipero en el run nuevoAlumnos y me tira: 
[ 'Pipi', 'Tita', 'Micha', 'Tati' ]

/*Otra forma de hacerlo sin crear el metodo capitalize 
y subirlo al prototipo de String: */

var alumnos = ["pipi", "tita", "micha", "tati"]

var nuevoAlumnos = alumnos.map(function(elemento) {
  return elemento[0].toUpperCase() + elemento.slice(1);
});
 // escribo nuevoAlumnos en el run y me tira:
[ 'Pipi', 'Tita', 'Micha', 'Tati' ]



//Y si lo quisiera hacer con for:

var nuevoarray=[];
for (var i=0; i<alumnos.length; i++){
  nuevoarray.push(alumnos[i].capitalize());
}
 // tipeo nuevoarray y tira: 
 4 // no se por que...
 [ 'Pipi', 'Tita', 'Micha', 'Tati' ]
}



function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++){
    if(array [i] [0] === "a") {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;

// Ahora lo resuelvo con el metodo filter.
// El método filter() crea un nuevo array con todos los elementos que cumplan
// la condición implementada por la función dada.

let NewArray = array.filter(elementos => elementos [0] === "a");   // puedo poner e, elemento, elementos, elefantes, etc
return NewArray;                                                   // igual se refiere a los elementos del array. 
                                                        //igual, guarda con esta ultima fcion, dicen que parece sencilla 
                                                        // but no lo es, mejor no usar por ahora
}
// Si yo quisiera crear un nuevo arreglo poniendo adentro todos los Mauro, sería igual pero poniendo elementos => elementos === "Mauro" 
//La funcion filter siempre genera un nuevo arreglo con lo que yo quiero poner adentro.

//Ahora voy a filtrar los elementos que comiencen con M.
//Así funcionaría en el run:
function filter(array) {
  
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++){
    if(array [i] [0] === "M") {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}
// en el run:
let nombres=["Mauro","Sergio","Publius"]
filter(nombres) // me tira [Mauro]


//O


function filter(array) {
  let NewArray = array.filter(elementos => elementos [0] === "M");  
  return NewArray;
}; 
let nombres=["Mauro","Sergio","Publius"]
filter(nombres)   // me tira [Mauro]. Si en el array no hubiera habido nimgun nombre
// que empezara con M, me hubiera tirado un array vacío: []. Chequeado.


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
