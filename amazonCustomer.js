var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "amazon_db",
        port: 3306,
})

connection.connect();

var display = function () {
        connection.query("SELECT * FROM products", function (err, res) {
                if (err) throw err;
                console.log("Welcome to Amazon")
                console.log("please select a product")
                console.table(res);
                promptCustomer(res);

        });


};

display();

var promptCustomer = function (inventory) {

        inquirer.prompt([

                {
                        type: "input",
                        name: "itemID",
                        message: "What is the ID of the product they would like to buy?"
                },

                {
                        type: "input",
                        name: "howMany",
                        message: "how many units of the product would you like to buy?",

                },
        ]).then(function (answer) {
                var choiceID = parseInt(answer.itemID);
                var amount = parseInt (answer.howMany);

                connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", choiceID, function (err, res) {
                        if (err) throw err;
                        if (amount > res[0].stock_quantity) {
                                console.log("We dont have enough")
                                display();


                                //       if there isnt enough of the chosen product, let the user know and ask them again to chose a lower quantity

                        }


                        else {
                                console.log("We made the purchase!")


                                //       otherwise we make the purchase

                                // call function make purchase


                        }
                });

        });

}


// function make purchase (same as else statement) take howMany and delete it from whats in stock, then update database with the 
// stock quantity amount