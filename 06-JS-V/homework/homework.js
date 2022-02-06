// No cambies los nombres de las funciones.
/*CLASS

Muchas veces cuando creamos un objeto, estamos creando una plantilla. 
En el lugar de copiar esa plantilla una y otra vez, 
Javascript nos da acceso a lo que llamamos un constructor o class. 
Las clases comparten gran parte de la misma funcionalidad que los objetos normales, 
pero también se expande mucho en esa funcionalidad. 
Las clases son útiles para crear muchos objetos que comparten 
algunas de las mismas propiedades y métodos (como los usuarios en un sitio web).
Esos objetos creados a partir de la clase se llaman instancias. 

EJ: 
*/
function Car (marca, cv, color) {
  this.marca = marca; // la fcion constructora recibe los nombres por parametro.
  this.cv = cv;
  this.color = color;
}

var audi = new Car ("audi", 1500, "verde");  
var golcito = new Car ("VW", 1000, "azul"); 
/*
El keyword new va a hacer varias cosas por nosotros detras de escena.
Basicamente "bindea" el objeto de la nueva instancia y le dice a la clase
que el this ahora va a ser lo que trae el nuevo objeto, la nueva instancia. 
Y al final hace un return objeto, todo detras de escena.


Voy a RUNJS y escribo:                                                                    
audi
y aparece:
Car {marca: "audi", cv: 1500, color: "verde", _proto_: { constructor: ƒ Car() } }
o
golcito
Car {marca: "VW", cv: 1000, color: "azul", _proto_: { constructor: ƒ Car() }}
o
si pongo Car me tira: ƒ Car()


Despues yo puedo modificar las instancias como modifico cualquier objeto, ej:
Si quiero modificarle el cv al audi pongo:
audi.cv = 2000;
y entonces me tira 2000;
o audi.funciona = true;
y entonces me agrega esta nueva propiedad con valor true;
o audi.kilometraje = 100; 
y me agrega la nueva propiedad de kilometraje:
me queda así: 
voy a RUNJS y escribo:                       
audi
y aparece:
Car {marca: "audi", cv: 2000, color: "verde", funciona: true, kilometraje: 100, _proto_: { constructor: ƒ Car() }}


Operador por defecto:*/

function Car (marca, cv, color) {
  this.marca = marca || "pirulo"; 
  this.cv = cv || 123;
  this.color = color || "negro"; 
}
/*  si yo a la nueva instancia no le paso datos de cv o color o marca, ej:*/
var renault = new Car ();/*
y corro esto en RUNJS:
renault
me tira: 
renault Car {marca: "pirulo", cv: 123, color: "negro", _proto_: { constructor: ƒ Car() }} 
Me tira esto por default.

o si le paso: */

var renault = new Car ("renault", null, "verde"); /*
escribo renault y me tira:
renault Car {marca: "renault", cv: 123, color: "verde", _proto_: { constructor: ƒ Car() }}

Now:
ptototype: es el objeto de referencia, el objeto madre. Ejemplo:
el ptototipo de audi es Car, si yo tipeo:
audi.__proto__
abajo me tira:
Car

o

El prototipo de string (con el que armo, por ej, string.length) es String, 
que es un objeto que se llama String.
El prototipo de obj. es Object, que es un objeto alfa,
Lo mismo Array. 

Now:
vamos a suponer que la clase Persona tiene en su prototype un metodo llamado getEdad 
que lo que hace te devuelve la edad, o mejor, no lo tiene y lo agrego yo: */

function Persona (edad) {
  this.edad=edad;
  }

Persona.prototype.getEdad=function(){
  return this.edad;
}  /*

si yo despues creo una instancia: */
var tincholino = new Persona(22)  /*
cuando escribo en el RUNJS: 
tincholino
me devuelve:

Persona {
  edad: 22,
  __proto__: { constructor: ƒ Persona(), getEdad: ƒ () }
}

La funcion getEdad está en el prototipo, y si quiero averiguarlo escribo:
tincholino.__proto__
y me devuelve:

{ getEdad: ƒ () }

Y si pongo en el RUN:
tincholino.getEdad()
me tira:
22
es decir, la funcion me va a funcionar aunque no la tenga el objeto tincholino, 
porque sí la tiene el prototipo de la clase a la que tincholino pertenece, Persona.

Puedo incluso sobreescribir las propiedades o las funciones de cada uno,
de cada instancia: ej:

tincholino.getEdad= funtcion(){
  return this.edad / 2}

si luego escribo:
tincholino.getEdad()
me tira:
11, es decir la mitad. Esto solo tincholino, el resto de las instancias van a ejecutar
la funcion tal y cual estaba en el prototipo. 
De todas formas, si pongo:
tincholino
me sigue tirando:

Persona {
  edad: 22,
  getEdad: ƒ (),
  __proto__: { constructor: ƒ Persona(), getEdad: ƒ () }
}

Now hay cuatro maneras de hacer una clase: 

1. La que vimos, the best, creando una funcion constructora (Prototype):*/ 

function Car (marca, cv, color) {
  this.marca = marca; // la fcion constructora recibe los nombres por parametro.
  this.cv = cv;
  this.color = color;
}
var audi = new Car ("audi", 1500, "verde");

/* o  */

function Person (nombre, apellido){
  this.nombre = nombre; // "Juan";
  this.apellido = apellido; // "Perez";
}

Persona.prototype.getNombre = function (){
  return this.nombre + " " + this.apellido;
}

var Toni = new Person ("Toni", "Tralice");
var Tincho = new Person ("Tinchito", "Pelón");
var Emi = new Person ("Emilia", "Elefante");


Toni.getNombre()    // tira 'Toni Tralice'
Tincho.getNombre()  // tira 'Tinchito Pelón'
Emi.getNombre()     // tira 'Emilia Elefante'


/*

2. Object.Create y Pure Prototypal Inheritance:*/

var person = {                 //:un objeto cualquiera
  nombre: "Defecto",
  apellido: "Defecto",
  getEdad: function getEdad (){
    return this.edad;
  }
}
var toni = Object.create(person); /*   :le paso el objeto que quiero crear.
console.log(toni)
me tira el objeto person que creamos al principio:

{
  __proto__: {
    nombre: 'Defecto',
    apellido: 'Defecto',
    getEdad: ƒ getEdad()
  }
}

console.log(toni.__proto__) :lo mismo, me tira el objeto person que creamos al principio.
toni.__proto__  :lo mismo, me tira el objeto person que creamos al principio.
toni.nombre  :me tira "Defecto"       
toni.getEdad  :me tira ƒ getEdad()
toni.getEdad()  : no me tira nada porque no adjudiqué ninguna edad.
toni.edad=23 :me va a tirar 23
toni.getEdad() : me tira 23
toni : 

{
  edad: 23,
  __proto__: {
    nombre: 'Defecto',
    apellido: 'Defecto',
    getEdad: ƒ getEdad()
  }
}


3. EL constructor de clases: ES6 (ECMA script 6) y Clases (Class)*/

class Persona {

  constructor (nombre, apellido){    //:le mando el constructor
    this.nombre = nombre;
    this.apellido = apellido;
  }
saludar (){                           //:le mando los metodos
  console.log("Hola! " + this.nombre);
}
getNombre(){
  return ("Hola! " + this.nombre);
}
}

var toni = new Persona ("Toni", "Toscano");/*
y puedo hacer:
toni.saludar()   : me tira "Hola! Toni"
toni.getNombre()  :me tira "Hola! Toni"


Por ultimo. una clase puede heredar de otra clase:

4. ES6 y Clases (Class)*/

class Empleado extends Persona { //:la clase Empleado se extiende a la clase Persona,
  constructor (nombre, apellido, empleo, sueldo){ //Persona tenia nombre y apellido, Empleado le agrega empleo y sueldo.
   super(nombre, apellido); //:con super invoco al constructor de la clase que extiendo, Persona.    
    this.empleo = empleo;     
    this.sueldo = sueldo;
  }
}

var toni = new Empleado("Toni", "Toscano", "Profesor", 100 );/*
toni.saludar() y saluda: "Hola! Toni"
Si escribo:
toni
me tira:

Empleado {
  nombre: 'Toni',
  apellido: 'Toscano',
  empleo: 'Profesor',
  sueldo: 100,
  __proto__: { constructor: ƒ Empleado() }
}

Si pongo:
toni.__proto__
me tira:

Persona {}

*/











function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que 
  //devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código: 
  
  // las instancias son las que creo a partir de la clase, que es 
  //el molde

  function Usuario(opciones) {
    this.usuario = opciones.usuario; // estas de la derecha son las propiedades del objeto de la consigna
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }  // ahora agrego el metodo saludar. Llamo al constructor Usuario, pongo prototype y el metodo que quiero agregar.
  Usuario.prototype.saludar = function () {      // Así si me olvidé y se lo quiero agregar despues de que cerré la funcion constructora,
    return "Hola, mi nombre es " + this.nombre;  // pero podría agregar el metodo en la función original tambien como hice abajo.
  } // this nombre es el nombre que se definirá en cada instancia.
  return Usuario;

  /* So:
  prototype: Las clases pueden establecer un método una vez 
  y dar acceso a cada objeto de esa clase a esos métodos. 
  Cada clase tiene una propiedad prototype, que luego podemos establecer en métodos.
  */

  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;      // acá agrego el metodo saludar en el prototype del constructor directamente.
    this.saludar = function () {
      return "Hola, mi nombre es " + this.nombre;
    }
  }
  return Usuario;

}



function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
 // Entonces: llamo al Constructor, que en este caso es el parametro de la funcion y que 
 //se llama justamente Constructor, y le agrego el metodo saludar.

 Constructor.prototype.saludar = function () {      
  return "Hello World!";  
}
return Constructor; 

}



function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  // Entonces: llamo al constructor String
  String.prototype.reverse= function () {
    return this.split("").reverse().join(""); // la palabra reservada split divide los elementos de un array, "toni" en  "t" "o" "n" "i",
  }                                 // y la  palabra reservada reverse los da vuelta "i" "n" "o" "t", 
}                                   // y por ultimo la palabra join nos va a unir los caracteres que estaban separados, 
                      //para devolver la misma cadena que tenia al principio solo que invertida, como pide el ejercicio,
                     // quedaría "inot".



// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',     // este "Juan" sería el this.nombre. Idem el resto.
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(/*Escribir los argumentos que recibe el constructor*/ nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }                               //Cuando yo vaya a declarar una nueva instancia, en este caso una nueva persona, 
    detalle () {                  //voy a hacer:  var person = new Persona() y así le paso a la nueva instancia los 
      return {                    // parametros de la clase Persona, es decir nombre, apellido, etc. El famoso this,
        Nombre: this.nombre,       // va a hacer referencia a esa nueva variable, a la instancia que creé, donde por ejemplo,
        Apellido: this.apellido,    // this.nombre va a ser el nombre que le de al tipo 
        Edad: this.edad,
        Domicilio: this.domicilio,
      }
    }

}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
var person = new Persona ("Juan", "Perez", 22, "Saavedra 123")
return person
}
/*
person.detalle ()     me tira {
                                 Nombre: 'Juan',
                                 Apellido: 'Perez',
                                 Edad: 22,
                                 Domicilio: 'Saavedra 123'
                               }
*/


  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años"; // ves, devuelve this.nombre, o sea Juan en este caso,
  }                                                 // + agrego la coma y un espacio para que me devuelva "Juan, ",
}                               // despues agrego su edad con this.edad, o sea 22, y le sumo un espacio seguido por el string
                                // años para que quede "Juan, 22 años"

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
