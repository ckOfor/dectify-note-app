const Note = require('../models').Note;

module.exports = {
	create(req, res) {
		return Note
		.create({
			category: req.body.category,
			content: req.body.content,
			userId: req.params.userId,
		})
		.then(note => {
			res.status(200).send({
				data: note,
				message: 'Note created successfully.',
				status: true
			})
		})
		.catch((error) => {
			res.status(400).send({
				data: {},
				message: error.message,
				status: false
			})
		});
	},
	list(req, res) {
		return Note
		.findAll({ where: { userId: req.params.userId }})
		.then(note => {
			res.status(200).send(note)
		})
		.catch((error) => {
			res.status(400).send({
				data: {},
				message: error.message,
				status: false
			})
		});
	},
	retrieve(req, res) {
		return Note
		.findOne({ where: { id: req.params.noteId }})
		.then(note => {
			if (!note) {
				res.status(400).send({
					data: {},
					message: 'Note not found.',
					status: false
				})
			}
			return res.status(200).send({
				data: note,
				message: 'Note retrieved successfully.',
				status: true
			})
		})
		.catch((error) => {
			res.status(400).send({
				data: {},
				message: error.message,
				status: false
			})
		});
	},
	update(req, res) {
		return Note
		.findOne({ where: {
			id: req.params.noteId,
			userId: req.params.userId,
		}})
		.then(note => {
			if (!note) {
				return res.status(404).send({
					message: 'Note Not Found',
				});
			}
			return note
			.update({
				category: req.body.category || note.category,
				content: req.body.content || note.content,
			})
			.then(() => {
				res.status(200).send({
					data: note,
					message: 'Note updated successfully.',
					status: true
				})
			})
			.catch((error) => {
				res.status(400).send({
					data: {},
					message: 'Update failed please try again',
					status: false
				})
			});
		})
		.catch((error) => {
			res.status(400).send({
				data: {},
				message: error.message,
				status: false
			})
		});
	},
	destroy(req, res) {
		return Note
		.findOne({ where: {
			id: req.params.noteId
		}})
		.then(note => {
			if (!note) {
				return res.status(400).send({
					message: 'Note Not Found',
				});
			}
			return note
			.destroy()
			.then(() => {
				res.status(200).send({
					data: {},
					message: 'Note deleted successfully.',
					status: true
				})
			})
			.catch((error) => {
				res.status(400).send({
					data: {},
					message: 'Note could not be deleted please try again.',
					status: false
				})
			});
		})
		.catch((error) => {
			res.status(400).send({
				data: {},
				message: error.message,
				status: false
			})
		});
	},
};
