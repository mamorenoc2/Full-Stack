/** FUNCTIONS:
 * In functions, is important that the function name is called before
 * of the function, Since hoisting isn’t considered good practice, 
 * we simply want you to be aware of this feature.
 */

greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
/**
 * Another way to define a function is to use a function expression.
 */
const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    day = true;
  } else {
    day = false;
  }
  return day;
};

const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater2('Tuesday'));

console.log(plantNeedsWater('Tuesday'));
/**
 * Another way to define a function is to use a functions Arrows.
 */

const rectangleArea = (width, height) => {
  return width * height;
};

/**
 * Concise Body Arrow Functions
 * 
 * 1. Functions that take only a single parameter do not need that parameter to be 
 * enclosed in parentheses. However, if a function takes zero or multiple parameters,
 *  parentheses are required.
 * 
 * EXAMPLE:
 * Zero Parameters
 * const funtionName1 = () => {funtion};
 * 
 * One parameter
 * const funtionName2 = parameterOne => {funtion};
 * 
 * Two parameters
 * const funtionName3 = (parameterOne, parameterTwo) => {funtion};
 * 
 * 2. A function body composed of a single-line block does not need curly braces. Without the 
 * curly braces, whatever that line evaluates will be automatically returned. The contents of
 *  the block should immediately follow the arrow => and the return keyword can be removed.
 * This is referred to as implicit return.
 * EXAMPLE:
 */

//THIS
const squareNum = (num) => {
  return num * num;
};
//IS THE SAME
const squareNum2 = num => num * num;

//With if/else condition

const isFriday = day => day === 'friday' ? true : false;

console.log(isFriday('friday'));

/**
 * 
 */


