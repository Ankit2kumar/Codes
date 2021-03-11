/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/
let arr= [1,3,5,6,4]
let revertedArray= []
for(let i=arr.length-1;i>=0;i--)(
    revertedArray.push(arr[i])
)
//console.log(revertedArray);

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
//console.log(Math.max.apply(Math,arr));

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

//console.log(Math.min.apply(Math,arr));

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

const newArr = [];

for (var i = 0; i < arr.length; i++) {
  // take every second element
  if (arr[i] % 2 === 0) {
    // index is even
    newArr.push(arr[i]);
  }
}

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
let arrOfnum = [1,2,3,4,5,6,7,8]
for (i=0;i<arrOfnum.length;i++){
    if(arrOfnum[i]%2===0){
    arrOfnum.splice(i,1)
    }
}
console.log("All evens deleted: ",arrOfnum);

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
const originalString= "ANKITDUBEY"
for(let i=0; i<originalString.length;i++){
    if(originalString[i]==='A')
    originalString.replace('A' , '')
    else if(originalString[i]==='E')
    originalString.replace('E', '')
    else if(originalString[i]==='I')
    originalString.replace('I', '')
    else if(originalString[i]==='O')
    originalString.replace('O', '')
    else if(originalString[i]==='U')
    originalString.replace('U', '')
    else{
        console.log(originalString);
    }
}




/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
const increasedArr = [];

for (let i = 0; i < arr.length; i++) {
  increasedArr.push(arr[i] + 1);
}


/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/*const wordsArr = ["strive", "is", "good"];
for (let  i = 0; i < wordsArr.length; i++) {
  wordsArr.splice(i, 1, wordsArr[i].length);
}*/



