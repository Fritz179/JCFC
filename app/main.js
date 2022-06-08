require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'template')])

app.use(express.static(path.join(__dirname, 'home')))

app.get('/', function(req, res){
    res.render(path.join(__dirname, 'home/index.ejs'));
});

//connect Server to localhost
const Server = app.listen(process.env.PORT || 1234, () => {
  console.log(`Server online on: http://localhost:${Server.address().port} !!`);
})
