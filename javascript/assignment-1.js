//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//****************************************************
//Program to find whether a given YEAR is a LEAP Year
//****************************************************/
const prompt = require("prompt-sync")({sigint: true});

//program to check leap year
function checkLeapYear(year) {


    const leap = new Date(year, 1, 29).getDate()===29;

    if (leap) {

        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }     
    
}

//take input 
const year = parseInt(prompt('Enter a year:'));

checkLeapYear(year)

//*****************************************************************
//Program to Convert temperatures to and from Celsius , Fahrenheit
//****************************************************************/
function cToF(celsius) 
{
  
  var cToFahr = celsius * 9 / 5 + 32;
  var message = celsius + '\xB0C is ' + cToFahr + ' \xB0F';
  console.log(message);
}

function fToC(fahrenheit) 
{
  var fToCel = (fahrenheit - 32) * 5 / 9;
  var message = fahrenheit+'\xB0F is ' + fToCel + '\xB0C';
    console.log(message);
} 
cToF(60);
fToC(45);

//*****************************************************************
//Program to find the Factorial of a Number
//****************************************************************/

const prompt = require("prompt-sync")({sigint: true});

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
  

//take input 
const num = parseInt(prompt('Enter a Number to find its Factorial value: '));
const nfactorial = factorialize(num);


if (nfactorial === -1) {
    console.log("You entered Negative integer. pleaes enter Postive Number !");
}
else {        
    console.log(`factorial of a ${num} is ${nfactorial}`);
}