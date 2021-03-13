/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

const first5PositiveNumbers= [1,2,3,4,5]



/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const myDetails={
    name: "Ankit",
    surname: "Kumar",
    email : "abchd123456@gmail.com",
    age: 99
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

myDetails.hasDrivingLicense= false
//console.log(myDetails);

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete myDetails.age
//console.log(myDetails);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

const secondDetails={
    name: "Lucky",
    surname: "Dubey",
    email: "afdsghjzq123@gmail.com"
}
const verify= myDetails.email!==secondDetails.email
//console.log(verify);

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart=50;
if(totalShoppingCart > 50){
//console.log("Eligible For Free Shipping!! ");
}else{
//console.log("Please Pay 10€");
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
 let payableAmount= totalShoppingCart-(totalShoppingCart * 0.2)
  if(payableAmount > 50){
    console.log("Eligible For Free Shipping!! ");
    }else{
    console.log("Please Pay 10€");
    }


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

const car1={
    brand: "BMW",
    model: "ACE",
    licensePlate: 12345
}

const car2 = Object.assign({}, car1)
const car3=Object.assign({},car2)
const car4=Object.assign({}, car3)
const car5=Object.assign({}, car4)
// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);
// console.log(car5);

  car2.licensePlate= 0000;
//  console.log(car2);
  car3.licensePlate=1111;
//  console.log(car3);
  car4.licensePlate=2222;
//  console.log(car4);
  car5.licensePlate=3333;
//  console.log(car5);


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent =[car1,car2,car3,car4,car5]
//console.log("Cars for rent are:-  ", carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carsForRent.shift()
carsForRent.pop()
//console.log("Cars for rent after deletion are:-  ", carsForRent);


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
const FIRSTVARIABLE= typeof car1.model
const SECONDVARIABLE= typeof car1.licensePlate
const THIRDVARIABLE= typeof car1.brand
// console.log(FIRSTVARIABLE);
// console.log(SECONDVARIABLE);
// console.log(THIRDVARIABLE);
// console.log(typeof car1);




/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
let totalCars=[]
let carsForSale= [car3, car4, car5]
 totalCars.push(carsForSale)
 //console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
for(let i=0; i<=carsForSale.length;i++){
    console.log(carsForSale[i]);
}



