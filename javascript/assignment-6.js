//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//*********************************************************************/
// Add an area() method to the Rectangle class.
// Create a Square class that satisfies the following conditions:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area
// of a Square object.

class Rectangle
{
    constructor(side) {
        this._side=side;
    }
   //method   
    area() {
        // returns area
        return this._side * this._side;
    }
}

class Square extends Rectangle
{
    //constructor
    constructor(side)
    {
        super(side);
        this._area = super.area();
    }
}
asquare = new Square(5);
console.log(`Square Area: ${asquare._area}`);
//*********************************************************/
//Write a javascript function find_largest to return the nth largest number in an array 
//*********************************************************/

//Remove duplicates from the Sorted Array
var removeDuplicates = function(nums) 
{

    if (nums.length == 0) return 0;
    
    let i = 0;
    for ( let j = 1; j < nums.length; j ++ ) {
        if(nums[i] !== nums[j]) {
            i++;
        }
        else {

           nums.splice(j,1)
        }    
    }
    return nums;
}
    
// Find N th largest number from the Sorted Array of numbers.
function findLargest(n,arr1) 
{
    if (n <= 0) {
        console.log("Enter number greater than 0");
        return 0;
    }
    
    //Sort the Array in Descending Order
    var sarr = arr1.sort(function(a, b){return b - a});
    removeDuplicates(sarr);
    // prints Result to the console
    console.log(`Largest Number ${n} in the Array : ${removeDuplicates(sarr)[n-1]}`);
}

// Set the Array of numbers
const find_arr = [3,45,6,7,23,5,7,8];
//input N th number to find N th largest number from an Array
findLargest(3,find_arr); 

//*******************************************************************/
//Write a JavaScript program which accept a number as input in the
//function parameter and insert dashes (-) between each two even numbers.
//For example if you accept 025468 as the output should be 0-254-6-8.
//computeDash(025468) -> 0-254-6-8.
//*********************************************************************/
//import prompt module
const prompt = require("prompt-sync")({sigint: true});

// Get input of Series of Numbers

var nums = prompt('Enter Serias of positive integers: ');

while (true) 
{
    if (nums <= 0)
    {
        nums = prompt('Enter Serias of positive integers: ');
    }
    else {
        break;
    }
}
//Compute Dash. it will put DASH between any 2 Even numbers in the String
function computeDash(pnums)
{
    let i = 0;
        
    for ( j = 1 ; j < pnums.length ; j++ )
    {
        // any given 2 adjacent numbers are Even numbers then
        if ((pnums[i]%2 == 0) && (pnums[j]%2 == 0)) {
            str_prt = str_prt + pnums[i] + "-";
        }   
        // Not  even numbers
        else 
        {
            str_prt = str_prt + pnums[i];
        }
        i++;
    }
    str_prt = str_prt + pnums[pnums.length-1];
    console.log(str_prt);
}


//Global Variable
var str_prt = "";
computeDash(nums);

//********************* C O M P L E T E D **************************/