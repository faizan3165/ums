import express from 'express';

import {
	allUsers,
	createUser,
	createUserController,
	editUser,
	updateUser,
	viewUser,
	deleteUser
} from '../controllers/userController';

const router = express.Router();

router.get('/', allUsers);
router.get('/create', createUser);
router.get('/user/:id', viewUser);
router.get('/edit/:id', editUser);
router.post('/create', createUserController);
router.post('/update/:id', updateUser);
router.post('/delete/:id', deleteUser);

module.exports = router;
