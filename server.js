var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


var index = require('./routes/index');
var todos = require('./routes/todos');

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1/', todos);


app.listen(3000, function(){
    console.log('Server startes on port 3000...');
})

