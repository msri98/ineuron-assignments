// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
/*
1. The time has a format: hours:minutes. Both hours and minutes
have two digits, like 09:00.
Make a regex to find time in the string: Lunch at 10:10 in the room
123:456. In this task there’s no need to check time correctness yet,
so 25:99 can also be a valid result. The regex should not match
333:333.
*/


console.log(`${/[0-9]{2}\:[0-9]{2}/.exec("Lunch at 10:10 in the room 123:456.")}`);
//******************************************************************************* */
/*
2.) Create a function that finds the word "happiness" in the given
string (not case sensitive). If found, return "Hurray!", otherwise
return "There is no happiness.".
Example
*/
function findHappiness (string)
{
    const boolVal = /happiness/i.test(string);

    if (boolVal) console.log("Hurray");
    else console.log("There is no happiness");
}

findHappiness("Work makes me happy");
findHappiness("You give me the feeling of happiness");
//*********************************************************************** */
/*
3). Write a regular expression that matches only a prime number.
Numbers will be presented as strings.
Example
“7” ➞ true
“134” ➞ false
*/
const pattern = /[0-9]{1,}/;
//Provide input of sequence of numbers here.
const val = pattern.exec("134 afabc");
if (val === null) console.log("Number not Entered.");
else 
    {
        //if number is 2 or 3 then it is a Prime
        if ((val[0] === 2) || (val[0] === 3 )) console.log("true");
        //check if it is an Even or Odd Numner then not a Prime
        else if ((val[0]%2 === 0) || (val[0]%3 === 0))  console.log("false");
        else console.log("true");
    }
/*
4. Create a function that will return an integer number
corresponding to the amount of digits in the given integer num
Examples
num_of_digits(1000) ➞ 4
*/
//input numbers here
const digts = 1000;
console.log(digts.toString().length);
//*************************************************************** */
/*
5. Create a function that takes in a number as a string n and returns
the number without trailing and leading zeros.
● Trailing Zeros are the zeros after a decimal point which don't
affect the value (e.g. the last three zeros in 3.4000 and
3.04000).
● Leading Zeros are the zeros before a whole number which
don't affect the value (e.g. the first three zeros in 000234 and
000230).
removeLeadingTrailing("230.000") ➞ "230"
removeLeadingTrailing("00402") ➞ "402"
*/

function removeLeadingTrailing(n)
{
    console.log(`${Math.abs(n)}`);

}
removeLeadingTrailing("230.000");
removeLeadingTrailing("00402");

//******************************************************************* */
/*
   6. Create a function that takes a word and returns true if the word
    has two consecutive identical letters.
    Examples
    doubleLetters("loop") ➞ true
    doubleLetters("yummy") ➞ true
*/
function doubleLetters(str)
{
    const pattern=/(.)\1/i;
    const boolVal = pattern.test(str);
    console.log(boolVal);
}    

doubleLetters("loop");
doubleLetters("yummy");
//*********************************************************************** */
/*
7. ATM machines allow 4 or 6 digit PIN codes and PIN codes
cannot contain anything but exactly 4 digits or exactly 6 digits. Your

task is to create a function that takes a string and returns true if the
PIN is valid and false if it's not.
Examples
validatePIN("1234") ➞ true
validatePIN("12345") ➞ false
*/
function validatePIN(str) 
{
    //when PIN Length is  4
    const pattern_4 = /^([0-9]){4}$/;
    //when PIN Length is 6
    const pattern_6 = /^([0-9]){6}$/;
    
    const bool_val_4 = pattern_4.test(str);
    const bool_val_6 = pattern_6.test(str);

    if ((bool_val_4) || (bool_val_6))  console.log("true");
    else console.log("false");
    
}
validatePIN("1234");
validatePIN("123456");
//******************************************************************************** */
/*
8. Create a function that determines whether a string is a valid hex
code. A hex code must begin with a pound key # and is exactly 6
characters in length. Each character must be a digit from 0-9 or an
alphabetic character from A-F. All alphabetic characters may be
uppercase or lowercase.
Examples
isValidHexCode("#CD5C5C") ➞ true
isValidHexCode("#EAECEE") ➞ true
isValidHexCode("#CD5C&C") ➞ false
*/

function isValidHexCode(str)
{
    
    const pattern = /^(#)([A-F]|[0-9]){6}$/;
    if (pattern.test(str)) console.log("true")
    else console.log("false");

}
isValidHexCode("#CD5C9C");
isValidHexCode("#EAECEE");
isValidHexCode("#CD5C&C");
//********************************************************** */
/*
9. 
Create a function that takes an array of numbers and returns
"Boom!" if the digit 7 appears in the array. Otherwise, return "there is
no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.
*/
function sevenBoom(arr)
{
   if (arr.indexOf(7) !== -1) console.log("Boom!");
   else console.log("there is no 7 in the array");
   return 0;
} 
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
//********************************************************************* */
/*
10)
Create a function that takes a string, checks if it has the same
number of x's and o's and returns either true or false.

● Return a boolean value (true or false).
● Return true if the amount of x's and o's are the same.
● Return false if they aren't the same amount.
● The string can contain any character.
● When "x" and "o" are not in the string, return true.
*/
function XO(strg)
{
    const str = strg.toLowerCase()
    const pattern_ox = /[ox]/i
    // o or x NOT in the string. returns true
    if (!(pattern_ox.test(str))) console.log('FALSE')
    else
    {
        if ((str.split('o').length-1) === (str.split('x').length-1))
            console.log("true");
        else console.log("false");    

    }

}
XO("ooxx");
XO("xooxx");
XO("ooxXm");
//*******************************************************************************8 */