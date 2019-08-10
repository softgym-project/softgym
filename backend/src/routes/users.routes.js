//importando el método router para las rutas del servidor
const { Router } = require('express');
const router = Router();

const {getUsers, createUser, getUser, deleteUser, updateUser, login, verificarUsuario, updatePassword} = require('../controllers/users.controller');

//rest api account users and security
router.get('/', verificarUsuario, getUsers);
router.get('/:id', verificarUsuario, getUser);
router.post('/signup', verificarUsuario, createUser);
router.post('/signin', login);
router.delete('/:id', verificarUsuario, deleteUser);
router.put('/:id', verificarUsuario, updateUser);
router.put('/changepassword/:id', updatePassword);
//router.get('/verify?token=', verificarUsuario);
module.exports = router;