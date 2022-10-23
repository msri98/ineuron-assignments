// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
/*
1.
What is the difference between a generator and a function?
*/
Answer:-
ES6 introduced a new concept called Generator (or Generator function). 
It gives me a new way to work with iterators and functions. 
The ES6 generator is a new type of function that can be paused in the middle 
or many times in the middle and resumed later. 

In the standard function, control remains with the called function until it returns,
but the generator function in ES6 allows the caller function to control the 
execution of a called function.

The difference between a generator and a regular function is:

In response to a generator call, its code doesn’t run. 
In its place, it returns a special object called a ‘Generator Object’ to manage the execution.
At any time, the generator function can return (or yield) the control back to the caller.
The generator can return (or yield) multiple values according to the requirement, 
unlike a regular function.
//************************************************************************************** */
/*
2.What is the syntax of a generator?
*/
Syntax: Generator functions have a similar syntax to regular functions. 
As the only difference, the generator function is denoted by an asterisk (*) 
after the function keyword.

function *myfunction() { }
//************************************************************************************** */
/*
3.
Are function generators iterable in JavaScript?
*/
Yes. Generator(s) are iterable in javascript.

//****************************************************************************************** */
/*
4.
Create a generator for multiplying?
*/
function *multiplyNumbers()
{
    yield 2*2;
    yield 3 + 3;
    return true;
}

var multiplynum = multiplyNumbers();

console.log(multiplynum.next().value);
console.log(multiplynum.next().value);
console.log(multiplynum.next().value);
//**************************************************************** */
/*
5.
Print an infinite series of natural numbers using a generator.
*/
    function* naturalNumbers() {
        let i = 1;
        while (true) {
        yield i++;
        }
    }
    for (let num of naturalNumbers()) {
        console.log(num);
    }
//*********************************************************************** */
/*
 6.
 Create a generator that can throw an exception.
*/
function *multiplyNumbers(K)
{
    if (K > 10) throw("value must be less than 10");

    yield K*K;
    yield K + K;
    return true;
}
var multiNum = multiplyNumbers(11);

try 
{
    k = 0 ;
    while (k < 3)
    {
        console.log(multiNum.next().value);
        k++; 
    } 
 } 
 catch (e) 
 {
    console.error(e);
 }
 //**********************C O M P L E T E D******************************** */