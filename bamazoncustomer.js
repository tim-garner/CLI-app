var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ddlkP12oa>316!",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    console.log("working");
    // connection.query("SELECT * FROM products", function (err, result, fields) {
    //   if (err) throw err;
    //   console.log(result);
  });
// });

function start() {
    inquirer
      .prompt({
        name: "Introduction!",
        type: "list",
        message: "What would you like to buy??",
        choices: ["PS4", "Apple Watch","Callaway Epic Flash Driver", "Rolex Oyster","The Sandlot","12 pack Pepsi","BioShock", "Brooks Running Shoes", "Steph Curry Jersey","1965 Ford Shelby", "EXIT"]
      })
    .then(function(inquirerResponse) {
        if (inquirerResponse.confirm) {
          console.log("" + inquirerResponse.choices + " Great Option");
        }
        else {
          console.log("Come again another time");
        }
      });
}