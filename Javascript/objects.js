/**
 * Creating Object Literals
 * Objects can be assigned to variables just like any JavaScript type. 
 * We use curly braces, {}, to designate an object literal:
 */

 let spaceship2 = {
    'Fuel Type': 'diesel',
    color: 'silver'
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

 //You can delete a property from an object with the delete operator.
 delete spaceship.mission;

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

// We can chain operators to access nested properties.
spaceship3.nanoelectronics['back-up'].battery; 


