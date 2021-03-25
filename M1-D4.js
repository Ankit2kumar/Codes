

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area= function (param1,param2) {
    return param1* param2
}
//console.log(area(10,10));


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum= function (param1,param2) {
    if(param1===param2)
    return 3*(param1+param2)
    else
    return param1+param2
}
//console.log(crazySum(4,5));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff= function (params) {
    if(params>19)
    return Math.abs(params-19)*3
    else
    return Math.abs(params-19)
}
 //const crazyDiff = (param2)=> param2>19? Math.abs(param2-19)*3 : Math.abs(param2-19)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
 
const boundary = function (params) {
    if(params> 20 && params <=100 || params=== 400)
    return true
    else
    return false
}
// console.log(boundary(10));
// console.log(boundary(50));
// console.log(boundary(400));
/* WRITE YOUR CODE HERE */


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify= function (params) {
    if(params.startsWith("Strive"))
    return params
    else
    return ("Strive " + params)
    
}
// console.log(strivify("Strive"));
// console.log(strivify("Ankit"));

/* WRITE YOUR CODE HERE */


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7= function (params) {
    if(params % 3==0)
    return "Divisible By 3"
    else if(params%7== 0)
    return "Divisible By 7"
    else
    return "Not Divisble By Any"
    
}
// console.log(check3and7(15))
// console.log(check3and7(28))
// console.log(check3and7(16))

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

    const reverseString=function (params) {
        let str=""
        for(let i=params.length-1;i>=0;i--){
            str+=params[i]
        }
        return str
    }
    // console.log(reverseString("Strive"));
    // console.log(reverseString('Ankit'));

/* WRITE YOUR CODE HERE */
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
const upperFirst=function (params) {
    return params[0].toUpperCase() +params.slice(1) 
}
// console.log(upperFirst("ankit"));
// console.log(upperFirst("roushan"));
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString=function (params) {
    let str= ""
    for(let i=1;i<=params.length-2;i++)
     str+=(params[i]); 

    return str
}
//console.log(cutString("Strive")); 

/* WRITE YOUR CODE HERE */


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom= function (params) {
    let arr= new Array()
    for(let i=0; i<params;i++){
        arr.push(Math.floor(Math.random()*10+1))
    }
    return arr
}
console.log(giveMeRandom(3));
/* WRITE YOUR CODE HERE */

