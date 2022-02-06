// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*///Es como una matriz de matrices.
  //Escribe tu código aquí
  return objeto = (Object.entries(objeto)); 
/*Puedo usar esta funcion constructora Object (es un metodo o funcion constructora) 
que lo que hace es crear un nuevo objeto al que nosotros le decimos cómo 
queremos que lo cree, en este caso hace eso que me pide la consigna mediante 
el metodo entries, que devuelve un array constituido por los pares clave-valor 
del objeto que tenemos como parametro en la funcion deObjetoAmatriz. 
Este constructor Object tambien se puede usar de otras formas: 
Objetc.value (para valores), Object.key (para propiedades).
Lo que hace es pasar todo a un arreglo, a una matriz. */

// Too puedo resolver este ejercicio con for:

  var array = [];

  for (i in objeto) {//Este metodo hace que se itere el objeto en espera de la orden que sigue.
    array.push([i, objeto[i]]);// Y le ordeno que pushee dentro del array nuevo, desde la posición i, lo que
  //haya en el objeto sub i. Es decir, que coloque lo que tenemos dentro del objeto (las clave:valor, es decir,
  // objeto i: objeto sub i, es decir, i : object [i]) en la matriz que estamos creando, así, 
  //autometicamente, pasa lo que piden en la consigna. 
  }
  return array;  
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
  
  var obj = {}; // lo que me piden es que cree un objeto con el contenido del string 
  //y la cantidad de veces que aparece. Por eso creo un objeto vacío.
  for (let i = 0; i < string.length; i++) {
    if (Object.keys(obj).includes(string[i])) {
      obj[string[i]] = obj[string[i]] + 1 // esto es, si incluye i, por ejemplo a, que lo sume una vez, 
      continue                            // si aparece de nuevo, que lo sume una vez, de nuevo, una vez, 
    }                                     // y así con todos los i.
    obj[string[i]] = 1
  }
  return obj;
}
/*
SO: nosotros estamos recibiendo "adsjfdsfsfjsdjfhacabcsbajda" y tenemos que devolver 
{ a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }.
Entonces primero creo el objeto que es el que va a devolver: 
var obj={}, 
y vamos a iterarlo en un for, siempre y cuando se cumpla la siguiente regla: 
El Objeto es una fcion constructora de javascript, y para nosotros poder encontrar 
las letras repetidas, tenemos que hacerlo a traves de las claves, las keys, 
que serian las propiedades. Porque las letras del string van a ser las keys 
del nuevo objeto. Por eso le pido al constructor que use las keys del objeto: 
Object.keys(obj). 
Y, sobre ese contructor, le estamos preguntando si incluye las strings que nos estan
pasando en las diferentes posiciones: includes(string[i]), 
porque este bucle lo va a hacer varias veces y si encuentra la letra, entonces 
obj [string[i]], la va a guardar dentro de la variable obj, 
por lo que obj en la posicion sub i va a ser igual al obj sub i + 1: 
obj [string[i]] + 1, 
siendo que el +1 agrega un uno como valor a la letra, alias key del objeto, 
que encontró. 
Ponemos el continue porque si la encuentra y no pusimos continue, 
va a dejar de iterar, mientras que con el continue va a seguir buscando 
tantas veces hasta finalizar, y va a ir sumando cada una de las letras que encuentre. 
Y entonces sí nos va a devolver que  a: 5, b: 2, c: 2, etc. 
En caso de que no haya mas de una letra, 
es decir, si no se repite, lo que va a hacer es: obj [string[i]] = 1, o sea,
la va a mandar al objeto creado con 1 como valor. 
Al final, devuelvo en nuevo objeto. 
*/



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let cadena = "";
  let cadena2 = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()){
      cadena += s[i];
    } else {
      cadena2 += s[i];
    }
  }
  return cadena.concat("", cadena2); // o too puede ser: return cadena + cadena2
}
/*
Vamos a tener dos cadenas, una de mayuscula y otra de minuscula, ambas son un string.
Entonces, iteramos soyHenry y tenemos que decirle que si s en la posicion sub i es igual
a s en la posicion sub i mayuscula, o sea, si es una mayuscula,
lo tenemos que agregar a la cadena de mayuscula que es cadena:
cadena =+s[i]. De lo contrario que lo agregue a la cadena2 que es de minuscula.
Por ultimo tengo que retornar HENRYsoy todo junto:
return.cadena.concat("", cadena2), en donde las comillas estan juntas 
para que no haya separacion. O, mas facil, puedo hacer cadena + cadena2.
*/



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:

  var prhase = str.split(" ").map(function(item) {
    return item.split("").reverse().join("");
  }).join(" ")
  return prhase;
  /*
Con split(" ") dividio la cadena, le dijo que la separa mediante un espacio, 
o sea [“The”, “Henry”, etc].
Con item.split("") hace: ["T","h","e"], ["H","e", "n",etc]. 
A esto le aplica el reverse para dar vuelta las letras:["T","h","e"] pasa a ["e", "h", "T"].
Con join("") vuelve a unir los elementos del array, une otra vez las letras ["ehT"].
Con el join(" ") del final, vuelve a unir el array completo, es decir
pasa "ehT", "yrneH".... a "ehT yrneH ".
Map siempre devuelve un arreglo al final.


Split es un método de String que convierte una cadena de texto en un array. 
Cada elemento del array es una división del string de acuerdo a como se hizo el SPLIT.
Ejemplo:
“Mauro preparate un asado en año nuevo, dale, copate”
Si yo le paso un Split(“,”);
Fijate que entre comillas le mandé una coma. El resultado va a ser:
([“Mauro preparate un asado en año nuevo” , “dale” , “copate”])

  */
 
} 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
/*
Primero vamos a transformar numero en un string. 
12345 pasa a ser ["12345"]
Despues vamos a crear un numero2 que va
a ser un string vacío por ahora. 
Luego vamos a dar vuelta el string: con split transformo el string en un array 
de string ["1","2","3","4","5"], con los numeros separados, 
con reverse despues los doy vuelta, ["5","4","3","2","1"]
y con join los vuelvo a juntar ya dados vuelta ["54321"]. 
Luego: le digo que si numero es igual a numero2, 
es decir, si tiene el mismo valor, que nos devuelva que es capicua, 
else que devuelva que
no es capicua.
*/
var numero = numero.toString(); //o var numero=numero+"" o var numero=String(numero)
var numero2 = ""; 

numero2 = numero.split("").reverse().join("");

if (numero === numero2){
  return "Es capicua"
} else {
  return "No es capicua"
}
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var cadena2 = "";

  for (let i =0; i < cadena.length; i++){
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      cadena2 += cadena[i];
    }
  }
  return cadena2;
}
/*
Primero tengo una cadena que es la que nos pasan por parametro, yo quiero crear una cadena2 modificada
que no contenga las letras a, b o c, o, la misma cadena si es que no tuviera a, b o c. 
SO, creo la cadena2 que, por ahora, es un string vacio. Hago un bucle for clasico, que va a 
iniciar en la posicion 0 (var i=0), i va a ser menor a la cantidad (i<cadena.length)
y va a ir recorriendo los i (i++). Al for, con el if, le digo que cada vez que itere
en esta cadena se fije si la posicion (i) es distinta de a, b o c, y si es así, que 
la sume a la cadena2. AL final, claro, devuelvo la cadena2, que no va a contener 
en su interior a ninguna letra a, b o c.
*/



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí


  for (let i = 0; i < arr.length; i++){
    var str = arr[i]
    var j = i - 1
    while (j >= 0 && str.length < arr[j].length){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = str;
  }
  return arr;
  
  

  /* GUARDA, ES MEDIO AL PEDO, NO SE ENTIENDE
SO: Planteo un for. Lo primero qu etengo que hacer es recorrer el array, iterara en cada 
uno de los componentes del array que son 4 string distintos ["You", "are", "beautiful", "looking"].
Vamos a crear una nueva variable que se va a llmar str y que va a ser igual a arr en la posicion i,
es decir, en las distintas posiciones del array 0 (o sea YOu) 1 (are) 2 , etc.
Despues creamos otra variable que llamamos j que es el i - 1.
Despues creo un while al que le voy a decir que siempre y cuando j, que es i-1, sea mayor
o igual a 0 (en cuanto a cantidad de caracteres) y la longitud del string  (es decir cada una de las posiciones, You, are, etc)
sea menor a la posicion j (que es el indice -1, en donde si i, por ej, está en "are", i-1, alias j, va a ser "you". Con i - 1 evito llegar a la posicion final), es decir, 
mientras la longitud del string que creamos sea menor a la longitud del indice -1, o sea que los comparo, 
mientras la longitud del array en i sea menor a la longitud del array previo, vamos a decirle
al array que nos sume en la posicion j uno, y lo vamos a igualar al array en la posicion j.
A su vez, a j lo disminuimos en 1 para ir corriendolo de lugar. Despues, al igualar arr[j+1]=str, 
lo que hace es ponerlo de menor a mayor. Lo que hace j-- es lo contrario de i++, va para atras
en vez de para adelante. 
  */
 // Otra forma de resolverlo:

  var order = new Array;
  order = arr.sort(function(a,b) {
    return a.length - b.length
  });
  return order;

  //o
  
 var order = arr.sort(function(a,b) {  //si hago así es lo mismo, porque 
    return a.length - b.length        //el metodo sort devuelve siempre un arreglo.
  });
  return order;


}
/*
Vamos a crear una nueva variable order (eligio ese nombre porque vamos a ordenar las 
cosas en un nuevo orden).
A esta nueva funcion, le pasamos un Array nuevo (creo una instancia de la clase Array 
que se llama order, como el audi en Car).
Hay un metodo, que se llama sort, que es una funcion y que nos va a tomar dos parametros, 
que serian a y b. 
Despues le decimos que nos devuelva la longitud de a - la de b. Retorno order.
¿Qué hace sort? ordena los elementos de un array y devuelve el arreglo ordenado. O sea
nos compara los parametros que le pasamos y los ordena por longitud.
*/


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var arreglo = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arreglo.push(arreglo1[i])
      }
    }
  }
  return arreglo;
}
/*
Creo un arreglo vacío porque tenemos que devolver un arreglo nuevo que devuelva las cosas
que tengan en comun los arreglos que estan de parametro. Recorro ambos arreglos 1 y 2.
Si arreglo1 en la posicion i es igual arreglo2 en la posicin j, pushea nomas a la bolsa 
del nuevo arreglo. Si no son iguales, por ende, no me va a pushear nada. 
Devuelvo arreglo. 
*/



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

