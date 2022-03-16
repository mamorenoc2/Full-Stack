// Data types

/** PRIMITIVE DATA TYPES 
 * Numbers: Any number include decimals
 *  Strings: Any group of characters
 *  Booleans: true o false
 *  Null:  intentional abscence of a value 'null'
 *  Undefined: similar to null
 *  
 *  COMPLEX DATA TYPE
 *  Symbol: unique identifiers
 *  Object: collections of related data
 * 
 * While writing code, it can be useful to keep track of the data types of the variables in your program.
 * If you need to check the data type of a variable’s value, you can use the typeof operator
*/

const consI = 'foo';
const consII = 10;
const consIII = true;

console.log(typeof consI) //String
console.log(typeof consII) //number
console.log(typeof consIII) //Boolean

/** CREATE A VARIABLE 
 * 
 * ** VAR:
 *      Example ( 
 *                  var myName = 'something';
 *                  )
 *      -var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
 *      -myName is the variable’s name. Capitalizing in this way is a standard convention in JavaScript called camel casing. In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything
 * 
 * ** LET:
 *      -The let keyword signals that the variable can be reassigned a different value
        - we can declare a variable without assigning the variable a value
        - the difference betwen var and let is that var is function scoped and let is block scoped.
 */
 let meal = 'Enchiladas';
 console.log(meal); // Output: Enchiladas
 meal = 'Burrito';
console.log(meal); // Output: Burrito
 /*       
    ** CONST:
        Example (
                    const myName = 'Gilberto';
        )
        - a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError
        - Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError. 

*/
/** STRINGS INTERPOLATION
 *  with the keys (alt + }*2) we can type ``
 */
const hello = ' hi';
console.log(`hello or ${hello}`)

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
const miNombre = 'Manuela';
console.log(`Mi nombre es ${miNombre}.`);
// Output: I own a pet armadillo.

/**
 * The for ... of Loop
 * One of the primary uses of the for...of loop is iterating through the items of an array. 
 * The for...of can also be used to iterate over strings.
 */

// Normal for loop
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}

// for ... of Loop

const hobbies2 = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}
