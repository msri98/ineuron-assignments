//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//*********************************************************************/
// Using for loops, write a Javascript program to output the following
// pattern -
//  1
//  2 3
//  4 5 6
//  7 8 9 10
//  11 12 13 14 15
//*********************************************************************/

const num_of_ints = 10; //set number of integers
var count_num=0;
var ht_patrn = 0; //height of pattern
var max_num=0;
var str_prt = "";

//find height of pattern
for (i = 1 ; i <= num_of_ints ; i++)
{
   //height pattern
    ht_patrn+=1;
    //count of integers
    count_num+=i;
    if (count_num >= num_of_ints) break;
}

    // External loop
    for (let i = 1; i <= ht_patrn; i++) {
        // Internal loop
        let n = 1;
        while (n <= i) 
        {
            str_prt += max_num+1+" ";
            n+=1;
            max_num += 1;
        }
        str_prt += "\n";
  }
  console.log(str_prt);

//***************************************************************/
// program to check an Armstrong number of three digits
//***************************************************************/

//import prompt module
const prompt = require("prompt-sync")({sigint: true});

let sum = 0;
let num = 0;
// get input of 3 digit number
while (true) 
{
    num = prompt('Enter a three-digit positive integer: ');

    if ((`${num}`.length == 3) && (num > 0)) break;
}

// iterate 3 digit number to find its 3 power value
for (const idx in `${num}`)
{
    sum+=Math.pow(num[idx], 3);

}
//check if sum of those 3 digits power of 3 is equal to the number itself.
if (sum == num) 
{
    console.log(`${num} is an Armstrong number`);
}
else 
{
    console.log(`${num} is NOT an Armstrong number`);   
}
//**********************************************************************/
//Write a program to find whether a given number is special number or not
//***********************************************************************/

// import prompt module
const prompt = require("prompt-sync")({sigint: true});

let sum = 0;
let num = 0;
// get input 
while (true) 
{
    num = prompt('Enter a positive integer: ');

    if (num > 0) break;
}

// calculates Factorial of a number
function factorialize(num) {

    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }  
    else if (num == 0) {
            return 1;
        
    }
    else {
     return num * factorialize(num-1);
    } 
  }


// iterate input number to find its sum of each digit's factorial value
for (const idx in `${num}`)
{
    sum+=factorialize(num[idx]);

}

//check if sum of Factorial of each digit in the number is equal to the input number itself.
if (sum == num) 
{
    console.log(`${num} is a Special number`);
}
else 
{
    console.log(`${num} is NOT a Special number`);   
}