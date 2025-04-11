// What will be printed to the console?

 const testAsyncFunction = () => {
 return new Promise((resolve, reject) => {
 if (Math.random() > 0.5) {
  resolve('Test Resolve');
 } else {
  reject('Test Reject');
 }
 }).catch((err) => {
  console.log('Error caught in testAsyncFunction', err);
  throw new Error('Forced error');
 });
 };

 testAsyncFunction()
 .then((res) => {
 console.log('Response in then block: ', res);
 })
 .catch((err) => console.log('Error in catch block: ', err));

// ** Explanation **

// => When resolve() is called then 'Response in then block: Test Resolve' will be printed to the console. 

// => When reject() is called then 'Error caught in testAsyncFunction: Test Reject' will be printed followed by 
//    'Error in catch block: Error: Forced error' this is because when resolve() was called it is getting into the .then block and
//    printing the response, but when reject() is called it is getting into the first catch block called on the Promise 
//    and prints the error message to console, then a Error is forcefully thrown which takes the response from the promise 
//    into the second .catch block which prints the error in log with Error in catch block: Error: Forced error.