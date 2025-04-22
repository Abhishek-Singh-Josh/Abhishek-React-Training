// Create a memoised function that returns the cached value when the same arguments
// are passed.

function memoizeMyFunc(myAdditionFunc, cache = {}) {

  return function cachedFunc(...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log('Cache hit');
      return cache[key];
    } else {
      console.log('Cache miss');
      cache[key] = myAdditionFunc.call(this, ...args);
      return cache[key];
    }
  }
}


function additionFunc(a, b) {
  console.log('Addition function called');
  return a + b;
}

const callMemoizedFunc = memoizeMyFunc(additionFunc);

const val1 = callMemoizedFunc(1, 2); //No cache will be found so it will hit the additionFunc
const val2 = callMemoizedFunc(1, 2);
const val3 = callMemoizedFunc(1, 2);

console.log("val1:", val1);
console.log("val2:", val2);
console.log("val3:", val3);

// Cache miss
// VM232:19 Addition function called    ** Only once the additionFunc is called and rest it matched 
//                                         the key and took the value from cache.

// VM232:7 Cache hit
// VM232:7 Cache hit
// VM232:28 val1: 3
// VM232:29 val2: 3
// VM232:30 val3: 3
