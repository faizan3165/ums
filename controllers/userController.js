import User from '../models/User.js';

export const allUsers = async (req, res) => {
	try {
		const users = await User.findAll({
			raw: true
		});
		await res.render('home', { users: users });
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
};

export const createUser = async (req, res) => {
	await res.render('createUser');
};

export const createUserController = async (req, res) => {
	const { firstName, lastName, email, phoneNumber, userImage } = await req.body;

	try {
		const user = await User.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
			phoneNumber: phoneNumber
		});

		res.redirect('/');

		console.log('====================================');
		console.log(user);
		console.log('====================================');
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
		res.redirect('/create');
	}
};

export const editUser = async (req, res) => {
	const { id } = await req.params;
	try {
		const user = await User.findOne({
			where: {
				id: id
			},
			raw: true
		});
		await res.render('editUser', { user: user });
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
};

export const updateUser = async (req, res) => {
	const { id } = await req.params;
	const data = await req.body;
	const query = { where: { id: id } };
	try {
		await User.update(data, query);

		res.redirect('/');
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
};

export const viewUser = async (req, res) => {
	const { id } = await req.params;
	const query = { where: { id: id }, raw: true };
	try {
		const user = await User.findOne(query);

		res.render('singleUser', { user: user });
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
};

export const deleteUser = async (req, res) => {
	const { id } = await req.params;
	const query = { where: { id: id }, raw: true };
	try {
		await User.destroy(query);

		res.redirect('/');
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
};
