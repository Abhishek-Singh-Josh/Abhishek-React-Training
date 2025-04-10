// Given 2 arrays with related objects, return a new array where objects having the same id
// from each of the arrays are merged. Try to achieve it with a complexity - O(n). Example:
// ● let userNames = [{
// "id": 1,
// "first_name": "Nicki",
// }, {
// "id": 2,
// "first_name": "Raychel",
// }, {
// "id": 3,
// "first_name": "Demetris",
// }, {
// "id": 4,
// "first_name": "Amata",
// }]
// let userEmails = [{
// "id": 2,
// "email": "rmcgrady1@cpanel.net",
// }, {
// "id": 1,
// "email": "ncrozier0@squarespace.com",
// }, {
// "id": 4,
// "email": "abraiden3@canalblog.com",
// }, {
// "id": 3,
// "email": "dkilshall2@elpais.com",
// }]
// mergeById(userNames, userEmails)
// //This should return an array of users in the format:
// [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// }, {
// "id": 3,
// "first_name": "Demetris",
// "email": "dkilshall2@elpais.com",

// }, {
// "id": 4,
// "first_name": "Amata",
// "email": "abraiden3@canalblog.com",
// }]

function mergeById(user_names, user_emails) {
  let final_array = []
  let merging_hash = {}
  
  user_names.forEach((data, index) => {
    merging_hash[data['id']] = data
  });
  
  for(let i = 0; i < user_emails.length; i++) {
    if (Object.keys(merging_hash).includes(String(user_emails[i]["id"]))) {
      merging_hash[`${user_emails[i]["id"]}`]['email'] = user_emails[i]['email'];
      final_array.push(merging_hash[`${user_emails[i]["id"]}`]);
    } else {
      final_array.push(user_emails[i]);
    };
  };
  
  return final_array;
}

console.log(mergeById(userNames, userEmails));