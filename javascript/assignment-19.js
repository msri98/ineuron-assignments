// Author: Srinivasu Machineni
// Email: machisri@gmail.com
// Course Attended: Full Stack Blockchain Development
//***************************************************************************
/*
1.
What is the output of the code below ?
//************************************************************************** */
function job()
{
	return newPromise(function(resolve, reject) 
		{
			reject();
		});
}

let promise = job();
promise
.then(function() { console.log('Success 1');
              })
.then(function() { console.log('Success 2');
              })
.then(function() { console.log('Success 3');
              })
.catch(function() { console.log('Error 1');
              })
.then(function() { console.log('Success 4');
              })

Error 1
Success 4
//*********************************************************************
/*
2). 
Write a sleep function using a promise in javascript?
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(10000);
console.log("Done");
//***************************************************************** */
/*
3.
What is the output of the following code?
*/
const promise = new Promise(res => res(2));

promise.then( v => 
    {
		console.log(v);
		return v * 2;
	})
	.then( v => 
        {
		console.log(v);
		return v * 2;
		})
	.finally( v => 
        {
		console.log(v);
		return v * 2;
		})
	.then( v => {
			console.log(v);
			});

output:-
2
4
undefined
8
//********************************************************** */
/*
4.
What is the output of this code snippet?
*/
console.log('start')
const fn = () => (new Promise((resolve, reject) => {
console.log(1);
resolve('success')
}))

console.log('middle')

fn().then(res => {
	console.log(res)
})
console.log('end');

output:-
start
middle
1
end
success
//******************************************************** */
/*
5) 
Write a function delay that returns a promise. And that promise
should return a setTimeout that calls resolve after 1000ms.
*/
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
delay(1000).then(() => console.log('runs after 3 seconds'));
//*************************************************************** */
/* 6. 
  what is the output of the below Code
*/
Promise.resolve('Success!')
.then(data => 
{
    return data.toUpperCase()
})
.then(data => 
{
    console.log(data)
})

SUCCESS
//****************************************************************** */
/*
7.
what is the output of the below Code
*/
//******************************************************************* */
var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
    })
.catch(error => console.log(error))
.then(error => console.log(error))

Error: The Fails!
//********************************************************************** */
/*
    8.
    what is the output of the below Code
*/
console.log('start')
setTimeout(() => 
{
    console.log('setTimeout')
})
Promise.resolve().then(() => 
{
    console.log('resolve')
})
console.log('end')


start
end
resolve
setTimeout
//********************************************************* */
/*
10.
    what is the output of the below Code
*/
//********************************************************** */

console.log('start')
Promise.resolve(1).then((res) => 
    {
        console.log(res)
    })
Promise.resolve(2).then((res) => 
{
    console.log(res)
})
console.log('end');

Output:-
start
end
1
2
//**************************C O M P L E T E D***************************** */