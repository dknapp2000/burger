const mysql      = require( "mysql" );
const connection = require( "./connection.js" );

const db = mysql.createConnection( {
	"host": connection.host,
	"user": connection.user,
	"port": connection.port,
	"password": connection.pass,
	"database": connection.database
});

db.connect( (err) => {
	if (err) {
		console.error("Error connecting to the DB: " + err );
		return;
	}

	console.log( "Connected as id " + db.threadId );
}) 

function selectAll() {
	return new Promise( function( resolve, reject ) {
		db.query( "SELECT * FROM burgers ORDER BY id", (err,result) => {
			if ( err ) {
				reject( err );
			} else {
				resolve( result );
			}
		});
	});
};

function insertOne( burger ) {
	return new Promise( function( resolve, reject ) {
		db.query( "INSERT INTO burgers ( burger_name, devoured ) values ( ?, ? )", [ burger.burger_name, burger.devoured ], (err,results) => {
			if ( err ) {
				reject( err );
			} else {
				resolve( results );
			}
		})
	})
};

function updateOne( burger ) {
	return new Promise( function( resolve, reject ) {
		console.log( burger );
		db.query( "UPDATE burgers SET devoured = ? WHERE id = ?", [ burger.devoured, burger.id ], (err,results) => {
			if ( err ) {
				reject( err );
			} else {
				console.log( results );
				resolve( results );
			}
		})
	})
};

module.exports = {
	"selectAll": selectAll,
	"insertOne": insertOne,
	"updateOne": updateOne
}