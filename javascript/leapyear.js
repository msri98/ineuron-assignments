//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//****************************************************

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