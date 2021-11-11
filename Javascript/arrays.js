
/**
 * 
 * Accessing Elements
Each element in an array has a numbered position known as its index.
 We can access individual items using their index, which is similar to
  referencing an item in a list based on the item’s position.
 */

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
//Print the fisrts element of the array
//console.log(listItem);

/**
 * Update Elements
 *  Once you have access to an element in an array, you can update its value.
 */
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'
//print ['bread', 'avocados', 'milk']
//console.log(groceryList);

/**
 * Arrays with let and const
 * You may recall that you can declare variables with both the let and const keywords.
 * Variables declared with let can change, be reassigned do a push ahd pop.
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = 'Mayo'; //Change
//console.log(condiments);
//Print ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']

condiments.push('Pepper'); //Push
//console.log(condiments); 
//Print ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha', 'Pepper']

/**
 * .pop() does not take any arguments, it simply removes 
 * the last element of the Array.
 */
condiments.pop(); //Pop
//console.log(condiments);
//Print ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']

condiments = ['Mayo']; // reassigned
//console.log(condiments);
//Print ['Mayo']


/**
 * Variables declared with the const keyword cannot be reassigned. 
 * However, elements in an array declared with const remain mutable.
 * Meaning that we can change the contents of a const array, but cannot 
 * reassign a new array or a different value.
 * We also can push and pop elements
 */
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon'; //Chage
//console.log(utensils);
utensils.push('nose que mas'); //Push
//console.log(utensils); 
//Print ['Fork', 'Knife', 'Chopsticks', 'Spork', 'no se que mas']

utensils.pop(); //Pop
//console.log(utensils); 
//Print ['Fork', 'Knife', 'Chopsticks', 'Spork']

utensils = ['Spoon'] //ERROR