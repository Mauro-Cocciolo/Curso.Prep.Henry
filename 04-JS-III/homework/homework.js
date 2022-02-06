// No cambies los nombres de las funciones. 
/*
Los arrays son listas, matrices.
Podemos pensar en las matrices como contenedores de almacenamiento para colecciones
de datos. Construir una matriz es simple, declarar una variable y establecerla en [].
O: var arreglo = new Array; después puedo usarlo en una función para pasarle cosas.
Luego podemos agregar al contenedor (separadas por coma) tantas cadenas,
números o booleanos como queramos y acceder a esos elementos cuando lo deseemos.
Los arrays son objetos similares a una lista, cuyo prototipo proporciona metodos
para realizar operaciones de recorrido y de mutacion. Tanto la longitud como el 
tipo de los elementos de un array son variables.
Ej:

array [1,2,3,4,"hola", funcion (){}, true, etc] donde 1 es el elemento 0 
y etc es el elemento 7.

*/



function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length-1];
}
/*
El length mide los elementos internos, que siempre van a ser uno mas que la posicion:
123456 length
012345 posiciones
Si quiero retornar el ultimo elemento, en este caso 6, tengo que invocar la posicion
5, que es 6-1.
*/


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código: 
  // el for funciona asi: empieza en la posicion 0 y despues sigue por 
  // el array.legnth, y va pasando de posicion de uno en uno para cumplir lo que 
  //se le pide.
  for (var i=0; i<array.length; i++) {
    array [i]= array [i] + 1;  // es lo mismo que decir array [i] += 1
  }
  return array;



var auxiliar = [];
var val = 0;
for (var i=0;i<array.length;i++) {
  val = array[i] + 1;
  auxiliar.push (val);
}
return auxiliar;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join (" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i=0; i<array.length; i++) {
      if(array[i] === elemento) {
        return true;
      }
  } return false;
}
/*
EN EL RUN LO HICE PARA VER:

var array=["caca","cacona"]
var elemento="cacona" 
function arrayContiene(array, elemento) {
  
  for (var i=0; i<array.length; i++) {
      if(array[i] === elemento) {
        return true;
      }
  } return false;
}
arrayContiene(array, elemento)            ME TIRÓ TRUE
console.log(arrayContiene)                ME TIRÓ ƒ arrayContiene()

*/


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var acumuladordeenteros=0;
  for (var i=0; i<numeros.length; i++) {
    acumuladordeenteros= acumuladordeenteros + numeros [i] // acent += num [i]
  }
  return acumuladordeenteros;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código: 
  // Ej práctico de lo que pide:
  // [2,4,1,3,5] la suma total de elementos es 15, el length o cantidad de 
  //elementos es 5, y el promedio es 15/5=3

  var TotaldeElementos = resultadosTest.length;
  var suma = 0
  for (var i=0; i<resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]  // suma += resT[i]
  }
  var promedio = suma / TotaldeElementos;
  return promedio;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código: 

  // Voy a crear la funcion bigger:
 // al final bigger termina con el i mas grande, 
 // los va recorriendo todos hasta el final del length, 
 // saltando solo entre los que son mas grandes que el anterior hasata el final
 //  y ese es el mas grande
var bigger=0;
for (var i=0; i < numeros.length; i++) {
  if (numeros[i] > bigger) {
    bigger = numeros [i]
  }  
}
return bigger;
}



function multiplicarArgumentos() {
// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
// Escribe tu código aquí: 


  if (arguments.length === 0) { //arguments.length === 0 es lo mismo que si digo 
    //if (!arguments), es si no se pasan argumentos
    return 0;
  } else {
    var acumulador = 1;
    for (var i = 0; i < arguments.length; i++) {
      acumulador = acumulador * arguments[i]  // ac *= arg[i]
    }
    return acumulador;
  }
}
/*
Sería así: si por ejemplo arguments es un array de [2,5,7] y yo pongo ac=ac*arg[i],
siendo a su vez que ac=1, lo que va a hacer es 1*2 y le pasa el 2 al ac, eso en la primer vuelta, 
en la segunda hace 2*5, pasa 10 al ac, en la tercer vuelta 10*7 y pasa el 70 al ac.
*/




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var mayoradieciocho = arreglo.filter ((element) => element > 18);
var total = mayoradieciocho.length;
return total;
/*
El metodo filter() crea un nuevo array con todos los elementos que cumplen la condición
implementada por la función dada. Ej:

const words = ["spray", "limit", "elite", "exhuberant", "destruction", "present"];

const result = words.filter (word => word.length > 6);

console.log (result); me tira: Array ["exhuberant", "destruction", "present"]

Lo chequié en el run, es así, y en word no hace falta poner el parentesis. 

El metodo filter acepta tres parametros: current value o elemento actual (el que usé),
index (es el indice del elemento actual del array, es opcional), array (el array sobre
el que se ha llamado filter, tambien es opcional), thisArg (valor a utilizar como this 
cuando se ejecuta callback, too es opcional).

Devuelve siempre un nuevo array con los elementos que cumplen la condición. SI ningun 
elemento cumple con la condición, se devolverá un array vacío.
*/



var mayoradieciocho = [];
for (var i = 0; i < arreglo.length; i++){
  if (arreglo [i] > 18) {
    mayoradieciocho.push(arreglo[i])
  }
} 
var lacantidaddeelementosmayoresa18= mayoradieciocho.length;
return lacantidaddeelementosmayoresa18;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  // A ver: 1 y 7 , es decir sabado y domingo = son "Es fin de semana"
  //mientras que 2.3.4.5.6 = son "Es dia laboral"  
  switch (numeroDeDia) {
    case 1: 
    return "Es fin de semana";
    case 7:
      return "Es fin de semana";
      case 2:
        return "Es dia Laboral";
        case 3:
          return "Es dia Laboral";
          case 4:
            return "Es dia Laboral";
            case 5:
              return "Es dia Laboral";
              case 6:
                return "Es dia Laboral";
    default:
      return "No es un dia";
  }  
  } 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso. 
  // Ojete: los strings too los puedo tratar como formados por elementos []
  // y [0] seria el primer elemento
  //Escribe tu código aquí  
  var str = String(n); //es lo mismo que: var str= n.toString() o var str= n + ""
  if (str[0] === "9") {                      
    return true;
  } else {
    return false;
  }
}
/*
LO HICE EN EL RUN Y DIO RESULTADO TAMBIEN SIN EL ELSE:
var n=999
function empiezaConNueve(n) {
    var str = String(n); 
  if (str[0] === "9") {                      
    return true;
  }     return false;
  }
empiezaConNueve(n)       ME TIRA TRUE

*/



function todosIguales(arreglo) {
//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
//retornar true, caso contrario retornar false.
//Escribe tu código aquí  
  
//Voy a hacer que se compare el i con el i que sigue y si no es igual es false
//Ej: [2,2,2,2,2,2,2,2,87] con la funcion yo hago que arreglo en la posicion i se compare con el que sigue, 
//pongo el -1 porque si no el ultimo no tiene con que compararse y cae al vacío

  for (var i = 0; i < arreglo.length -1; i++) {
    if (arreglo[i] !== arreglo[i + 1]) {  //lease: si arreglo en la posicion i es diferente 
      return false;                       //a arreglo en la posicion siguiente 
    }
  }
  return true;
} 
/*
EN EL RUN YO HICE:

var arreglo=[2,2,2,2,2,2,2,2,87]
function todosIguales(arreglo) {
  for (var i = 0; i < arreglo.length -1; i++) {
    if (arreglo[i] !== arreglo[i + 1]) {  
      return false;                       
    }
  }
  return true;
} 
todosIguales(arreglo)    Y ME TIRÓ FALSE, PORQUE CAGA TODO EL 87.

*/



function mesesDelAño(array) {
//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
// "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
//Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
// Tu código:

  //Ojo: si no estan los tres tengo que devolver no se encontraron,
  // tienen que estar los tres juntos si o si, aunque solo falte uno 
  // devuelvo que no se encontraron

var mesesBuscados = [];
for (var i = 0; i < array.length; i++) {
  if (
    array [i] === "Enero" ||
    array [i] === "Marzo" ||
    array [i] === "Noviembre"
  ) {
    mesesBuscados.push(array [i]);
  }
}
if (mesesBuscados.length === 3) {
  return mesesBuscados
} else {
  return "No se encontraron los meses pedidos";
}
}


function mayorACien(array) {
//La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
//valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
// Tu código:
  var nuevoarray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoarray.push (array [i]);
    }
  } 
  return nuevoarray;
}


function breakStatement(numero) {
//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//Guardar cada nuevo valor en un array. 
//Devolver el array
//Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
//devolver: "Se interrumpió la ejecución"
//Pista: usá el statement 'break'. es un statement o declaración
// Tu código: 
  
//abajo lo que dice es que si i es menor que 10 es porque se breiqueó, si no tendría que llegar
//al 10 sin problemas, pero si se cortó antes el i nunca llegó a 10 veces, que dicho sea de paso son 10 posiciones,
//y entonces le hago returnear que se interrumpió la ejecución.
  var array = [];
  for (var i = 0; i < 10; i++) {
    numero = numero + 2;  // numero += 2
    if (numero === i) {
      break;
    } else {
      array.push(numero);
    }
  } 
  if (i < 10) {                          // si no llegan a cumplirse las 10 veces, es que se cortó antes.
   return "Se interrumpió la ejecución";
  } else {
    return array;
  }
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  
  for (var i = 0; i < 10; i++) {      
    if (i === 5) {
      continue;
    } else {
      numero = numero + 2; // o numero += 2
      array.push(numero);
    }
  }
  return array;
} 

/*
La sentencia continue (seguir), termina la ejecución de las sentencias de la iteración
actual del bucle actual o la etiqueta y continua la ejecución del bucle con la 
próxima iteración.
*/


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
