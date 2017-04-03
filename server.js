const express = require( "express" );
const parser  = require( "body-parser" );
const hbars   = require( "express-handlebars" );
const methOverRide = require( "method-override" );
const config  = require( "./config/config.json" );
const mysql   = require( "mysql" );
const sequelize = require( "./models" );
const app = express();  // A new express application

const port = 3000;

console.log( config );


app.listen( config.port, () => {
    console.log( "Listening on port " + port );
});

