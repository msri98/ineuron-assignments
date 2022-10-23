// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
/*
1. 
Create a function to iterate over the following list [“John”,
    “Rohn”, “Danny”, “James”]
*/

for (item of ["John","Rohn", "Danny", "James"]) 
{

    console.log(item);
}
//********************************************************88 */
/*
2.
Iterate over all the characters of the word “iNeuron”.
*/

for (ch of "iNeuron")
{
    console.log(ch);
}

//********************************************************88 */
/*
3.
Create a functional iterator, with a next function.
This below function will display odd numbers between start and end parameter values
*/
function oddNumbersIterator(start = 0, end = Infinity) {

    // find all odd numbers between start and end parameters
    var oddarr = new Array();
    for ( i = start; i <= end ; i++) 
    {
      if (i%3 === 0)  oddarr.push(i);  
    } 

    let nextIndex = 0;
    let endIndex = oddarr.length;
    let iterationCount = 0;

    const oddNumIterator = {
      next() {
        let result;
        if (nextIndex < endIndex) 
        {
            result = { value: oddarr[nextIndex], done: false };
            nextIndex += 1;
            iterationCount++;
            return result;
        }
        return { value: iterationCount, done: true };
      }
    };
    return oddNumIterator;
  }

const it = oddNumbersIterator(1, 10);

let result = it.next();
while (!result.done) {
 console.log(result.value); 
 result = it.next();
}
//********************************************************************** */
/*
4.
In the following two arrays find which two elements match
using iterators.
Array 1 - [“a”, “b”, “c”, “d”]
Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]
*/
//************************************************************************ */
const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "h", "a", "i", "j"];

for (item1 of arr1) 
{
    for (item2 of arr2)
    {
        if (item1 === item2) console.log(item1); 
    }
}
//*************************************************************************** */
/*
What are the different ways of iterating through an array?
demonstrate them.
*/
// Way 1. using FOR LOOP
//********************************************************************************8 */
const arr2 = ["e", "f", "g", "h", "a", "i", "j"];

for (let index = 0; index < arr2.length; index++) 
{
    console.log(arr2[index]);
}    


// Way 2. FOR LOOP - looping the Values
//**************************************** */

const arr2 = ["e", "f", "g", "h", "a", "i", "j"];

for (item of arr2)
    console.log(item)

// Way 3. using FOREACH over the array
//***********************************************8 */
const arr2 = ["e", "f", "g", "h", "a", "i", "j"];

arr2.forEach(myFunction);
function myFunction(item)
{
    console.log(item);
}
// Way 4. using For In 
//************************************************ */
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  console.log(person[x]);
}


// Way 5. Array.every()  
//***************************************************** */
const arr2 = [1,2,3,4,5,6];
const UNDER_FIVE = x => x < 5;


if (arr2.every(UNDER_FIVE))
{
    console.log("All numbers are Under_Five");

} 
else
{
    console.log("At least 1 number is not Under_Five");
}

// Way 6. Array.map()  
const arr2 = [1,2,3,4,5,6];
myFunction = x => console.log(x);

arr2.map(myFunction)

//*********************C O M P L E T E D********************************8 */