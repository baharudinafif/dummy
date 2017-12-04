const mysql	= require('mysql');

const tableName		= 'post';
const connection	= mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'pelatihan'
});

connection.connect((err) => { console.log('post model connect', { err }); });

const findAll	= (query, callback) => {
	const id 			= query.id;
	const title		= query.title;	
	connection.query('SELECT * FROM post WHERE id = ? OR title = ?', [id, title], (err, result, field) => {
		callback(err, result, field);
	});
};

module.exports = { findAll };