// Write a function that sorts an array of objects by the key that is passed in the second
// argument, and in the order passed as the 3rd argument.
// Example:

// let users = [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// "date_of_birth": "2009/05/09",
// “gender”:”Male”,
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// "date_of_birth": "1996/11/05",
// “gender”:”Female”
// }, {
// "id": 3,
// "first_name": "Demetris",
// "email": "dkilshall2@elpais.com",
// "date_of_birth": "2018/12/31",
// “gender”:”Male”
// }, {
// "id": 4,
// "first_name": "Amata",
// "email": "abraiden3@canalblog.com",
// "date_of_birth": "2012/05/23",
// “gender”:”Female”
// }]

// sort(users, “id”, “desc”) //Should return users sorted by id in
// descending order
function sortById(user_arr, key, order){
  if(user_arr.length === 0) { return [];};
  for (let i = 0; i < user_arr.length; i++) {
    for (let j= i+1; j < user_arr.length; j++) {
      if (order == 'desc') {
        if (user_arr[i][key] < user_arr[j][key]) {
          let temp = user_arr[i];
          user_arr[i] = user_arr[j];
          user_arr[j] = temp;
        };
      } else if (order == 'asc') {
        if (user_arr[i][key] > user_arr[j][key]) {
          let temp = user_arr[i];
          user_arr[i] = user_arr[j];
          user_arr[j] = temp;
        };
      };
    };
  };
  return user_arr;
}

console.log(sortById([], 'id', 'desc'));

// sort(users, “first_name “desc”) //Should return users sorted by
// first_name in ascending order

//First Solution in Brute force
function sortByName(user_arr, key, order){
  if(user_arr.length === 0) { return [];};
  for (let i = 0; i < user_arr.length; i++) {
    for (let j= i+1; j < user_arr.length; j++) {
      if (order == 'desc') {
        if (user_arr[i][key][0] < user_arr[j][key][0]) {
          let temp = user_arr[i];
          user_arr[i] = user_arr[j];
          user_arr[j] = temp;
        };
      } else if (order == 'asc') {
        if (user_arr[i][key][0] > user_arr[j][key][0]) {
          let temp = user_arr[i];
          user_arr[i] = user_arr[j];
          user_arr[j] = temp;
        } else if((user_arr[i][key][0] == user_arr[j][key][0]) && (user_arr[i][key][1] > user_arr[j][key][1])) {
          let temp = user_arr[i];
          user_arr[i] = user_arr[j];
          user_arr[j] = temp;
        };
      };
    };
  };
  return user_arr;
}

//Second way
function sortByName(user_arr, key, order){
  if(user_arr.length === 0) { return [];};
  for (let i = 0; i < user_arr.length; i++) {
    for (let j= i+1; j < user_arr.length; j++) {
      if (order == 'desc') {
        if (user_arr[i][key].localeCompare(user_arr[j][key]) < 1) {
          let temp = user_arr[i];
          user_arr[i] = user_arr[j];
          user_arr[j] = temp;
        };
      } else if (order == 'asc') {
        if (user_arr[i][key].localeCompare(user_arr[j][key]) > 0) {
          let temp = user_arr[i];
          user_arr[i] = user_arr[j];
          user_arr[j] = temp;
        };
      };
    };
  };
  return user_arr;
}