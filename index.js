const axios = require('axios');
var http = require('http');

axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
  console.log('Status Code:', res.status);
  const users = res.data;
  console.log(users);
  // users[1].name = "Zaki"
  http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    for(user of users) {
        res.write('<li>Got user with id: '+user.id+', name: '+user.name+'</li>');
    }
    res.end();
}).listen(8080);



})
.catch(err => {
  console.log('Error: ', err.message);
});


// bikin folder --> npm init --> npm install --save axios  --> buat "server": "node index.js" di file package.json bagian scripts 
// --> buat coding  --> npm run server

// buat file .gitignore 
// di dalamnya isi
// node_modules
// package-lock.json

console.log("server running on http://localhost:8080");