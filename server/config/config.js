module.exports = {
	development: {
		"username": "oforchinedu",
		"password": null,
		"database": "note-dev",
		"port": 5432,
		"host": "127.0.0.1",
		"dialect": "postgres"
	},
	// development: {
	// 	url: process.env.DATABASE_URL,
	// 	dialect: 'postgres'
	// },
	production: {
		url: process.env.DATABASE_URL,
		dialect: 'postgres'
	},
	test: {
		"username": "oforchinedu",
		"password": null,
		"database": "note-test",
		"port": 5432,
		"host": "127.0.0.1",
		"dialect": "postgres"
	},
};

