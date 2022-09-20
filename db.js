import { Sequelize } from 'sequelize';

export const db = new Sequelize('ums', 'root', null, {
	host: '127.0.0.1',
	dialect: 'mysql'
});
