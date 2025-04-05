// 1. What happens when you add a for loop/while loop/switch case block inside a function
//    and use return instead of break? Do statements after the loop run? What is the return
//    value? Can we pass a return value from within a loop? Can you return from inside an if
//    block? What impact does that have?

let arr = [1,2,3,4,5,6,7,8,9,10];

function findMyCGPA(arr) {
  for (let i = 0; i < arr.length; i++) {
    return (`My college CGPA: ${arr[i]}`);
  }
  return ("No CGPA found");
  // This return statement will never be reached because the function will exit
  // as soon as the first return statement is executed inside the for loop.
}

console.log(findMyCGPA(arr))


// => When you add a for loop/while loop/switch case block inside a function and use return instead of break,
//    the function will exit immediately when the return statement is executed. Any statements after the loop will not run.
//    The return value will be the value specified in the return statement. You can pass a return value from within a loop,
//    and you can also return from inside an if block. 

// The impact of returning from inside an if block is that the function will exit at that point,
// and any code after the if block will not be executed.