// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
//    the data has been received in the fetch.

function fetchCall() {
  fetch('https://jsonplaceholder.typicode.com/posts').then((response)=> {
    setTimeout(() => {
      if (!response.ok) {
        return Promise.reject(response.status);
      };
      return response.json();
    }, 2000);
  }).then((response) => {
    console.log('Data received from fetch:', response);
  }).catch((error) => {
    console.log('Error in fetch call:', error);
  })
}

fetchCall()

// 7. Complete the above tasks with async/await.

const fetchCallAsync = async () => {
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response)=> {
      console.log('Fetching data from first async call...');
    })
  }, 2000);
};

const fetchCallAsync2 = async () => {
  setTimeout(() => {
    fetch('https://reqres.in/api/users').then((response)=> {
      console.log('Fetching data from second async call...');
    })
  }, 5000);
};

async function toCallAsync() {
  let result = await fetchCallAsync();
  let result2 = await fetchCallAsync2();
}

toCallAsync();