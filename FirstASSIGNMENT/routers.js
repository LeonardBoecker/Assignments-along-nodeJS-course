const fs = require('fs');
// this const user array is to store the string the user type
const user = [];
// created a manageRequest and Response --
const managRR = (req, res) => {
  const url = req.url;
  const method = req.method;

  //condition to make a new page when required by 3000 port

  //----------------------------------------------------------------
  // THIRD PART OF THE EXERCISE
  //----------------------------------------------------------------
  
  if (url === '/') {
    
    res.setHeader('Content-Type', 'Text/html'); //set the type of content

    res.write('<html>');

    res.write('<header>');
      res.write('<title>Users</title>');
      res.write('<style>');                       // not asked in the exercise added by my own to practice style
      res.write('form {display: flex; justfy-content:center;}' +
      'button {background-color: #38B0DE color: black}');
      res.write('</style>');
    res.write('</header>');

    res.write('<body>');
      res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="user" placeholder="User name">');
        res.write('</br><button type="submit">Send it</button>');
      res.write('</form>');
    res.write('</body>');

    res.write('</html>');
    //return res.end because I have more code instead just res.end
    return res.end();
    //------------------------------------------------------------------
    // SECOND PART OF THE EXERCISE TO MAKE A / RESPONSE WITH SOME GREETINGS
    //------------------------------------------------------------------
    // res.write('<html>');
    //   res.write('<header>');
    //     res.write('<style>h1 {color: #555; '+
    //     'text-align: center;} </style>');
    //     res.write('<title>Exercising..</title>')
    //   res.write('</header>')
    //     res.write('<body>');
    //     res.write('<h1>Amazing! Greeting my dears</h1>');
    //     res.write('</body>');
    // res.write('</html>');

    // if(url === '/users'){
  //   res.setHeader('Content-Type', 'Text/html')
  //   res.write('<html>');
  //     res.write('<header>');
  //       res.write('<style>h1 {color: #555; '+
  //       'text-align: center; margin: 0;}'+
  //       'ul {display: flex; flex-direction: column; justify-content: center; padding-left: 0;}'+
  //       'ul li { list-style: none; text-align: center; margin: 10px} </style>');
  //       res.write('<title>Exercising..</title>')
  //     res.write('</header>')
  //       res.write('<body>');
  //       res.write('<h1>Amazing Users</h1>');
  //       res.write('<ul><li>User 1</li><li>User 2</li></ul>');
  //       res.write('</body>');
  //   res.write('</html>');
  // }
  }

  //------------------------------------------------------------------
  // FOURTH PART OF THE EXERCISE
  //------------------------------------------------------------------

  if (url === '/create-user' && method === 'POST') {
    const dataFrom = []; // as I don´t have to much knowledge I realize this form 
                         // to get the name of the user and set it to the greeting 
                         // once it is a string I just concat the string to html code

    req.on('data', (bunches) => { //bunches is the parts of the data I am taking from user
      dataFrom.push(bunches);     // set that in to an array came from user
    });
      req.on('end', ()=>{
      // set the whole data into a completeDataFrom using buffer
      // to make sure it is a string parse it to a string 
      const completeDataFrom = Buffer.concat(dataFrom).toString();
      // as user message shoul be his name I got it to a message from user 
      // in which is his name or something else, split it from = sign and 
      // save it also into a file also set it into the new page user 
      const userMessage = completeDataFrom.split('=')[1];
      // got the global user and set it indeed
      user.push(userMessage);
      // creating a message.txt to save what is typed
      fs.writeFileSync('message.txt', user);
      
      // then make it visible about greeting with name of the user
      // or somthing else
      res.write('<html>');
      res.write('<header>');
      res.write('<style>h1 {color: #555; ' +
        'text-align: center;} </style>');
      res.write('<title>New user</title>')
      res.write('</header>')
      res.write('<body>');
      res.write('<h1>Amazing! Greeting ' + user + '</h1>');
      res.write('</body>');
      res.write('</html>');
      //console.log(user); this console.log was to make sure what I was getting into user
      return res.end();
    })
    
  }

  

}

module.exports = managRR;
