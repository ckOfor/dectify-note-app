'use strict';
module.exports = (sequelize, DataTypes) => {
	const Note = sequelize.define('Note', {
		category: {
			type: DataTypes.STRING,
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
	}, {});
	Note.associate = function(models) {
		// associations can be defined here
		Note.belongsTo(models.User, {
			foreignKey: 'userId',
			onDelete: 'CASCADE',
		});
	};
	return Note;
};
