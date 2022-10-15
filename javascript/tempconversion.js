//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//****************************************************

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