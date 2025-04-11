// What will be printed to the console?

const testAsyncFunction = () => {
return Promise.reject('Test static reject');
};

testAsyncFunction()
.then((res) => {
  console.log('Response in then block', res);
})
.catch((err) => console.log('Error in catch block', err));

// ** Explanation **

// => Here Promise.reject() is used to reject the promise with a static value "Test static reject".
//    So whenever it will get called then it will go to catch block and print the error message.
//    "Error in catch block Test static reject".
