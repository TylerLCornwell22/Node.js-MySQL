var mysql = require("mysql");
var inquirer = ("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "amazon_db",
    port: 3306,
})

connection.connect();

var display = function () {
    connection.query("SELECT * FROM products", function(err,res){
        if (err) throw err;
        console.log("Welcome to Amazon")
        console.log("please select a product")

        for (var i = 0; i < res.length; i++){
            table.push ([res[i].product_name,res[i].department_name, res[i].price, res[i].stock_quantity]);
    
        }
    });
    var table = new Table({
        head: ["product_name", "department_name", "price", "stock_quantity"]
        ,colWidths: [20, 20, 20, 20, 20, 20]
      ,colAligns: ["center", "left", "right"],

    });
    
    // console.log(Table.toString());
    // console.log("");

};

display();