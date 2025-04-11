// What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Test Resolve');
    } else {
      reject('Test Reject');
    }
  }).catch((err) => {
    console.log('Error caught in testAsyncFunction: ', err); 
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
//    'Response in then block: undefined' this is because when resolve() was called it is getting into the .then block and
//    printing the response, but when reject() is called it is getting into the first catch block called on the Promise 
//    and prints the error message to console, then goes to .then block which prints the response in log with undefined response.