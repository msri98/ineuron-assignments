// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
//Carefully observe this example.
//a) Is the InnerFunction() a closure?
//b) What is output of this program
//***************************************************************************
// YES, InnerFunction is a Closure 
// as closure gives you access to an outer function's scope from an inner function.
// which is outerVariable = 100

function OuterFunction()
{   
    var outerVariable = 100;
    
    function InnerFunction() 
    {
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//****************************************************** */
// What is the difference between a closure and a scope ?
//****************************************************** */
// When you declare a variable in a function, 
// you can only access it in the function. 
// These variables are said to be scoped to the function. 
// If you define any inner function within another function, 
// this inner function is called a closure. It retains access 
// to the variables created in the outer function.
//************************************************************ */
// What is a lexical scope and how is it related to closure?
//************************************************************** */
// The lexical scope allows a function scope to access statically 
// the variables from the outer scopes. Finally, a closure is a 
// function that captures variables from its lexical scope. 
// In simple words, the closure remembers the variables from the place 
// where it is defined, no matter where it is executed.
//********************************************************************* */
// Output of following closure ?
// it will print 3 as by the time it calls/executes the function log(), i value is incremented to 3
// log() is a closure and it has access to i so, it prints 3
//************************************************************************************** */
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
        console.log(i); // What is logged?
        }, 1000);
    }
//*********************** C O M P L E T E D ************************ */



