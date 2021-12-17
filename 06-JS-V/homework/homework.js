// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código: // las instancias son las que creo a partir de la clase, que es el molde

  function Usuario(opciones) {
    this.usuario = opciones.usuario; // estas de la derecha sonlas propiedades del objeto de la consigna
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }  // ahora llamo al constructor Usuario, pongo prototype y el metodo que quiero agregar.
  Usuario.prototype.saludar = function () {      // Así si me olvidé y se lo quiero agregar despues de que cerré la funcion,
    return "Hola, mi nombre es " + this.nombre;  // pero podría agregar el metodo en la función original tambien como hice abajo.
  } // this nombre es el nombre que se definirá en cada instancia.
  return Usuario;

// 


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
    //   Nombre: 'Juan',
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
