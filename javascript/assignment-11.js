// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
// 1. 
// Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
// Places
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
// Sum of Numbers at Even Places = 2 + 4 = 6
// Difference = 9 - 6 = 3
// Sample Output:
// Difference = 3
// Odd Elements = 3
// Even Elements = 2
// Average = 3
// GCD = 3
//************************************************************************************ */

// input an Array
const arr = [ 1, 2, 3, 4, 5 ];
var odd_arr = new Array();
var even_arr = new Array();
var even_sum = 0;
var odd_sum = 0;

//calculate sum of even numbers and odd numbers
for (idx in arr)
{
    if (arr[idx]%2 === 0) 
    {
        even_sum+=arr[idx];
        even_arr.push(arr[idx]);
    }    
    if (arr[idx]%2 !== 0) 
    {
        odd_sum+=arr[idx];
        odd_arr.push(arr[idx]);
    }    
}

//Calculate GCD of 2 numbers
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }


console.log("1) The difference between the two sums: " + Math.abs(odd_sum-even_sum));    
console.log("2) The number of elements in odd places: " + odd_arr.length);
console.log("3) The number of elements in even places: " + even_arr.length);
console.log("4) The average of all elements in the array: " + ((odd_arr.length == 0 || even_arr.length == 0)? (odd_arr.length + even_arr.length) : Math.ceil((odd_arr.length + even_arr.length)/2))); 
console.log("5) GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places: " + gcd_two_numbers(even_sum,odd_sum));

//************************************************************************* */
//2.
//Write a JavaScript program to take 2 arrays from the user and check if the
//number 4 exists in any of the arrays, or both of the arrays.
//************************************************************************** */

const arr1 = [ 4,1, 2, 3, 5 ];
const arr2 = [ 4, 6, 1, 8, 2 ];

if ((arr1.includes(4)) && (arr2.includes(4))) console.log("4 in Both the Arrays");    
if (!(arr1.includes(4)) && !(arr2.includes(4))) console.log("4 NOT in Both the Arrays"); 
if ((arr1.includes(4)) && !(arr2.includes(4))) console.log("4 in Array 1");    
if (!(arr1.includes(4)) && (arr2.includes(4))) console.log("4 in Array 2");
//************************************************************************** */
// 3.
// Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
// Note: Do not use array.flat();
//************************************************************************** */

const arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
const flatten = (arr) => Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
console.log(flatten(arr)); // [1, 2, 3, 4, 5]

//********************************************************************** */
// 4.
// Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array
//********************************************************************** */

const arr = [ 1, 2, 3, 2, 3, 4, 5 ];
var sort_arr = arr.sort();

const toFindDuplicates = sort_arr => sort_arr.filter((item, index) => sort_arr.indexOf(item) !== index)
const dup_arr = toFindDuplicates(arr);
console.log("Duplicate Elements: " + dup_arr);

//Remove duplicates from the Sorted Array
var removedDuplicates = function(sort_arr) 
{

    if (sort_arr.length == 0) return 0;
    
    let i = 0;
    for ( let j = 1; j < sort_arr.length; j ++ ) {
        if(sort_arr[i] !== sort_arr[j]) {
            i++;
        }
        else {

            sort_arr.splice(j,1)
            j--;
        }    
    }
    return sort_arr;
}
    
console.log("Array without duplicate elements: " + removedDuplicates(sort_arr));


//********************************************************************** */
// 5. Debug the given JavaScript program and execute the correct code.
//************************************************************************ */
<!DOCTYPE html>
<html>
<body>

<h1>Assignment-11</h1>
<h2>5. Debug the given JavaScript program and execute the correct code.</h2>

<p>Write some text directly to the HTML output:</p>

<script>
function thirdLargest(arr, arr_size)
{
  /* There should be at least three elements */
  if (arr_size < 4) 
  {
    document.write(" Invalid Input "); return ;
  }

let first = arr[0];
  for (let i = 1; i < arr_size ; i++)
  if (arr[i] > first) first = arr[i];

let second = Number.MIN_VALUE;
for ( let i = 0; i < arr_size; i++)
  if (arr[i] < first && arr[i] > second)
    second =  arr[i];
    
let third = Number.MIN_VALUE;
for ( let i = 0; i < arr_size; i++)
  if (arr[i] < second && arr[i] > third)
      third = arr[i];

document.write("the third Largest " + "Element is ", third);}

let arr = [12,13,1,10,34,16];
let n = arr.length;
thirdLargest(arr,n);
</script>


<p>Debugging and writing to document is Completed</p>

</body>
</html>
</body>
</html>
//********************************C O M P L E T E D******************************************* */