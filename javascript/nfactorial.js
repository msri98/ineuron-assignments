//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//**************************************************

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






