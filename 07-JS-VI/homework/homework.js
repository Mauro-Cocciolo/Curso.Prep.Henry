// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1) //El segundo parámetro de slice() es opcional: 
}                                //si no lo incluyes, el corte termina al final de la cadena original.
                                 //Y, en este caso, arranca desde la posicion 1.


function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()  //Now, así fciona un callback: si por ej yo creo una fcion f1 que sea function f1(){console.log("Hola") }
}       //cuando yo tipee (invoque) en el RunJS f1() y le de enter (la ejecuto), va a imprimir Hola. Ahora, si quiero
        // pasar esta fcion como cb (callback) escribo abajo: por ejemplo, una nueva fcion f2 que sea
// function f2(cb){
  //        cb()} y así creé una fcion que me va a ejecutar un cb cuando la llame. Entonces, si despues abajo
// escribo f2(f1) y ejecuto esta nueva fcion que acabo de llamar, 
//voy a ver que esta fcion f2 ejecuta a la f1 por parámetro y entonces también me va a imprimir Hola.



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

var suma = numeros.reduce(function (acumulador, elemento){  // el metodo reduce crea un acumulador en el que va acumulando los elementos, 
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
 /* cb(suma)  Aclaración: el cb(suma) lo pongo en verdecito porque si no me tira error, pero los ejercicios estan bien, 
              todos estan chequeados.
*/


// Hay too otra manera de hacer esto mismo, que es mas corta, usando la funcion arrow con el reduce:

var suma= numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

/* cb(suma)  Aclaración: idem que antes.
*/

// con reduce too puedo sumar strings, si voy al RUNJS o a Google, boton derecho, inspeccionar, console, 
//y pego lo siguiente en la console y ejecuto el console.log, me devuelve "fran":
/*
var arr = ["f","r","a","n"]
var str = arr.reduce(function(acc, e){
  return acc += e
}, "")
console.log(str)
*/


// reduce, ademas de acc y e, puede bancarse too dos argumentos mas en el parentesis i y src. Ej con i:

/*
var arr = ["f","r","a","n"]
var str = arr.reduce(function(acc, e, i){
 if (i > 1) {
   return acc += e
} else {
  return acc
}
}, "")
console.log(str)   y vualé, devuelve "an"
*/

}



function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(element){  // forEach es otro metodo que recorre todos los elementos de un arreglo uno por uno.
    cb(element);                    //forEach no retorna nada, a diferencia de map, por ej.
  });

// Too lo puedo hacer con un for:
/*
for (var i = 0; i < array.length; i++){   // Lo pongo en verde porque los dos juntos tiran error, pero tranqui que está testeado
  cb(array[i]);
}
*/
}



function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  /*map es un metodo que, a diferencia del anterior, sí retorna algo. Se usa cuando vos querés hacer
  lo mismo en todos los elementos.
  Por ejemplo si hago:

var numbers = [1, 5, 10, 15]
y despues creo 
var doubles = numbers.map(function(element){
  return element * 2;
});

si yo pego esto en el RUNJS o en la consola de Google y escribo doubles, me va a dar
[2, 10, 20, 30]
*/
// Acá sería así:

  var nuevoarray = array.map(function(elemento){  
  return cb(elemento);
});
return nuevoarray;

/*Ahí va otro ememplo de como uso map:

var arr = ["f","r","a","n"]

creo otro array 

var nuevoarr = arr.map(function(e){
  return e.toUpperCase()
})
   Y si despues voy a RUNJS y ejecuto nuevoarr (simplemente lo escribo y ya lo hace, sin enter) 
    me va a aparecer ["F","R","A","N"] en el nuevoarr
*/

// Now, si quisiera hacer el ejercicio con for en vez de map seria así:

var nuevoArray = [];
for (var i = 0; i < array.length; i++) {
  nuevoArray.push(cb(array[i]));
  nuevoArray[i]=cb(array[i]);
}
return nuevoArray;   //Acá lo pude hacer sin necesidad de pasar a verde.
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

// Ahora lo resuelvo con el metodo filter:

let NewArray = array.filter(elementos => elementos [0] === "a");   // puedo poner e, elemento, elementos, elefantes, etc
return NewArray;                                                   // igual se refiere a los elementos del array. 
                                                        //igual, guarda con esta ultima fcion, dicen que parece sencilla 
                                                        // but no lo es, mejor no usar por ahora

}

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
