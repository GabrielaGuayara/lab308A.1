/*Declare a global counter variable.
Create a simple function that increments the variable, and then calls itself recursively.
Surround the initial function call in a try/catch block.
Within the catch, log the error and the value of the counter variable.*/

let counter = 0;
function increment(){
    counter++;
    return increment()
}

try{
    increment()
}catch(e) {
    console.log(`Error: ${e}`)
    console.log(`The value of the counter is ${counter}`)
}


//PART TWO: Trampolines
// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.
let nestedArray = [[1,5],[4,[5],6],[7,8,[9]]];

const flatArray = (arr) => {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++ ){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatArray(arr[i]))
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(flatArray(nestedArray))

const flatArrTwo = (arr, result = []) =>{
    if(!Array.isArray(arr)){
        return result.concat(arr)
    }

    for(let i = 0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
           return () => flatArrTwo(arr[i], result)
        }else{
            result.push(arr[i])
        }
    }

    return result;
}

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }

console.log(trampoline(flatArrTwo, nestedArray))

