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

