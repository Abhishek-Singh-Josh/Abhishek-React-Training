// Using promises - write a function that fetches data from an API endpoint (GET
//   https://reqres.in/api/users ). Log the data into the console once it is received

function getData (url){
  fetch(url).then(response => {
      if (!response.ok) {
        console.log(response.status)
      };
      console.log(response.json())
  }).then((data) => {
      console.log(data)
  })
}

getData('https://reqres.in/api/users')

// This will return a promise that resolves to the response of the request.