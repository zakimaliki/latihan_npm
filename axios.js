const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    console.log('Status Code:', res.status);
    const users = res.data;
    objIndex = users.findIndex((obj => obj.id == 1));
    users[objIndex].name = "Zaki"
    // console.log(users);
    for(item of users) {
      console.log(`email: ${item.name}`);
    }
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });
