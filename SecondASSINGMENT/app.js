// installed express dependecies and declared bellow
//----------------------------------------------------
//First part of the exercise instal express and nodemon 
//----------------------------------------------------
const express = require('express');
// using the function express to the app const
const app = express();

//routing in a different way than last exercise with use function
//---------------------------------------------------------
// second part of the exercise two midleware loging something
//---------------------------------------------------------
app.use('/users',(req, res, next) => {
  res.send('<h1>New User</h1>');
  // console.log('it is working');
  
});

//----------------------------------------------------------
// Third part of the exercise two routes with dummy response
// must be "/" "/users"
//----------------------------------------------------------

app.use('/',(req, res, next) => {
  res.send('<h1>Anything in here</h1>');
  // console.log('it is working properly');
});

// also no need anymore http const to start server
// this time I chose another port
app.listen(3500);