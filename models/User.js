import { Sequelize } from 'sequelize';

import { db } from '../db';

module.exports = db.define('User', {
	id: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},

	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},

	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},

	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},

	phoneNumber: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	}
});
