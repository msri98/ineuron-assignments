// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
// Write a JavaScript program to map Employee Records according to Employee IDs.
// Employee: { id, name, salary }
// a) Print an array of all employee ids
// b) Print count of employees
// c) Print the name of the employee according to their id { key: value }
// d) Store the salaries of all employees in an array
// e) Calculate the average salary the company is paying to its employees
//***************************************************************************

//input map
const emp_map = new Map();

// Set Map Values
emp_map.set("id", [ 67, 48, 29 ]);
emp_map.set("name", [ "Hitanshu", "Ninad", "Amandeep"]);
emp_map.set("salary", [ 75000, 82000, 98000 ]);

//Print an array of all employee ids
console.log(`${emp_map.get("id")}`);
//Count of Employees
console.log(`${emp_map.get("name").length}`);  

//the name of the employee according to their id { key: value }
const id_arr =  emp_map.get("id");
const name_arr = emp_map.get("name");

for (idx in id_arr) console.log(id_arr[idx] + ":" + name_arr[idx]);


//Store the salaries of all employees in an array
console.log(emp_map.get("salary"));

//Calculate the average salary the company is paying to its employees
var sumSal = 0;
var avgSal = 0;
if (emp_map.get("salary").length > 0) 
{   
    for (idx in emp_map.get("salary"))
    {
        sumSal += emp_map.get("salary")[idx];
        
    }
    avgSal = sumSal/emp_map.get("salary").length;
}

console.log(avgSal +"");
//******************************************************************** */
//Write a program in JavaScript to map the student ids, names and scores.
//a) Add data for 3 students (use map functions)
//b) Get Student Names using map functions
//c) Delete Student Scores using map functions

//d) Display 1 parameter (only value), 2 parameters (value + key), and 3
//parameters (value + key + map) for the student
//*************************************************************************** */
//input map
const stdn_map = new Map();

// B) Add data for 3 students (use map functions)
stdn_map.set("id", [ 1, 2, 3 ]);
stdn_map.set("name", [ "Hitanshu", "Ninad", "Amandeep"]);
stdn_map.set("scores", [ 90, 88, 92 ]);


//C) Get Student Names using map functions
console.log(stdn_map.get("name"));

//Delete Student Scores using map functions
stdn_map.delete("scores");
console.log(stdn_map);

// add back in the deleted one in the above line
stdn_map.set("scores", [ 90, 88, 92 ]);


//D) Display 1 parameter (only value), 2 parameters (value + key), and 
// 3 parameters (value + key + map) for the student
    // print only one paramter ( Value only)

    for (let key of stdn_map.keys()) console.log(stdn_map.get(key));

    // print 2 parameters (value + key)

    for (let [key, value] of stdn_map) {
        console.log("2 parameters ( key + value)");
        console.log(key + " " + value);
    }
    // print 3 parameters (value + key + map) for the student
    for (let [key, value] of stdn_map) {
        console.log(key + " " + value);
        console.log(stdn_map)
    }
//*************************************************************************** */
// Write a JavaScript program to iterate over an array inputted by the user using
// mapping. Perform the square of all elements in the original array, store the
// squares in a new array and make a mapping for the squares and display it.
//******************************************************************************* */
const arr = [ 1, 2, 3, 4, 5 ];

// Perform the square of all elements in the original array, store the
// squares in a new array and

// pass a function to map
const squr_arr = arr.map(x => x * x);
console.log(squr_arr);
const map1 = new Map();

map1.set("squares",squr_arr);
console.log(map1);