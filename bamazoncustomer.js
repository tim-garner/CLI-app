var mysql = require("mysql");
var inquirer = require("inquirer");
// var choices= ["PS4", "Apple Watch","Callaway Epic Flash Driver", "Rolex Oyster","The Sandlot","12 pack Pepsi","BioShock", "Brooks Running Shoes", "Steph Curry Jersey","1965 Ford Shelby", "EXIT"];
var stock= [15,35,10,3,40,80,5,25,45,1];



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
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
   start();
  });


function start() {
    inquirer
      .prompt([{
        name: "Introduction!",
        type: "list",
        message: "What would you like to buy??",
        choices: ["PS4", "Apple Watch","Callaway Epic Flash Driver", "Rolex Oyster","The Sandlot","12 pack Pepsi","BioShock", "Brooks Running Shoes", "Steph Curry Jersey","1965 Ford Shelby", "EXIT"]
      },
      { type: "input",
      name: "inputAmount",
      message: "How many units would you like?",
    }
  ])
.then(function(start) {
        if (start.Introduction === "PS4", "Apple Watch","Callaway Epic Flash Driver", "Rolex Oyster","The Sandlot","12 pack Pepsi","BioShock", "Brooks Running Shoes", "Steph Curry Jersey","1965 Ford Shelby") {
         console.log("Great Option");
          Selection();
    
        }
        else(start.Introduction === "EXIT") 
          console.log("leaving store");
          connection.end();
      });
    }


    

      function Selection() {
        connection.query("SELECT stock_quantity FROM products", function(err, res) {
          if (err) throw err;
          console.log("working");
          for (var i = 0; i < res.length; i++) {
            if (start.inputNumber > stock) {
              console.log("out of stock");
              start();
            } else{
              console.log("order is now complete! Have a nice day!")
            }
          }
       
        }
        );
      }
    }
      //change choices.length and choice.stock