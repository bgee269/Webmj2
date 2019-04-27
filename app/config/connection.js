var Sequelize = require("sequelize");

var sequelize = new Sequelize("sequelize_chirpy1", "root", "", {
  host: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});












//var mysql = require("mysql");

// Set up our connection information
//var connection = mysql.createConnection({
 // port: 3306,
 // host: "localhost",
 // user: "root",
 // password: "Charmgizmo3!",
 // database: "chirpy"
//});

// Connect to the database
//connection.connect(function(err) {
 // if (err) {
 //   console.error("error connecting: " + err.stack);
  //  return;
 // }
 // console.log("connected as id " + connection.threadId);
//});

// Export connection
//module.exports = connection;
