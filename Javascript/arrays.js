
/**ACCESSIN ELEMENTS ------------------------------------
 * 
Each element in an array has a numbered position known as its index.
 We can access individual items using their index, which is similar to
  referencing an item in a list based on the item’s position.
 */

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
//Print the fisrts element of the array
//console.log(listItem);


/** UPDATE ELEMENTS ---------------------------------------
 * 
 *  Once you have access to an element in an array, you can update its value.
 */
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'
//print ['bread', 'avocados', 'milk']
//console.log(groceryList);

/**
 * Arrays with LET AN CONST ----------------------------------------
 * 
 * LET
 * 
 * You may recall that you can declare variables with both the let and const keywords.

*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = 'Mayo'; //Change
//console.log(condiments);
//Print ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']

condiments = ['Mayo']; // reassigned
//console.log(condiments);
//Print ['Mayo']

/**
 * CONST
 * Variables declared with the const keyword cannot be reassigned. 
 * However, elements in an array declared with const remain mutable.
 * Meaning that we can change the contents of a const array, but cannot 
 * reassign a new array or a different value.
 * We also can push and pop elements
 */
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon'; //Chage
//console.log(utensils);

//utensils = ['Spoon'] //ERROR



/** PUSH AND POP -----------------------------------
 * 
 * PUSH
 * 
 * FF
 *  * Variables declared with let can change, be reassigned do a push ahd pop.
 * 
 */
//condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

 condiments.push('Pepper'); //Push
 //console.log(condiments); 
 //Print ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha', 'Pepper']

 //utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
 utensils.push('nose que mas'); //Push
 //console.log(utensils); 
 //Print ['Fork', 'Knife', 'Chopsticks', 'Spork', 'no se que mas']
 
 /** POP
  * .pop() does not take any arguments, it simply removes 
  * the last element of the Array.
  */

  
  utensils.pop(); //Pop
  //console.log(utensils); 
  //Print ['Fork', 'Knife', 'Chopsticks', 'Spork']

 condiments.pop(); //Pop
 //console.log(condiments);
 //Print ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']



/**
 * ARRAY BASIC FUNCTIONS
 */

 let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

 secretMessage.pop(); //Elimina el último elemento de la lista
 secretMessage.push('to', 'Program'); //Agrega elementos al final de la lista
 let index = secretMessage.indexOf('easily'); // encuentra el índice de una palabra de la lista
 secretMessage[index] = 'right'; // remplazar una palabra de la lista
 secretMessage.shift(); // Remueve el primer elemento de la lista
 secretMessage.unshift('Programming'); // Agrega un elemento al principio de la lista
 index = secretMessage.indexOf('get'); 
 secretMessage.splice(index, 5,'know'); // Elimina elementos con un indice y cantidad determinada
 //.splice(a,b,'c') a = indice donde se empieza la lista de elementos a eliminar, b = numero de elemento de la lista, c= palabra a reemplazar
 console.log(secretMessage.join(' '));