/** IF STATEMENT
 * 
 */
var hambre = true
if (hambre == true){
    console.log('A comer se dijo!')
} else {
    console.log('Deje la gula, angurrient@')
}

/** VALUES OPERATORS
 *  Less than: <
 *  Greater than: >
 *  Less than or equal to: <=
 *  Greater than or equal to: >=
 *  Is equal to: ===
 *  Is not equal to: !==
 * 
 */

/** LOGICAL OPERATORS
 * the and operator (&&)
 * the or operator (||)
 * the not operator, otherwise known as the bang operator (!)
 */

/** 
 *  Truthy and Falsy
 * Sometimes, you’ll want to check if a variable exists and you won’t necessarily
 * want it to equal a specific value — you’ll only check to see if the variable has been assigned a value
 * So which values are falsy— or evaluate to false when checked as a condition?
 */
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}
 /* The list of falsy values includes:
 *  *0
 *  *Empty strings like "" or ''
 *  *null which represent when there is no value at all
 *  *undefined which represent when a declared variable lacks a value
 *  *NaN, or Not a Number
 */

 let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 // Prints 'No apples left!'

/**
 * TERNARY OPERATOR 
 */

//This

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
// Is the same

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

/** SWICTH CASE
 * 
*/
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}