// No cambies los nombres de las funciones.
/*
OBJETOS:

En la anterior lección aprendimos sobre arrays o matrices. 
Las matrices son contenedores que sostienen colecciones de datos. 
En esta lección, introduciremos otro contenedor de datos, el Objeto. 
Los objetos y las matrices son similares en ciertas cosas, y muy diferentes en otras.
Mientras que los array pueden contener múltiples elementos relacionados unos con otros,
los objetos contienen mucha información sobre una sola cosa. 
Los objetos se instancian usando llaves ({}).
A diferencia de las matrices que tienen elementos valorados en índices, 
los objetos usan un concepto llamado pares de clave:valor. 
La clave (key) es el identificador y el valor (value) es el valor que queremos
guardar en esa clave. La sintaxis es “clave: valor”. Y clave es igual a PROPIEDAD.
Los objetos pueden contener muchos pares de clave-valor, deben estar separados
por una coma (importante: sin punto y coma dentro de un objeto). 
Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, 
aunque, varias claves pueden tener el mismo valor. 
Los valores pueden ser cualquier tipo de dato de Javascript; cadena, número, 
booleano, matriz, función o incluso otro objeto.
Una vez que tengamos los pares clave-valor, podemos acceder a esos valores llamando 
al nombre del objeto y la clave. Hay dos formas diferentes de hacer esto, usando puntos 
o usando corchetes.
Con la notación de puntos podemos llamar al nombre del objeto, 
un punto y el nombre de la clave. Así como llamamos a la propiedad .length en una 
matriz. La propiedad de longitud es un par de clave-valor.
Con corchetes escribis el nombre del objeto, abris corchetes, escribis la propiedad
entre comillas (salvo que sea una variable que represente otra cosa, o un numero), 
cerrás corchetes.
*/

//Creo el objeto user:

const user = {
  username: 'juan.perez',
  password: 'loremipsumpwd123',
  peteterules: true,
  favoriteNumber: 42
};

//Los llamo, o sea los invoco, así en el run:

user.peteterules; //me tira true
user.username;    //me tira juan.perez

/*La notación de corchetes es como llamar a un elemento en una matriz, en un array,
aunque con corchetes debemos usar una cadena o número, o una variable 
que apunte a una cadena o número. Se puede llamar a cada clave envolviéndola 
con comillas:    */

const passString = 'password';
user['peteterules']; // me tira true
user['username'];   // me tira juan.perez
user[passString];   // me tira loremipsumpwd123

//Generalmente, verás que los corchetes casi siempre se usan con variables.

//Asignar valores funciona igual que acceder a ellos, solo que le agregás = a algo.
//Podemos asignarlos cuando creamos el objeto, o despues con notación de puntos o 
//con notación de corchetes:

const nuevoUsuario = {
  esNuevo: true
}

const loveJSString = 'peteterules';

nuevoUsuario.username = 'otro.nombre.de.usuario';
nuevoUsuario['password'] = '12345'; 
nuevoUsuario[loveJSString] = true; //cuando agrego una variable o const como propiedad 
//no hacen falta comillas.
//Y así el objeto nuevoUsuario pasa a estar formado por:

nuevoUsuario = {
esNuevo: true,
username: 'otro.nombre.de.usuario',
password: '12345',
peteterules = true
};

//PUSE TODO ESTO EN EL RUN Y TIRA LO SIGUIENTE:
const nuevoUsuario = {
  esNuevo: true
}
const loveJSString = "peteterules";              // 
nuevoUsuario.username = 'otro.nombre.de.usuario';// 'otro.nombre.de.usuario'
nuevoUsuario['password'] = '12345';              // '12345'
nuevoUsuario[loveJSString] = true               //  true
loveJSString                                    //  'peteterules'
nuevoUsuario                                  /*{
                                                  esNuevo: true,
                                                  username: 'otro.nombre.de.usuario',
                                                  password: '12345',
                                                  peteterules: true
                                                 }
*/
  
//Si queremos eliminar una propiedad, podemos hacerlo usando la palabra clave delete:

const nuevoObjeto = {
  eliminarEstaPropiedad: true
}; //si yo en el run escribo nuevoObjeto, me tira { eliminarEstaPropiedad: true }

delete nuevoObjeto.eliminarEstaPropiedad;// y ahora en el run si escribo nuevoObjeto
                                         //me tira {}, está vacío.

//En los objetos, los valores se pueden establecer en funciones:

const nuevoObjeto = {
  decirHola: function() {
      console.log('Hola a todo el mundo!')
  }
}

nuevoObjeto.decirHola(); // me tira    Hola a todo el mundo!  (Ejecuta la fcion.)
nuevoObjeto              // me tira    { decirHola: ƒ decirHola() }
nuevoObjeto.decirHola   // me tira     ƒ decirHola()



//  +



/*
JavaScript está diseñado en un paradigma simple basado en objetos. 
Un objeto es una colección de propiedades, y una propiedad es una asociación entre
un nombre (o clave o key) y un valor. El valor de una propiedad puede ser una función, 
en cuyo caso la propiedad es conocida como un METODO. 
Además de los objetos que están predefinidos en el navegador, puedes definir tus 
propios objetos.
Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad de un objeto
se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto
básicamente son lo mismo que las variables comunes de JavaScript, 
excepto por el nexo con el objeto. Las propiedades de un objeto definen las
características del objeto. 
Accedes a las propiedades de un objeto con una simple notación de puntos:  */

objectName.propertyName

//Como todas las variables de JavaScript, tanto el nombre del objeto (que puede ser 
//una variable normal) como el nombre de la propiedad son sensibles a mayúsculas y
//minúsculas. Puedes definir propiedades asignándoles un valor. 
//Por ejemplo, vamos a crear un objeto llamado myCar y le vamos a asignar 
//propiedades denominadas make, model, y year de la siguiente manera:

var myCar = new Object();  //En el run al lado me pone automatico:
myCar.make = 'Ford';       // "Ford"
myCar.model = 'Mustang';   // "Mustang"
myCar.year = 1969;         // 1969
// y si escribo:
myCar                     //  { make: 'Ford', model: 'Mustang', year: 1969 }

//El ejemplo anterior también se podría escribir usando un iniciador de objeto,
//que es una lista delimitada por comas de cero o más pares de nombres de propiedad
//y valores asociados de un objeto, encerrados entre llaves ({}):


var myCar = {         // Acá en el run para que aparezcan tengo que escribir:
  make: 'Ford',     // ej, myCar.year    y runea    1969
  model: 'Mustang',
  year: 1969
};

//También puedes acceder o establecer las propiedades de los objetos en JavaScript 
//mediante la notación de corchetes ↑[]↓:

myCar['make']  = 'Cacamovil';     // me tira   'Cacamovil'
myCar['model'] = 'Mustanga';     // me tira   'Mustanga'
myCar['year']  = 1982;          // me tira    1982
//y si ahora escribo myCar:
myCar          /* me tira      {
                                make: 'Cacamovil',
                                model: 'Mustanga',
                                year: 1982
                               }
*/

/*Para enumerar las propiedades de un objeto: 

bucles for...in
Este método recorre todas las propiedades enumerables de un objeto y su cadena 
de prototipos

Object.keys(o)
Este método devuelve un arreglo con todos los nombres de propiedades enumerables 
("claves" o keys) propias (no en la cadena de prototipos) de un objeto o.

Object.getOwnPropertyNames(o)
Este método devuelve un arreglo que contiene todos los nombres (enumerables o no) 
de las propiedades de un objeto o.

Ej: para el objeto de antes:
*/
const nuevoObjeto = {
  decirHola: function() {
      console.log('Hola a todo el mundo!');
        }
}

nuevoObjeto.decirHola();                  //run: "Hola todo el mundo!"


Object.keys(nuevoObjeto)                 // run: ["decirHola"]
Object.getOwnPropertyNames(nuevoObjeto)  // run: ["decirHola"]
for (const property in nuevoObjeto){     // run: "decirHola"
console.log(property)
}

//Mirá como funciona, esto lo hice yo con el run:

const nuevoObjeto = {
  decirHola: function() {
      console.log('Hoooollllaaaaa!');
        }
}
nuevoObjeto.decirHola();              //me tira 'Hoooollllaaaaa!'

nuevoObjeto.cacatua = 'Pepa';        //me tira  'Pepa'
nuevoObjeto.cacatuita = 'Pig';       //me tira  'Pig'
nuevoObjeto.gudyear = 2005;         //me tira   2005

Object.keys(nuevoObjeto)                // tira [ 'decirHola', 'cacatua', 'cacatuita', 'gudyear' ]     
Object.getOwnPropertyNames(nuevoObjeto) // tira [ 'decirHola', 'cacatua', 'cacatuita', 'gudyear' ]
for (const property in nuevoObjeto){    // tira:  
console.log(property)                  //' decirHola'    
                                      //  'cacatua'
}                                    //  'cacatuita'
                                    //   'gudyear'                               
                                    

/*
Check this out, lo hago con for in:
*/
const objectcaca = { a: 1, b: 2, c: 3 };

for (const property in objectcaca) {
console.log(`${property}: ${objectcaca[property]}`); 
}

/*
Y me tira en el run: 'a: 1'
                     'b: 2'
                     'c: 3' 
Si cuando creo el objeto lo creo con var, igual en el for in pongo const, funciona, 
chequeado en el run.

Un bucle for...in solo itera sobre propiedades enumerables que no son símbolo. 
Los objetos creados a partir de constructores integrados como Array y Object han 
heredado propiedades no enumerables de Object.prototype y String.prototype, 
como el método indexOf() de String o el método toString() de Object. 
El bucle iterará sobre todas las propiedades enumerables del objeto en sí y 
aquellas que el objeto hereda de su cadena de prototipos (las propiedades de los 
prototipos más cercanos tienen prioridad sobre las de los prototipos más alejados 
del objeto en su cadena de prototipos).                    
*/








function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    }
  };
  return objeto;




  var gato = {
    nombre,        // puedo hacer así si coinciden propiedad con valor
    edad,
    meow: function() {
      return "Meow!";
    }
  };
  return gato;

}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor 
  //del argumento llamado "property" (una cadena/string)
  // Tu código: 
  
  // Ojete: acá tengo que usar [] si o si para agregar, no puedo usar punto, 
  // porque property en realidad no es el nombre del argumento, detrás de property puede aparecer cualquier cosa, 
  // es una variable como cuando vi lo de peteterules. Cuando es así uso brakets, sea para agregar que solo para invocar. 
  //El punto lo uso cuando quiero invocar exactamente property, pero acá no es el nombre real que hay detras, 
  // por detrás puede haber nombre, edad, fecha, etc. Si yo tuviera una de esas puntuales como parametro, 
  // ahí podría usar punto, pero acá no.
  objeto[property] = null;  //property es una variable pasada por parametro, por eso
  return objeto;            //brakets y por eso no está entre comillas.
}

/*
Así creo una nueva propiedad en un objeto: ejemplos:
toni.nuevapropoiedad = 123 y creo la nuevapropiedad con valor 123
o
toni.edad = 22 , si ya existía la propiedad edad en el objeto toni, 
la piso y le cambio el valor por 22
o
toni["edad"] = 22 , idem
o
toni[variable] = algo , las variables se suben solo con brakets.

Y si quiero invocar la propiedad de un objeto escribo, por ej:
toni.edad o toni.["edad"] o toni[variable]

Ejemplo de una variable:
si dentro del objeto toni hay un 
var i = algo
la tengo que invocar con braquets: toni[i]

*/



function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código: // 
  
  //Y bue, así se invoca un metodo/función.
  objeto[metodo]();
}



function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  /*
objetoMisterioso {
  numeroMisterioso: numero que desconozco
}
  */

  var resultado = objetoMisterioso.numeroMisterioso * 5;   // objetoM.numeroM son las cordenadas de a donde tiene que pararse
  return resultado;                                        // para hacer la cuenta que quiero que haga
}



function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código: 
  
  // Ojote: de vuelta, acá el verdadero nombre no es unaPropiedad, 
  // puede aparecer cualquier cosa detras, uso [] porque el punto me devolvería exactamente unaPropiedad
  // y ese no es el nombre verdadero que está detrás
delete objeto[unaPropiedad];   // no uso comillas porque está pasado por el parametro, yo no se como se llama la propiedad,
return objeto;                 // es una variable.
}



function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var nuevoobjeto = {
  nombre: nombre,
  email: email,
  password: password,
};
return nuevoobjeto;




var nuevoobjeto = {
  nombre,
  email,
  password,
};
return nuevoobjeto;
}



function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
//Entonces:
  /*

usuario {
  email: ? 
}

  */

/*
Uso el operador de desigualdad !=, que comprueba si sus dos operandos no son iguales
y devuelve un resultado booleano. Es diferente al operador de desigualdad estricta !==
por un motivo que aun no comprendo y que abajo me expliqué así: 
uso != porque le estoy diciendo que si no está vacío es que está lleno y entonces devuelva true,
no uso !== porque no me refiero al termino específico y puntual null
*/

  if(usuario.email != null) {     //usuario.email es la coordenada en donde se encuentra el valor en cuestión
    return true;
  } else {
    return false;
  }


  // o

  if(usuario.email === null) { //usuario.email es la coordenada en donde se encuentra el valor en cuestión
    return false;
  } else {
    return true;
  }


  
// O, si no, directamente, si usuario tiene una propiedad email, me va a retornar true, 
//de lo contrario false.


if(usuario.email) {
  return true;
} else {
  return false;
};

}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  /*
objeto {
  ¿propiedad?: ¿?
}
  */

  // si el objeto tiene adentro una propiedad de nombre propiedad, cuando busque [propiedad]
  // en el objeto, siempre con braquets por ser generico, una variable pasada por parametro,
  // tengo que encontrar un valor y por lo tanto el resultado de la busqueda no puede ser nulo, ergo, 
  // si el resultado de la busqueda objeto [propiedad] es ditinto de nulo, es true, el objeto tiene puna propiedad
  // de nombre propiedad.
  if (objeto[propiedad] != null) {
    return true;
  } else {
    return false;
  }




  if (objeto[propiedad]) {    // si objeto tiene una key o propiedad cuyo nombre es igual al valor 
  return true;                // del argumento propiedad, too lo puedo verificar así. Si existe
  } else {                   // objeto[propiedad] me va a dar true, else, false. 
    return false;
  }



  // o 



  if (objeto.hasOwnProperty (propiedad)) {
    return true;
  } else {
    return false;
  } 

}



function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  // Las comillas del segundo password son porque yo ya se que dentro del objeto hay, definitivamente, porque 
  // me lo dicen, un propiedad llamada password (sería :
  /*

  usuario {
  password: algun valor, ej, "Hola!"
  }  por eso las comillas.

  */
//El primer password es el que me pasan, el que está de parametro en la funcion, que representaría el "Hola!",
//es decir, representaría el valor o contenido de la propiedad password que está dentro del objeto usuario.
//Bien podría, siendo que ya se el nombre especifico de la propiedad, usar punto para invocarla, solo que sin comillas.
//Si el parametro de la fcion en vez de llamarse password se llamara pass, pondría: if (usuario["password"]===pass)

  if (usuario["password"] === password) {
    return true;
  } else {
    return false;
  }



  if (usuario.password === password) {
    return true;
  } else {
    return false;
  }; 
}



function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:

  /*

usuario {
  password: con un valor x que tengo que sustituir por el valor del argumento que me pasan, 
  es decir, el valor de nuevaPassword.
}

  */
 // que el objeto usuario tiene una key o propiedad password lo intuyo de la consigna
  
 usuario.password = nuevaPassword;    // pongo las cordenadas, us.pas = el valor por el que quiero cambiar
 return usuario;



  usuario["password"] = nuevaPassword;
  return usuario;



  usuario[password] = nuevaPassword; // así me pasó tambien, se ve que es tambien una variable.
  return usuario;

}



function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:

  // A ver, sería algo así lo que existe:

  /*  
  
  usuario {
    amigos: [bla, ble, bli, blo, blu] 
   }

 */
  // tengo que agregar nuevoAmigo al final, despues de blu

usuario.amigos.push(nuevoAmigo);       // usuario {
                                       //  amigos: [bla, ble, bli, blo, blu, nuevoAmigo]} queda así
return usuario;

}



function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  // A ver:

  /*

usuarios  [
  usuario  {
    esPremium: false,
  }
  usuario {
    esPremium: false,
  } etc
  ]

  */ 
//si me pide que defina como true el valor de cada propiedad esPremium, significa que antes eran false.
//Voy a usar el metodo map, que sirve para ejecutar una acción por cada elemento del array, tomandolo como argumento;
//yo le pido que mapee usuarios y que por cada elemento dentro de usuarios, en este caso objetos usuario, 
//a la propiedad esPremium de cada elemento, de cada objeto usuario que son los elementos del array,
// pues la defina con true. Así map setea los true.
// Too, lo puedo resolver con un for.

  usuarios.map(function (element) {
    element.esPremium = true;
  });
  return usuarios;
// el metodo map() crea un nuevo array con los resultados de la llamada a la función
//indicada aplicados a cada uno de sus elementos.



  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true
  };
  return usuarios;

}


function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array.
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  // A vergamasco:
    /*

usuario {
  posts: [ 
    post {
    likes: un entero,
    post {
      likes: un entero,
    } etc
   ]
 }

  */

  var acumulador = 0; //porque me piden una suma, una acumulación 
  usuario.posts.map(function (element) {
    acumulador += element.likes;         // tambien podria haber puesto acumulador = acumulador + element.likes;
  });
  return acumulador;




  var acumulador = 0;
  for (var i = 0; i < usuario.posts.length; i++) {
    acumulador += usuario.posts[i].likes    // o sea acumulador = acumulador + usuario.posts[i].likes  
  };    // suma al acumulador todos los likes de cada post de usuario.
  return acumulador;                      

}




function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

/*
Entonces:

producto {

  precio: 100, (por ejemplo)
  porcentajeDeDescuento: 0.2, (como dice el ejemplo)

  calcularPrecioDescuento: funcion () {        //Esto es lo que yo tengo que agregar, un metodo

  }
}
*/ //me paro en las eventuales cordenadas producto.calcular... para crear la fcion de ese nombre que me piden

  producto.calcularPrecioDescuento = function () {
    var precioConDescuento =
      producto.precio - producto.precio * producto.porcentajeDeDescuento;
    return precioConDescuento;
  }
  return producto;    


//Ahora otra manera de resolverlo, usando el this, que es otra palabra reservada y que acá me dice: 
//tomá la propiedad precio de ese objeto y restale el producto de la propiedad precio por 
//la propiedad porcentajeDeDescuento del mismo objeto.

  producto.calcularPrecioDescuento = function () {
    return this.precio - this.precio * this.porcentajeDeDescuento;
  };
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
