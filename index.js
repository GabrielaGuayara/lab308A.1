/*Declare a global counter variable.
Create a simple function that increments the variable, and then calls itself recursively.
Surround the initial function call in a try/catch block.
Within the catch, log the error and the value of the counter variable.*/

// let counter = 0;
// function increment(){
//     counter++;
//     return increment()
// }

// try{
//     increment()
// }catch(e) {
//     console.log(`Error: ${e}`)
//     console.log(`The value of the counter is ${counter}`)
// }


// //PART TWO: Trampolines
// // Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// // Once your recursive function is complete, trampoline it.
// let nestedArray = [[1,5],[4,[5],6],[7,8,[9]]];

// const flatArray = (arr) => {
//     let newArr = [];
    
//     for(let i = 0; i < arr.length; i++ ){
//         if(Array.isArray(arr[i])){
//             newArr = newArr.concat(flatArray(arr[i]))
//         }
//         else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(flatArray(nestedArray))

// const flatArrTwo = (arr, result = []) =>{
//     if(!Array.isArray(arr)){
//         return result.concat(arr)
//     }

//     for(let i = 0; i< arr.length; i++){
//         if(Array.isArray(arr[i])){
//            return () => flatArrTwo(arr[i], result)
//         }else{
//             result.push(arr[i])
//         }
//     }

//     return result;
// }

// const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
//   }

// console.log(trampoline(flatArrTwo, nestedArray))


//PART THREE: Deferred Execution
/*Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
Once complete, use the alert() method to alert the user that the calculation is finished*/

// const holdNum = document.querySelector(".primeNum");
// console.log(holdNum)

let num = 8;
  
const isPrime = () =>{

    let isPrimeNum = true;

    if(num >  1){
        for(let i = 2; i*i < num; i++){
            if(num%i === 0){
                isPrimeNum = false;
            }
        }

    }
    
    return isPrimeNum
}

console.log(isPrime(num))