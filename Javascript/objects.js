/**
 * Creating Object Literals
 * Objects can be assigned to variables just like any JavaScript type. 
 * We use curly braces, {}, to designate an object literal:
 */

 let spaceship = {
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
console.log(spaceship["Fuel Type"])
console.log(spaceship.color)

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



