/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1,l2){
    console.log("Area of rectangle: ", l1*l2)
}
area(2,3)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(int1, int2){
    if(int1 === int2)
    console.log("The crazy sum: ", 3*(int1+int2))
    else
    console.log("The crazy sum: ", int1+int2)
}
crazySum(1,1)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(number){
    if(number>19)
    console.log("The Crazy Difference: ", (number-19)*3)
    else
    console.log("The Crazy Difference: ", 19-number)
}
crazyDiff(17)
crazyDiff(27)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */
const boundary = function(int){
    if((int>20 && int<=100) || (int === 400))
    console.log(true)
    else
    console.log(false)
}
boundary(21)
boundary(19)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

const strivify = function(inputString){
    if(inputString === "Strive")
    console.log("The Output String: ", inputString)
    else
    console.log("The Output String: Strive " , inputString)
}
strivify("Apple")
strivify("Strive")
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
const check3and7 = function(positiveNumber){
    if(positiveNumber%3===0&&positiveNumber%7===0)
    console.log("The given positive number: ", positiveNumber, " is a multiple of 3&7.")
    else if(positiveNumber%3===0)
    console.log("The given positive number: ", positiveNumber, " is a multiple of 3.")
    else if(positiveNumber%7===0)
    console.log("The given positive number: ", positiveNumber, " is a multiple of 7.")
    else
    console.log("The given positive number: ", positiveNumber, " is not a multiple of 3, or 7.")
}
check3and7(21)
check3and7(24)
check3and7(70)
check3and7(5)
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = function(inputString){
    let resultString = ""
    for(let i = inputString.length-1; i>=0; i--){
        resultString = resultString+inputString[i]
    }
    console.log(inputString, ": reverted --> ", resultString)
}
reverseString("Pneumonoultramicroscopicsilicovolcanoconiosis")
reverseString("Floccinaucinihilipilification")
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */
const upperFirst = function(inputString){
    let firstLetter = inputString.charAt(0).toUpperCase()
    console.log("Required capitalized String: ", firstLetter+inputString.substr(1, inputString.length-1))
}
upperFirst("assistants")
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

const cutString = function(inputString){
console.log(inputString, ": without 1st, & last character --> ", inputString.substr(1,inputString.length-2))
}
cutString("Alfalfa Sprouts")
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = function(inputNumber){
    let counter = 1
    let resultingArray = []
    while(counter<=inputNumber){
        let randomNumber = Math.floor(Math.random() * 11); 
        resultingArray.push(randomNumber)
        counter++
    }
    console.log("Required Array: ", resultingArray)
}
giveMeRandom(50)
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/