var inquirer = ("inquirer");
var mysql = require ("mysql");
var Table = require ("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "amazon_db",
    port: 3306,

}) 
connection.connect();

var display = function () {
    connection.query("SELECT * FROM products",function(err,res){
        if (err) throw err;
        console.log ("welcome to amazon");
        console.log ("choose your products below");
   
    var table = new Table({
        head: ['item_id', "product_name", "department_name", "price", "stock_quantity"]
      , colWidths: [12, 15, 20, 10,20],
      colAligns: ["center", "left", "right"],
    });
    for (var i =0; i < res.length; i++){
      table.push ([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price,res[i].stock_quantity])
    }
    console.log(table.toString());
    console.log(res);
  })
};

display ()