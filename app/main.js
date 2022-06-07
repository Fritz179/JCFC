require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'home')))

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'home/index.html'));
});

//connect Server to localhost
const Server = app.listen(process.env.PORT || 1234, () => {
  console.log(`Server online on: http://localhost:${Server.address().port} !!`);
})
