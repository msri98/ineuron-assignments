// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***********************************************************************************
// Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.
// Answer: callback function is an argument of a HighOrder Function(s).

//***********************************************************************************
// Is filter a Higher Order function in Javascript ? If yes, why ?
// Answer: Yes, Filter is a High Order Function as it accepts a Function to be one of 
// it's Argument(s)
//***********************************************************************************
// Give an example of a Higher Order function and a call back function
// used in the same program.
//*********************************************************************************** */
// in the below,myCalculator is a Higher Order Function for it receives a Funcdtion 
// as an Argument where as myDisplayer is a CallBack function.
// call the (myCalculator) function with a callback (myDisplayer), 
// and let the myCalculator function run the callback after the calculation is finished:

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
//*************************************************************************************** */
// Carefully check the example below:
// a) What will be the output of this program ?
//        Hello John
//        Hello Tina
//        Hello Kale
//        Hello Max
// b) Which function is a Higher Order function here ?
//    useFunction is a Higher Order function
//**************************************************************************************** */
    const names = ['John', 'Tina','Kale','Max']
    function useFunction(arr,fn)
    {
        for(let i=0; i<arr.length; i++){
        fn(arr[i]);
    }
    }
    function argFn (name)
    {
        console.log("Hello " + name );
    }
    useFunction(names,argFn);

    //*********************** C O M P L E T E D ****************************************** */