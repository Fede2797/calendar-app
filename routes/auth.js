const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middleware/validarCampos');
const { validarJWT } = require('../middleware/validarJWT');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

router.post( '/new', [ // middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser mínimo de 6 caracteres').isLength({ min: 6 }),
    validarCampos
], crearUsuario );

router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser mínimo de 6 caracteres').isLength({ min: 6 }),
    validarCampos
], loginUsuario );

router.get('/renew', validarJWT, revalidarToken );

module.exports = router;