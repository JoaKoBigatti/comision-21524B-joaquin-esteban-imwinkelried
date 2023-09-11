const {Router}=require('express');
const { crearPost, listPosts } = require('../controllers/posts.controller');
const {check}=require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router=Router();

//obtener todos los post
router.get('/',listPosts);

//obtener un post por id
router.get('/:id',)

//crear una nuevo post
router.post('/',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('content','El post no puede estar vacio').not().isEmpty(),
    check('author','El autor es obligatorio').not().isEmpty(),
    validarCampos
],crearPost)

//actualizar un post
router.put('/:id',)

//elimina un post
router.delete('/:id',)

module.exports=router;