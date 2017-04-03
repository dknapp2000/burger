const express = require( "express" );
const parser  = require( "body-parser" );
const hbars   = require( "express-handlebars" );
const methOverRide = require( "method-override" );
const config  = require( "./config/config.js" );
const mysql   = require( "mysql" );
const sequelize = require( "sequelize" );

const app = express();  // A new express application

const port = process.env.PORT || config.app.port;

console.log( port );
console.log( config.db.dev );


app.listen( config.port, () => {
    console.log( "Listening on port " + port );
});

