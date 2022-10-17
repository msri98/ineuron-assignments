//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//************************************************************************/
// This assignment will help you interpret mathematical relationships both
// algebraically and geometrically.
// Create a function that takes a number (step) as an argument and returns the
// number of matchsticks in that step.
//************************************************************************/

let num = 0;
const prompt = require("prompt-sync")({sigint: true});

// get input 
while (true) 
{
    num = prompt('Enter a positive integer: ');

    if (num > 0) break;
}
//Take input from the user in the function parameter and return the output
// using the return statement.
function countMatchSticks(num) 
{
   // multiply input step number by 6 (  there are 6 sticks in each step) MINUS (input Step number - 1) 
    return (num*6)-(num-1);

}
console.log(`There are ${countMatchSticks(num)} matchsticks in the step:${num}`);