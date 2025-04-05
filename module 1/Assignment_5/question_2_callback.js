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
                  // It will call the callback function when executed.

test(() => callbackFunc()) // here the output we are getting as 'Calling the callback function' and returns 5.

test(callbackFunc()) // In this case the callback function is getting called first and then the return value 
                    // is passed to the test function.


// Explore the following cases - what is printed in the console, and what gets returned:
// ○ test(callbackFunc)
// ○ test(callbackFunc())
// ○ test(() => callbackFunc())

// ○ What happens when you return callback() from the test function? 
//  - it will give the same output as above function calls.
// ○ What happens when you return callback from the test function?
//  - it will log nothing for first case because the callback function is not getting called correctly when test function executes.
//  - it will give same output for second case as above.
//  - for third case i need some clarity(**Have doubt**)