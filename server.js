var express = require('express');
var stormpath = require('express-stormpath');
var jade = require('jade');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(stormpath.init(app, {
  website: true,
  expand: {
    customData: true
  }
}));

app.get('/', function(req, res) {
  res.render('home', {title: 'Welcome'});
});
app.get('/h01', function(req, res) {
	res.render('h01.jade', {title: 'Ternary'});
});
app.get('/h02', function(req, res) {
  res.render('h02.jade', {title: 'Two'});
});

app.use('/profile',stormpath.loginRequired,require('./profile')());

app.on('stormpath.ready',function(){
  console.log('Stormpath Ready');
  app.listen(3000);
});