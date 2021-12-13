// No cambies los nombres de las funciones.

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
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código: // Ojete: acá tengo que usar [] si o si para agregar, no puedo usar punto, 
  // porque property en realidad no es el nombre del argumento, detrás de property puede aparecer cualquier cosa, 
  // es algo genérico, cuando es así uso corchete, sea apra agregar que solo para invocar. 
  //EL punto lo uso cuando quiero invocar exactamente property, pero acá no es el nombre real que hay detras, 
  // por detrás puede haber nombre, edad, fecha, etc. Si yo tuviera una de esas puntuales como parametro, 
  // ahí podría usar punto, pero acá no.
  objeto[property] = null;
  return objeto;
}


function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código: // Y bue, así se invoca un metodo/función.
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var resultado = objetoMisterioso.numeroMisterioso * 5;
  return resultado;

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código: // Ojote: de vuelta, acá el verdadero nombre no es unaPropiedad, 
  // puede aparecer cualquier cosa detras, uso [] porque el punto me devolvería exactamente unaPropiedad
  // y ese no es el nombre verdadero que está detrás
delete objeto[unaPropiedad];
return objeto;
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
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  // uso != porque le estoy diciendo que si no está vacío es que está lleno y entonces devuelva true,
  // no uso !== porque no me refiero al termino específico y puntual null
  if(usuario.email != null) {
    return true;
  } else {
    return false;
  }


// O, si no, directamente, si usuario tiene una propiedad email, me va a retornar true, de lo contrario false.


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
  // si el objeto tiene adentro una propiedad de nombre propiedad, cuando busque [propiedad]
  // en el objeto, siempre con braquets por ser generico, 
  // tengo que encontrar un valor y por lo tanto el resultado de la busqueda no puede ser nulo, ergo, 
  // si el resultado de la busqueda objeto [propiedad] es sitinto de nulo, es true, el objeto tiene puna propiedad
  // de nombre propiedad.
  if (objeto[propiedad] != null) {
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
  // Las comillas del primer password son porque yo ya se que dentro del objeto hay, definitivamente, porque 
  // me lo dicen, un propiedad llamada password (sería :
  //usuario : {
  // password: algun valor, ej, "Hola!"
 // } ), por eso las comillas.
  // El segundo password es el que me pasan, el que está de parametro en la funcion, que representaría el "Hola!",
  //es decir, representaría el valor o contenido de la propiedad password que está dentro del objeto.
  //Bien podría, siendo que ya se el nombre
  // especifico de la propiedad, usar punto para invocarla, solo que sin comillas.
  // Si el parametro en vez de llamarse password se llamara pass, pondría: if (usuario["password"]===pass)

  if (usuario["password"] === password) {
    return true;
  } else {
    return false;
  }



  if (usuario.password === password) {
    return true;
  } else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  
 usuario.password = nuevaPassword;
return usuario;



  usuario["password"] = nuevaPassword;
  return usuario;



  usuario[password] = nuevaPassword;
  return usuario;

}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  // A ver, sería algo así lo que existe:
  //  usuario {
  //  amigos: [bla, ble, bli, blo, blu] 

usuario.amigos.push(nuevoAmigo);
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
]
  */ // si me pide que defina como true el valor de cada propiedad esPremium, significa que antes eran false.
  // voy a usar el objeto map, que sirve para ejecutar una acción por cada elemento del array, tomandolo como argumento;
  // yo le pido que mapee usuarios y que por cada elemento dentro de usuarios, a la propiedad esPremium de cada elemento, 
  // la defina con true. Así map setea los true.
  // // Too, lo puedo resolver con un for.

  usuarios.map(function (element) {
    element.esPremium = true;
  });
  return usuarios;




  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true
  };
  return usuarios;

}


function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
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
  }
 ]
}
  */
  var acumulador = 0; //porque me piden una suma, una acumulación 
  usuario.posts.map(function (element) {
    acumulador += element.likes;         // tambien podria haber puesto acumulador = acumulador + elements.like;
  });
  return acumulador;


  var acumulador = 0;
  for (var i = 0; i < usuario.posts.length; i++) {
    acumulador += usuario.posts[i].likes     // o sea acumulador = acumulador + usuario.posts[i].likes
  };
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

  calcularPrecioDescuento: funcion () {                          //Esto es lo que yo tengo que agregar, un metodo

  }
}
*/ //me paro en las cordenadas producto.calcular... para crear la fcion

  producto.calcularPrecioDescuento = function () {
    var precioConDescuento =
      producto.precio - producto.precio * producto.porcentajeDeDescuento;
    return precioConDescuento;
  }
  return producto;    


  // Ahora otra manera de resolverlo, usando el this, que es otra palabra reservada y que acá me dice: 
  //tomá la propiedad precio de ese objeto y restale el producto de la propiedad precio por 
  // la propiedad porcentajeDeDescuento del mismo objeto.

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
