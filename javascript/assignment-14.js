// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
/*
    1. Write a JavaScript program to:
    a) filter employees according to department = IT
    b) filter employees who earn a salary < 65000
*/
let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]

    console.log(employees.filter((value) => value["department"]==="IT"));
    console.log(employees.filter((value) => value["Salary"] < 65000));
//******************************************************************************* */
/*    Write a JavaScript program to filter the hospitals according to:
    a) Number of Beds > 200
    b) Availability of Beds = Yes
    c) Location = Pune
*/    
//********************************************************************************* */
let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
    },
    {
    "id": 3,
    "name":"HospitalC",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
    }]
console.log(hospitals.filter((value)=> value["noOfBeds"] > 200));
console.log(hospitals.filter((value)=> value["availability"] == 'Yes'));
console.log(hospitals.filter((value)=> value["location"] == 'Pune'));
