//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//Javascript Assignmnet - 2
//*************************************************************************
// Program  to check whether a triangle is equilateral,isosceles or scalene
//*************************************************************************/

let side1 = 3;
let side2 = 1;
let side3 = 5;

 let valid = ((side1+side2)>side3)&&((side2+side3)>side1)&&((side3+side1)>side2);

if (valid) {
  console.log("it is a valid Triangle");
}else{
  console.log("not a valid Triangle")
}

if(side1==side2&&side2==side3){
  console.log("equilateral Triangle");
}else if(side1==side2||side2==side3||side3==side1){
  console.log("isosceles triangle")
}else{
  console.log("scalene triangle");

//*********************************************************************************
// Program using switch case to find the grade of a student based on marks obtained
//*********************************************************************************/

  const prompt = require("prompt-sync")({sigint: true});

  //take input 
  const marks = parseInt(prompt('Enter Marks:'));
  
  // function to display the GRADE
  function marksGrade(marks)
  {
  switch (true)
  {
  case ((marks >= 90) && (marks <=100)):
      console.log("Grade is S");
      break;
  
  case ((marks >= 80) && (marks < 90)):
      console.log("Grade is A");
      break;
  case ((marks >= 70) && (marks < 80)):
      console.log("Grade is B");
      break;
  case ((marks >= 60) && (marks < 70)):
      console.log("Grade is C");
      break;
  case ((marks) >= 50 && (marks < 60)):
      console.log("Grade is D");
      break;
  case ((marks >= 40) && (marks < 50)):
      console.log("Grade is E");
      break;
  case ((marks >= 0) && (marks < 40)):
      console.log("Student has failed");
      break;            
  default:
      console.log("Invalid Marks");
      break;    
  }
  }
  // Call to function
  marksGrade(marks)
//*********************************************************************************
// Program to find the sum of the multiples of 3 and 5 under 1000
//*********************************************************************************/
var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);

//*********************************************************************************
// Program to find the factorial of all prime numbers between a given range
//*********************************************************************************/
function factorialPrime(num1 , num2)
{
var sum = 1;
var isPrime = true

//make sure num1 less than num2 and they are not 0 either
if ((num1 > num2) || ((num1 == 0) || (num2 == 0 ))) {
  console.log("Please Enter num-1 less than num-2 and both numbers must be greater than 0")
  return 0
}

// both numbers are 1
if ((num1 == 1) && (num2 == 1)) {
    console.log(`${num1} and ${num2} are not Prime numbers`)
    return 0;
}

for ( var number = num1 ; number < num2+1; number++ ) 
  {
    
   // 1 is not a prime
   if (number == 1) {
    continue;
    }
    isPrime=true
    // looping through 2 to number
    for (let i = 2; i < number+1; i++) 
    {
        
        if ((number != i) && (number % i == 0)) 
        {
            // Not a prime number
            isPrime = false
            continue;
        }
    }
        if (isPrime) 
        {
            sum*=number
            
        }
  }
  console.log(`Factorial of ${num1} and ${num2} is ${sum}`)

  return 0    
}

// Provide any 2 numbers as input parameters.
factorialPrime(5 ,12)