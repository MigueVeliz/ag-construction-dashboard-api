const express = require('express'),
	logger = require('morgan'),
	app = express(),
	bodyParser = require('body-parser'),
	PORT = process.env.PORT || 8080,
	cors = require('cors');

// cross-origin request will not work from react server to express
// server without this
app.use(cors());

// 1.set up the view engines
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));

// logger to see what is going on
app.use(logger('dev'));

// 2 set body parser to get form data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 3 connect controllers
app.use('/', require('./controllers/fotos'));

// 4. Listen
app.listen(PORT, () => console.log('Server is listening on port:', PORT ));