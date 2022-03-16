/**
 * Creating Object Literals
 * Objects can be assigned to variables just like any JavaScript type. 
 * We use curly braces, {}, to designate an object literal:
 */

 let spaceship2 = {
    'Fuel Type': 'diesel',
    color: 'silver'
  };

  let universidad = {
    sede : 'Medellín',
    'Nombre' : 'EAFIT'
  };
/**
 * Accessing Properties
 * With property dot notation, we write the object’s name, followed by the dot operator
 *  and then the property name (key):
 * 
 * The second way to access a key’s value is by using bracket notation, [ ].
 */
console.log(spaceship2["Fuel Type"])
console.log(spaceship2.color)
console.log(universidad['Nombre']);
console.log(universidad.Nombre)
console.log(universidad.sede);

/**
 * Property Assignment
 * Objects are mutable meaning we can update them after we create them!
 * We can use either dot notation, ., or bracket notation, [], and the assignment operator,
 *  = to add new key-value pairs to an object or change an existing property.
 */


 const spaceship = {type: 'shuttle'}; // normal assignment
 //spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
 spaceship.type = 'alien'; // Changes the value of the type property
 spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
 spaceship.mission = 'Explore the universe';
 spaceship['Probando algo'] = 'si funciona';


 console.log( spaceship['Probando algo'])
 //You can delete a property from an object with the delete operator.
 delete spaceship.mission;

 let ejemplo = ' a ver si funciona';
 universidad.lugar = 'Las vegas';
 universidad.ejemplo = ejemplo;

console.log(universidad.lugar);
console.log(universidad.ejemplo);
 /**
  * METHODS
  *    When the data stored on an object is a function we call that a method. A property 
  *  is what an object has, while a method is what an object does.
  * 
  * For example console is a global javascript object and .log() is a method on that object. 
  * Math is also a global javascript object and .floor() is a method on it.
  */

 const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

universidad = {
  bienvenida (){
    console.log('Bienvenid@ a la universidad EAFIT')
  },
  despedida () {
    console.log('Hasta luego, esperamos verte de nuevo')
  }
}
universidad.bienvenida();
universidad.despedida();

// With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
const alienShip2 = {
  invade2 () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  },
  invade3 () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.');
  }
};

alienShip2.invade2();
alienShip2.invade3();

/**
 * NESTED OBJECTS
 * 
 * In application code, objects are often nested— an object might have another object as a property
 *  which in turn could have a property that’s an array of even more objects!
 */

 const spaceship3 = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
 crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
 },
 engine: {
     model: 'Nimbus2000'
  },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
 }
}; 

universidad = {
  personal: {
    profesores: {
      nombre: ['carolina', 'gimena', 'carlos antonio'],
      edad: [34, 33, 38]
    },
    estudiantes: {
      nombre: ['valeria', 'milan', 'camilo'],
      edad: 0
    }
  },
  carreras: {
    ingenierias: {
      nombre: ['Iingenieria es sistemas', 'Ingeniería química', 'Ingeniería civil']
    },
    administracion: {
      nombre: 'administracion de empresas' 
    },
  }
}

let nombre = 'roberto';
universidad.personal.profesores.nombre.push(nombre);


universidad.carreras.ingenierias.nombre[0] = 'Ingeniería en sistemas';
universidad.carreras.ingenierias.nombre[1] = 'Ingeniería física';

console.log(universidad.personal.profesores.nombre);
console.log(universidad.carreras.ingenierias.nombre[0]);
console.log(universidad.carreras.ingenierias.nombre[1]);

// We can chain operators to access nested properties.
spaceship3.nanoelectronics['back-up'].battery; 

/**
 * PASS BY REFERENCE
 * Objects are passed by reference. This means when we pass a variable assigned to an object into a 
 * function as an argument, the computer interprets the parameter name as pointing to the space in memory
 * holding that object
 */

let coloresRepresentativos = obj => {
  obj.color = 'Azul Marino';
};

let bloquesUniversitarios = function(obj) {
  obj.bloque = 'bloque 19';
};

coloresRepresentativos(universidad);
bloquesUniversitarios(universidad);
console.log(universidad.bloque);
console.log(universidad.color);

/**
 * LOOPING THROUGH OBJECTS
 * 
 * Loops are programming tools that repeat a block of code until a condition is met.
 *  We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in
 *  objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects 
 * with the for...in syntax .
 */

 let spaceship4 = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship4.crew) {
  console.log(`${crewMember}: ${spaceship4.crew[crewMember].name}`);
}

/**
 * THIS KEYWORD
 * 
 * The this keyword references the calling object which provides access to the calling object’s properties
 * 
 */

let colegio = {
  nombreColegio : 'mateo',
  bienvenidaAlColegio () {
    console.log(`bienvenido al colegio: ${nombreColegio}`);
  },
  despedidaAlColegio () {
    console.log(`despedida al colegio: ${this.nombreColegio}`);
  }
}

//colegio.bienvenidaAlColegio()  // Sale error debido a que se utiliza una variable interna en el objeto
colegio.despedidaAlColegio() // Imprime 'despedida al colegio: mateo'


/**
 * GETTERS
 *   
 * Getters are methods that get and return the internal properties of an object
 * 
 * Beneficts
 *  Getters can perform an action on the data when getting a property.
 *  Getters can return different values using conditionals.
 *  In a getter, we can access the properties of the calling object using this
 *  The functionality of our code is easier for other developers to understand.
 */

const estudiante = {
  _nombre : 'carlos antonio',
  _apellido : 'velazques',

  get nombreCompleto (){
    if (this._nombre && this._apellido){
      return `${this._nombre} ${this._apellido}`;
    }
    else{
      return `No se encuentra ningun pinche nombre`;
    }
  }
}
console.log(estudiante.nombreCompleto);

let tarjetaDeCredito = {
  _numeroDeTarjetaDeCredito : 12345678,
  get numeroDeTarjetaDeCredito () {
    if (typeof this._numeroDeTarjetaDeCredito === "number") {
      return `${this._numeroDeTarjetaDeCredito}`;
    } else{
      return 'eso no es un número brut@ de mierda';
    }
  }
};
console.log(tarjetaDeCredito.numeroDeTarjetaDeCredito);

/**
 * SETTERS
 * 
 * Along with getter methods, we can also create setter methods which reassign values
 *  of existing properties within an object
 * 
 */

let lapicesDeColores = {
  _colorFavorito : 'amarillo',
  get colorFavorito () {
    if (this._colorFavorito){
      return `${this._colorFavorito}`;
    }
    else {
      return 'No hay color favorito';
    }
  },
  set colorFavorito (color) {
    if(typeof color === "string"){
      this._colorFavorito = color;
    }
    else {
      console.log('el color tiene que ser un string');
    }
  }
};

console.log(lapicesDeColores.colorFavorito)
lapicesDeColores.colorFavorito = 'azul';
console.log(lapicesDeColores.colorFavorito)

/**
 * FACTORY FUNCTIONS
 * 
 * So far we’ve been creating objects individually, but there are times where we want to create
 * many instances of an object quickly. Here’s where factory functions come in.
 * 
 * A real world factory manufactures multiple copies of an item quickly and on a massive scale. 
 * A factory function is a function that returns an object and can be reused to make multiple object
 * instances.
 */

let profesoresFactory = function(nombre, apellido, edad, materia, lugar) {
  return {
    nombre : nombre,
    apellido : apellido,
    edad : edad,
    materia : materia,
    lugar : lugar,
    bienvenida : function(lugar) {
      console.log(`Desde ${lugar}, bienvenid@`);
    }
  }
};

const p1 = profesoresFactory('carlos antonio','pelaez',34,'quimica','barranquilla');
const p2 = profesoresFactory('Miguel Angel','Correa', 23, 'politica', 'barrancabermeja');

let objetosProfesores = [];
objetosProfesores.push(p1,p2)
let i = 0;
while(i<objetosProfesores.length){
  console.log(`${objetosProfesores[i].bienvenida(objetosProfesores[i].lugar)} profesor ${objetosProfesores[i].nombre}`);
  i++;
}

// ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

const profesoresFactory2 = (nombre, apellido, edad, materia, lugar) => {
  return {
    nombre : nombre,
    apellido : apellido,
    edad : edad,
    materia : materia,
    lugar : lugar
  }
}

/**
 * DESTRUCTURED ASSIGNMENT
 * In destructured assignment we create a variable with the name of an object’s key that
 * is wrapped in curly braces { } and assign to it the object.
 */

let ropaFavorita = (color, forma, estilo) => {
  return{
    color,
    forma,
    estilo,
  }
};

ropaFavorita.color = 'amarillo';
ropaFavorita.forma = 'vestido';
ropaFavorita.estilo = 'ligero';

const {color} = ropaFavorita;

console.log(color)

