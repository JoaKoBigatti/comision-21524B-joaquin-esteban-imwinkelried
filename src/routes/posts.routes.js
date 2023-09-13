const { Router } = require('express');
const { crearPost, listPosts, borrarPost, acturalizarPost } = require('../controllers/posts.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//obtener todos los post
router.get('/', listPosts);

//crear una nuevo post
router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('content', 'El post no puede estar vacio').not().isEmpty(),
    check('img', 'La imagen debe ser un URL valido').isURL().optional({ nullable: true, checkFalsy: true }),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    validarCampos
], crearPost)

//actualizar un post
router.put('/:id', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('content', 'El post no puede estar vacio').not().isEmpty(),
    check('img', 'La imagen debe ser un URL valido').isURL().optional({ nullable: true, checkFalsy: true }),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    validarCampos
], acturalizarPost)

//elimina un post
router.delete('/:id', borrarPost)

module.exports = router;