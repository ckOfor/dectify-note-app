const userController = require('../controllers').user;
const noteController = require('../controllers').note;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the Detectify API!',
	}));
	
	// User routes
	app.post('/api/user/create', userController.create);
	
	// Notes routes
	app.post('/api/user/:userId/notes', noteController.create);
	app.get('/api/user/:userId/notes', noteController.list);
	app.get('/api/user/:userId/notes/:noteId', noteController.retrieve);
	app.put('/api/user/:userId/notes/:noteId', noteController.update);
	app.delete('/api/user/:userId/notes/:noteId', noteController.destroy);
};
