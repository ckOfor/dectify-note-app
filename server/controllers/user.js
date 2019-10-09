const User = require('../models').User;

module.exports = {
	create(req, res) {
		return User
		.findOne({ where: { email: req.body.email }})
			.then((foundUser) => {
				if(foundUser) {
					if (foundUser.dataValues.password === req.body.password) {
						res.status(200).send({
							data: foundUser,
							message: 'User signed in successfully.',
							status: true
						})
					} else {
						res.status(400).send({
							data: {},
							message: `Incorrect login in credentials for ${req.body.email}.`,
							status: false
						})
					}
				} else {
					return User
					.create({
						email: req.body.email,
						password: req.body.password,
					})
					.then((createdUser) => {
						res.status(200).send({
							data: createdUser,
							message: 'User created successfully.',
							status: true
						})
					})
					.catch(error => res.status(400).send({
						data: {},
						message: error.message,
						status: false
					}));
				}
			})
	},
};
