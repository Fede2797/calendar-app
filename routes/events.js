/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middleware/validarCampos');
const { validarJWT } = require('../middleware/validarJWT');
const { getEventos, crearEvento, updateEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todas las rutas tienen que pasar por la validación del JWT
router.use( validarJWT );


// Obtener eventos
router.get('/', getEventos);

// Crear nuevo evento
router.post('/', [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
    check('end', 'Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
], crearEvento);

// Actualizar evento
router.put('/:id',[
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
    check('end', 'Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
], updateEvento);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;