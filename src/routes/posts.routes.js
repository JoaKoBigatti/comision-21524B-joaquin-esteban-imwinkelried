const { Router } = require('express');
const { crearPost, listPosts, borrarPost, acturalizarPost } = require('../controllers/posts.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//obtener todos los post
router.get('/', listPosts);

//crear una nuevo post y validamos desde el back las restricciones que establecimos en nuestra DB
router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('content', 'El post no puede estar vacio').not().isEmpty(),
    check('img', 'La imagen debe ser un URL valido').isURL().optional({ nullable: true, checkFalsy: true }),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    validarCampos
], crearPost)

//actualizamos un post por id, validando nuevamente desde el back las restricciones establecidas en nuestra DB
router.put('/:id', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('content', 'El post no puede estar vacio').not().isEmpty(),
    check('img', 'La imagen debe ser un URL valido').isURL().optional({ nullable: true, checkFalsy: true }),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    validarCampos
], acturalizarPost)

//elimina un post por id
router.delete('/:id', borrarPost)

module.exports = router;