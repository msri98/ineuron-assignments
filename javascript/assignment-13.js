// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
// 1. Write a JavaScript program to get an array from the user and 
// return the:
// a) Sum of all elements in the array using reduce()
// b) Average of all elements in the array using reduce()

    arr = [ 1, 2, 3, 4, 5 ];
    const arrLen = arr.length;
    const sumVal = arr.reduce((preValue, curValue) => preValue + curValue);
    
    //console.log(sumVal);
    //console.log(sumVal / arrLen);
//***************************************************************************** */
/* Write a JavaScript program to
    a) Calculate grades on basis of marks
        >90 = A
        >80 = B
        >70 = C
        >60 = D
        >50 = E
        else = F
    b) Map the grades of each student
    c) Group students according to the grades they have received and display.    */
//****************************************************************************** */
let students = [
    { name: "John", marks:"92"},
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95"},
    { name: "Oscar", marks: "64"},
    { name: "Kevin", marks: "48" },
    ];

    var finalMap = new Map();
    const gradesArr = ["A","B","C","D","E","F"];
    var tmpArr = new Array(); // stores all students with a Grade
    
    //create key with a Grade in the finalMap
    for (item in gradesArr) finalMap.set(gradesArr[item],new Array());

    //Assign Grade to all Students
    for (let entry of students.entries()) 
    {
        var resultMap = new Map();
        if (entry[1]["marks"] > 90 )
        {
            resultMap.set("name",entry[1]["name"]);
            resultMap.set("marks",entry[1]["marks"]);
            resultMap.set("grade","A");
            tmpArr.push(resultMap);

        }
        else if (entry[1]["marks"] > 80 )
        {
            resultMap.set("name",entry[1]["name"]);
            resultMap.set("marks",entry[1]["marks"]);
            resultMap.set("grade","B");
            tmpArr.push(resultMap);
        }
        else if (entry[1]["marks"] > 70 )
        {
            resultMap.set("name",entry[1]["name"]);
            resultMap.set("marks",entry[1]["marks"]);
            resultMap.set("grade","C");
            tmpArr.push(resultMap);
        
        }
        else if (entry[1]["marks"] > 60 )
        {
            resultMap.set("name",entry[1]["name"]);
            resultMap.set("marks",entry[1]["marks"]);
            resultMap.set("grade","D");
            tmpArr.push(resultMap);
           
        }
        else if (entry[1]["marks"] > 50 )
        {
            resultMap.set("name",entry[1]["name"]);
            resultMap.set("marks",entry[1]["marks"]);
            resultMap.set("grade","E");
            tmpArr.push(resultMap);
        }
        else
        {
            resultMap.set("name",entry[1]["name"]);
            resultMap.set("marks",entry[1]["marks"]);
            resultMap.set("grade","F");
            tmpArr.push(resultMap);
        } 
    }
    
    // Iterate all items of tmpArr (After Grade is assigned to all Students)
    for (idx in tmpArr) 
    {
        if (tmpArr[idx].get("grade") === "A")
            {
            let gradeAarr = finalMap.get("A");
            gradeAarr.push(tmpArr[idx]);
            finalMap.set("A",gradeAarr);
            }
        if (tmpArr[idx].get("grade") === "B")
        {
        let gradeAarr = finalMap.get("B");
        gradeAarr.push(tmpArr[idx]);
        finalMap.set("B",gradeAarr);
        }    
        if (tmpArr[idx].get("grade") === "C")
        {
        let gradeAarr = finalMap.get("C");
        gradeAarr.push(tmpArr[idx]);
        finalMap.set("C",gradeAarr);
        }
        if (tmpArr[idx].get("grade") === "D")
        {
        let gradeAarr = finalMap.get("D");
        gradeAarr.push(tmpArr[idx]);
        finalMap.set("D",gradeAarr);
        }
        if (tmpArr[idx].get("grade") === "E")
        {
        let gradeAarr = finalMap.get("E");
        gradeAarr.push(tmpArr[idx]);
        finalMap.set("E",gradeAarr);
        }
        if (tmpArr[idx].get("grade") === "F")
        {
        let gradeAarr = finalMap.get("F");
        gradeAarr.push(tmpArr[idx]);
        finalMap.set("F",gradeAarr);
        }
    }
//Print the final Result    
console.log(finalMap)