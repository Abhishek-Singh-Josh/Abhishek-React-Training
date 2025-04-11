// Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument

// Example:

const someFunc = async () => {
  console.log("Printing before")
  waitForSometime(3000)
  console.log("Printing after")
}

function waitForSometime(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

someFunc()