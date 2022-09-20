'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},

			firstName: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},

			lastName: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
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
			},

			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},

			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			},

			deletedAt: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	}
};
