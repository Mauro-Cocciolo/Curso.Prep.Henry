// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  }
  if (y > x) {
    return y;
  }
  if (x === y) {
    return x || y;
  }



  return Math.max(x, y);



  if (x > y) return x;
  if (y > x) return y;
  return x;

}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    return "Allowed";
  }
  if (edad < 18) {
    return "Not allowed";
  }

  //o

  if (edad >= 18) return "Allowed";
  else return "Not Allowed";
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1) {
    return "Online";
  }
  if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }



  if (status === 1) return "Online";
  if (status === 2) return "Away";
  else return "Offline";

}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === "aleman") {
    return "Guten Tag!";
  }
  if (idioma === "mandarin") {
    return "Ni Hao!";
  }
  if (idioma === "ingles") {
    return "Hello!";
  } else {
    return "Hola!";
  }



  if (idioma === "aleman") return "Guten Tag!";
  if (idioma === "mandarin") return "Ni Hao!";
  if (idioma === "ingles") return "Hello!";
  else return "Hola!";


  switch (idioma) {
    case "aleman": return ("Guten Tag!");
    case "mandarin": return ("Ni Hao!");
    case "ingles": return ("Hello!");
    default: return "Hola!";
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch (color) {                        //switch es un statement. Va con minuscula.
    case "blue": return "This is blue";   //Es una declaración o statement.
    case "red": return "This is red";
    case "green": return "This is green";
    case "orange": return "This is orange";
    default: return "Color not found";
  }

}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) {
    return true;
  } else {
    return false;
  }



  if (numero === 10 || numero === 5) return true;
  else return false;

}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }



  if (numero < 50 && numero > 20) return true;
  else return false;

}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  Number.isInteger(numero); //el metodo isInteger del constructor Number me devuelve
  //si o si un true o un false segun si el parametro,
  //,acá numero, es entero o no lo es. No need poner return.

  // o:                       

  if (Number.isInteger(numero)) {
    return true;
  } else {
    return false;
  }



  if (numero === Math.floor(numero)) return true; //lo redondea para abajo, siempre va a ser entero.
  else return false;

}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  }
  else if (numero % 3 === 0) {
    return "fizz";
  }
  else if (numero % 5 === 0) {
    return "buzz";

  } else {
    return numero;
  }



  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  else if (numero % 3 === 0) return "fizz";
  else if (numero % 5 === 0) return "buzz";
  else return numero;




  if (numero % 15 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";
  return numero;

}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  else if (num1 > 0 && num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  }
  else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }

}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if (numero === 0 || numero === 1) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;

}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }


  if (valor === true) return "Soy verdadero";
  return "Soy falso";

}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla6 = [];
  for (var i = 0; i < 11; i++) {  //Como arranco de 0, son 11 posiciones en vez de 10.
    tabla6.push(i * 6);
  }
  return tabla6;
}


//ARRAYS:
/*
Los arrays son listas, matrices.
Podemos pensar en las matrices como contenedores de almacenamiento para colecciones
de datos. Construir una matriz es simple, declarar una variable y establecerla en [].
O: var arreglo = new Array; después puedo usarlo en una función para pasarle cosas.
Luego podemos agregar al contenedor (separadas por coma) tantas cadenas,
números o booleanos como queramos y acceder a esos elementos cuando lo deseemos.
*/
//Los arrays son objetos similares a una lista, cuyo prototipo proporciona metodos
//para realizar operaciones de recorrido y de mutacion. Tanto la longitud como el 
//tipo de los elementos de un array son variables.Ej de array:
//Crear un arreglo:
let frutas = ["manzana", "banana"];// 
console.log(frutas.length) // me va a tirar 2 en el run.

//Acceder a un elemento del array mediante su indice:
let primero = frutas[0] // me a a tirar manzana en el run al poner console.log(primero).
let ultimo = frutas[frutas.length - 1] // me tira banana, porque 2-1 es 1, y en la posicion 1 esta banana
// la primera posicion en un array es siempre 0 y la ultima es la propiedad length -1.


//Asignación
//Podemos asignar y reasignar cualquier índice en la matriz usando el paréntesis/índice y un “=”.
const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

nombresEstudiantes[0] = 'Jorge';

console.log(nombresEstudiantes);  // ['Jorge', 'Antonio', 'Sara', 'Samuel']



//Recorrer un array:
frutas.forEach(function (elemento, indice, array) { 
  console.log(elemento, indice)
}) // me tira en el run: Manzana 0
//                       Banana 1

//Añadir un elemento al final de un array:
frutas.push("naranja");
// en el run pongo console.log(frutas) y 
//añade "naranja" al final: ["manzana", "banana", "naranja"];


//Eliminar el ultimo elemento de un array:
frutas.pop();
// elimino naranja, al poner concole.log(frutas) me tira ["manzana", "banana"]

//Añadir un elemento al principio del array:
frutas.unshift("fresa");
// console.log(frutas) me tira ["fresa", "manzana", "banana"]

//Eliminar el primer elemento de un array:
frutas.shift();
//["manzana", "banana"]

//Encontrar el indice de un elemento del array:
frutas.push("fresa");
//["manzana", "banana","fresa"]
let pos = frutas.indexOf("banana");//me tira 1 en el run al hacer console.log(pos).

//ELiminar un unico elemento mediante su posicion:
let elementoEliminado = frutas.splice(pos, 1);//splice empieza en la posicion
//que nos indica el valor de la variable pos, que era 1, y luego elimina un elemento,
//, este sería el 1 despues de la coma en (pos,1). Yo le pido que elimine 1 desde esa
//posicion, por lo que queda: ["manzana", "fresa"] si hago console.log(frutas), y
//si hago console.log(elementoEliminado) me tira ["banana"], que se pasó a este.

//Eliminar varios elementos a partir de una posicion:
//con splice no solo puedo eliminar elementos del array, sino que too puedo
//extraerlos guardandolos en un nuevo array, pero ojo, al hacerlo modifico el arreglo original
let vegetales = ["repollo", "nabo", "rabano", "zanahoria"];
console.log(vegetales) // tira ["repollo", "nabo", "rabano", "zanahoria"]
let pos = 1, numeroElementos = 2;
let elementosEliminados = vegetales.splice(pos, numeroElementos);
// y entonces ["nabo", "rabano"] se guardan en elementosEliminados.
console.log(vegetales); // me tira ["repollo", "zanahoria"], los supervivientes.
console.log(elementosEliminados); // me tira ["nabo", "rabano"]

//Copiar un array:
let copiaArray = vegetales.slice();// copia ["repollo", "zanahoria"] en copiaArray
// y si hago un console.log(copiaArray) me tira ["repollo", "zanahoria"]
//Si hago:

let copiaArray = vegetales.slice(1);
console.log(copiaArray)               //tira [ 'zanahoria' ]

let copiaArray = vegetales.slice(0);
console.log(copiaArray)             //tira [ 'repollo', 'zanahoria' ]

let copiaArray = vegetales.slice(0,1);
console.log(copiaArray)            // tira [ 'repollo' ]



//Los indices de los arrays en JS cominezan en 0, es decir que el indice del primer elemento
//es 0, y el ultimo elemento es igual al valor de la propiedad length del array restandole 1.
//Si se utiliza un numero de indice no valido, se busca undefined.

let arr = ["primer elemento", "segundo elemento", "ultimo elemento"];
console.log(arr[0]) // tira "primer elemento"
console.log(arr[1]) // tira "segundo elemento"
console.log(arr[arr.length - 1]) // tira "ultimo elemento"





function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí: 

  if (numero > 99 && numero < 1000) {
    return true;
  }
  return false;



  var str = numero + ""; //Al hacer numero + "" transformo el numero en string,
  if (str.length === 3) { //idem que: var str= numero.toString() o var str= String(numero)
    return true;
  }
  return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

  var contador = 0; // es un contador de veces
  do {
    numero = numero + 5;
    contador++;
  }
  while (contador < 8);
  return numero // el valor final esta en numero
}

/*
Hacer Mentras:En este bucle, do hace la sentencia y while es la condición
*/ //Otro ej:
let result = "";
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result) //me tira "12345": primera vuelta 0+1 es 1, segunda 1+1 es 2, etc.


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
