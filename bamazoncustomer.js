var mysql = require("mysql");
var inquirer = require("inquirer");
// var choices= ["PS4", "Apple Watch","Callaway Epic Flash Driver", "Rolex Oyster","The Sandlot","12 pack Pepsi","BioShock", "Brooks Running Shoes", "Steph Curry Jersey","1965 Ford Shelby", "EXIT"];
// var stock= [15,35,10,3,40,80,5,25,45,1];



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
        connection.query("SELECT * FROM products", function(err, results) {
          if (err) throw err;
          console.log("working");
          for (var i = 0; i <product_name; i++) {
            if (start.inputNumber > stock_quantity) {
              console.log("out of stock");
              start();
            } else{
              console.log("order is now complete! Have a nice day!")
            }
          }
       
        }
        );
      }
      //change choices.length and choice.stock