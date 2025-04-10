// 2. Take a function that accepts a function as a parameter (also known as callback function).
function test(callback){
  console.log('Inside the test function');
  return callback;
}

function callbackFunc(){
  console.log('Calling the callback function')
  return 5;
}

test(callbackFunc) // Here callbackFunc is passed as a reference to the test function.
                  // It will not call the callback function after test function gets executed.

test(() => callbackFunc()) // here the output we are getting as 'Inside the test function'.

test(callbackFunc()) // In this case the callback function is getting called first and then the return value 
                    // is passed to the test function.


// Explore the following cases - what is printed in the console, and what gets returned:
// ○ test(callbackFunc)
// ○ test(callbackFunc())
// ○ test(() => callbackFunc())

// ○ What happens when you return callback() from the test function? 
//  - In case of test(callbackFunc) it will run the test function and then execute the callback function.
//  - In case of test(callbackFunc()) it will run the callback function first and then return the value to the test function
// and then throw error for "callbackis not a function".
//  - In case of test(() => callbackFunc()) it will run the test function and then execute the callback function.

// ○ What happens when you return callback from the test function?
//  - It will log nothing for first case because the callback function is not getting called correctly when test function executes.
//  - In second case it will call the callback first ad then return the value to the test function and then test function gets executed.
//  - In third case Test function will execute first but callback function will not be executed.