// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
/*
1.
How does async/await help with performance and scalability?
Answer:
As you see in the below example fetchDoc and fetchUsers functions await till they fetch data 
but, these 2 functions are called and run simultaneously (run in parallel) from callFuncs function. 
so, performance wise it is parallel processing and time they take to complete is the time the 
longest function among those 2 functions takes is the total time they take to complete.  
*/
fetch = require('node-fetch');

async function fetchDoc()
{
    const res = await fetch('https://nodejs.org/api/documentation.json');
    if (res.ok) {
    const data = await res.json();
    console.log(data);
    }
}

async function fetchUsers() {
	const res= await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();
console.log(data);
}

async function callFuncs() 
{
// not awaiting here so that they are called and run simultaneously
    console.log("Before func calling");
    fetchUsers();
    fetchDoc();
    console.log("After func calling");
}

callFuncs();
//******************************************************************************/
/*
2)
 Is it possible to use async/await with promise chains? If yes,
how can this be achieved?
*/
//******************************************************************************/
const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        movies.push(movie);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function init(){
await createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`});

getMovies();
}

init();
//***************************************************************************************** */
/*
3.
Give 3 real world examples where async/await has been used?
Answer: 
REST API & MicroServices
Real Time Services ( Chat & Live Updates)
CRUD Apps - Blogs, Shopping Cards, Social Networks
Tools & Utilities
*/
//******************************************************************************************** */
/*
4.
 what is the output of the below Code.
 */
 async function inc(x) 
    {
        x = x + await 1
        return x;
    }
async function increment(x)
    {
        x = x + 1
        return x
    }
inc(1).then(
            function(x)
            {
                increment(x).then(
                function(x)
                    {
                        console.log(x)
                    })
            })

output:

3

//**********************************************************8 */
// 5. find out the output of the below code
//************************************************************ */
let p = new Promise(
    function(resolve, reject) 
        {
        reject(new Error("some error"));
        setTimeout(
            function()
            {
                reject(new Error("some error"));
            },1000)
        reject(new Error("some error"));
        });

p.then(null, function(err) 
        {
        console.log(1);
        console.log(err);
        }).catch(function(err) 
            {
                console.log(2);
                console.log(err);
            }
    );

Output:
1
Error: some error
//***********************************************************/
// 6. find out output of the below Code
//********************************************************* */
async function f1() 
    {
        console.log(1);
    }
async function f1() 
    {
        console.log(2);
    }
console.log(3);
f1();
console.log(1);
f2();
async function f2()
{
    console.log("Go!");
}
//************************************************************ */
/* 7.
    find out output of the below code
*/
//************************************************************ */
function resolveAfterNSeconds(n,x) {
    return new Promise(resolve => 
        {
                setTimeout( () => { resolve(x);}, n);
        });
    }
    
(function(){
    let a = resolveAfterNSeconds(1000,1)
    a.then(async function(x){
            let y = await resolveAfterNSeconds(2000,2)
            let z = await resolveAfterNSeconds(1000,3)
            let p = resolveAfterNSeconds(2000,4)
            let q = resolveAfterNSeconds(1000,5)
            console.log(x+y+z+await p +await q);
            })
})()

output:
15
//************************************************************* */
/*
10.
    In which scenarios would you use synchronous code instead of
    asynchronous code?
//****************************************************************** */
/*
Answer: When functions needs to be run in a sequence due to their dependency.
*/

