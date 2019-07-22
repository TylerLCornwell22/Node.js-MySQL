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
        console.table(res);
    
        });
        

};

display();