/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/

// Create a new variable named tongueTwister by combining the existing strings 
// s1, s2, s3, s4, and s5 to form the following tongue twister string: 
// "Fred fed Ted bread and Ted fed Fred bread".

const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";



// Concatenate the string variables into one new string

const tongueTwister = ` ${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s5} `


// Print out the concatenated string


console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings



const lastLetterPart1 = part1.charAt(part1.length - 1).toUpperCase();
const lastLetterPart2 = part2.charAt(part2.length - 1).toUpperCase();


const result = part1.slice(0, -1) + lastLetterPart1 + part2.slice(0, -1) + lastLetterPart2;



// Print the cameLtaiL-formatted string
console.log(result);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const calculateTip = billTotal*.15; 


// Print out the tipAmount


console.log(calculateTip);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.floor(Math.random()*10+1)

// Print the generated random number

console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:

const expression1 = a && b; // false 

const expression2 = a || b; //true 

const expression3 = !a && b; //false

const expression4 = !(a && b); //true 

const expression5 = !a || !b; //true 

const expression6 = !(a || b); //false 

const expression7 = a && a; //true