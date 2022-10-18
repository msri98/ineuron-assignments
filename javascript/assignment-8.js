// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
//Can we put duplicate values in the set object ?
//***************************************************************************

//Answer: No. set object only stores non-duplicate Items
//**************************************************************************** */
// Write the syntax for
// a) Creating new set object
// b) Adding new element to set object
// c) Deleting element from set object
//************************************************************************ */
//a) Creating new set object
//************************************************************************* */

// Create a Set
    const letters = new Set(["a","b","c","c"]);
    console.log(letters);
//*********************************************** */
//b) Adding new element to set object
//*********************************************** */
    letters.add("z");
    console.log(letters);
//*********************************************** */
// c) Deleting element from set object
//*********************************************** */
    if (letters.has("z")) letters.delete("z");
    console.log(letters);

//************************************************************************
//Create a set object with four random numbers from 0 to 10. Check if this
//newly created set object has 8 in it. Use set object methods.
//************************************************************************

var newset = new Set(); 

// make sure Set gets added Upto 4 items Only.
while (newset.size < 4)
{
    newset.add(Math.floor(Math.random() * 10));
}
console.log(newset)
console.log("Does this set have 8:" + newset.has(8));

//*********************** C O M P L E T E D ************************ */