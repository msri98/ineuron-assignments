// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
// Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result
//***************************************************************************
//import prompt module
const prompt = require("prompt-sync")({sigint: true});
input_str = prompt('Enter any string: ');

// prompt for input until user enters minimum of 4 chars.
while (true) 
{
    if (input_str.length < 4)
    {
        input_str = prompt('Enter any string: ');
    }
    else break;

}

// write console the First Chars of the string entered.
if (input_str.length > 4 ) {
    console.log("First 4 Chars of the Input string: " + input_str.substring(0,4));
}

//*********************************************************************************/
// Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”
//********************************************************************************/

//import prompt module
const prompt = require("prompt-sync")({sigint: true});
input_str = prompt('Enter any string in Multiple Words: ');

// prompt for input until user enters few Words.
while (true) 

{
    const words = input_str.split(' ');
    if (!(words.length > 1)) 
    {
        input_str = prompt('Enter any string in Multiple Words: ');
    }
    else break;
}
// Write to console after removing <Space> between Words of a  String.
console.log(`${input_str.replaceAll(' ','')}`)

//********************************************************************************/
// Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”
//********************************************************************************/

//import prompt module
const prompt = require("prompt-sync")({sigint: true});
input_str = prompt('Enter any string of 2 Words: ');

//global variable
let words = 0;

// prompt for input until user enters minimum of 2 words.
while (true) 

{
    words = input_str.split(' ');
    if (!(words.length == 2)) 
    {
        input_str = prompt('Enter any string of 2 Words: ');
    }
    else break;
}
// Write to console after switching Words of a  String.
console.log(`${words[1]} ${words[0]}`)

//**********************************************************************
//Input a String S with a word, and replace character “a” with “x” and
//display the result -
//Input: “apple” Output: “xpple”
//*******************************************************************/

//import prompt module
const prompt = require("prompt-sync")({sigint: true});
input_str = prompt("Enter any Word with a letter 'a' in it: ");


// prompt for input until user enters a single word.
while (true) 

{
    words = input_str.split(' ');
    if (!(words.length == 1)) 
    {
        input_str = prompt("Enter any Word with a letter 'a' in it: ");
    }
    else break;
}
// Write to console after switching Words of a  String.
console.log(`${input_str.replaceAll('a','x')}`)

//****************************************************************/
// What string method can be used to convert string into array ?
//****************************************************************/
// remove all spaces from the String
    const str = "Apple is Green".replaceAll(" ",'');
    //var arr = Array.from(str);
    //var arr = [...str];
    var arr = str.split('');
    console.log(`${arr}`);
//*************************************************************** */
// What string method can be used to check the occurrence of a 
// specified text in a string?
//*************************************************************** */

const str = "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane gave Mike 1 of her orange so she is now left with only 1 Orange.";
const countOccurence = (str, word) => 
{
    let stringLC = str.toLowerCase();
    let wordLC = word.toLowerCase();
    
    let count = stringLC.split(wordLC).length - 1;
    
    return count
};
console.log(`${countOccurence(str,"ORANGE")}`);

//*************************************************************** */
// How can you break a string to a newline in Javascript ?
//*************************************************************** */
const str = 'first\nsecond\nthird';

const str1 = 'first second third'.replaceAll(" ","\n");


console.log(str);
console.log("****************")
console.log(str1);

//************************************************************************** */
// Write a Javascript function to test whether the first character of a string
// is lowercase.
//************************************************************************** */
const str = 'First second third';

if (str.charAt(0).toUpperCase() !== str.charAt(0)) console.log(`${str.charAt(0)} is in Lower case`); 
if (str.charAt(0).toLowerCase() !== str.charAt(0))  console.log(`${str.charAt(0)} is in Upper Case`)

//************************************************************************** */
// Give a correct verdict to user's input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?
//************************************************************************** */
const prompt = require("prompt-sync")({sigint: true});
var result = prompt('Enter Yes in any mixed case: ');

// Convert user's input of yes/YeS/YES/yeS into one CASE and use it in subsequent checks.
console.log(`${result.toUpperCase()}`);

//************************************************************************** */
// Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.
// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string
//************************************************************************** */
// a) Convert the String into upper case.
//******************************************** */
    str ="Appe is Green";
    console.log(`${str.toUpperCase()}`);

//*********************************************** */   
// b) Convert only the first character to uppercase.
//*************************************************** */

    console.log("Appe is Green".charAt(0).toUpperCase());

//************************************* */
// c) Convert the String into lower case.
//************************************* */

console.log("Appe is Green".toLowerCase());

//*********************************************** */
// d) Break the string into two halves and swap them.
//*************************************************** */
    const str = "Apple is Green";
    
    // get the middle index of the string

    var mid_idx = Math.round(str.length/2);
    
    first_half = str.slice(0,mid_idx);
    second_half = str.slice(mid_idx);
    
    console.log("first half: " + first_half);
    console.log("second half: "+ second_half);
    console.log(second_half + " " + first_half);

//**************************************** */
// e) Count the repeating characters.
//***************************************** */

const getRepeatedChars = (str) => {
    const chars = {};
   for (const char of str) {
       chars[char] = (chars[char] || 0) + 1;
   }
   return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
}
// display the number to console
console.log(getRepeatedChars("aabcbzyxy").length);
//************************************* */
//f) Reverse the string
//************************************** */

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
console.log(reverseString("hello"));
//*********************** C O M P L E T E D ************************ */