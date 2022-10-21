// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
/*Create a function that finds the maximum range of a triangle'
  third edge, where the side lengths are all integers.
*/
class Triangle
{
    constructor(left,right) 
    {
        
        if ((left < 1 ) ||  (right < 1 )) 
            console.log("Please provide positive numbers")
        else
            this._left = left;
            this._right = right;    
    }
    nextEdge(){
        return ((this._left + this._right)-1);

    }    
}
atriangle = new Triangle(8,10);
btriangle = new Triangle(5,7)
ctriangle = new Triangle(9,2)

console.log(atriangle.nextEdge());
console.log(btriangle.nextEdge());
console.log(ctriangle.nextEdge());
/*
This Triangular Number Sequence is generated from a pattern of
dots that form a triangle. The first 5 numbers of the sequence, or
dots, are:
1, 3, 6, 10, 15

This means that the first triangle has just one dot, the second one
has three dots, the third one has 6 dots and so on.
Write a function that returns the cumulative sum of the number of
all the previous (including current) dots when given its
corresponding triangle number of the sequence.
*/
const triangle = 6 ;
var cum_sum = 0;
var prev_val = 1;

let n = 1;

while (n <= triangle)
{
    if (triangle === 1) return 1;   
    cum_sum += n ;
    n++;
           
}
console.log(cum_sum);

/*Given a total due and an array representing the amount of
change in your pocket, determine whether or not you are able to pay
for the item. Change will always be represented in the following
order: quarters, dimes, nickels, pennies.
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
you 6.25 + 2 + .25 + 0 = 8.50.
*/

function changeEnough(arr,amt)
{
    //quarters,dimes,nickles, pennies
const quarters = arr[0]*24;
const dimes = arr[1]*10;
const nickles = arr[2]*5;
const pennies = arr[3]*1;
const cal_amt = (quarters+dimes+nickles+pennies)/100;

console.log(cal_amt>=amt? true: false);
return 0;
}

changeEnough([2, 100, 0, 0], 14.11);
changeEnough([25, 20, 5, 0], 4.25)