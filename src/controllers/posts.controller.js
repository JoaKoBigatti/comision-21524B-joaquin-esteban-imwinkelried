const { request, response } = require("express")
const { PostModel } = require("../models/posts")


//Esta funcion se encarga de crear el post
const crearPost = async (req = request, res = response) => {
    //desestructuramos el body
    const { title, content, author, img } = req.body
    //almacenamos un objeto con los atributos del body en una variable
    const post = { title, content, author, img }
    //creamos el post en la DB
    await PostModel.create(post)
    //redireccionamos al index ya con el nuevo post creado
    res.redirect('/');
}

//Esta funcion se encarga de traer todos los post de la DB
const listPosts = async (req = request, res = response) => {
    const allPosts = await PostModel.findAll()
    res.json(allPosts);
}

const acturalizarPost = async (req, res) => {
    const { id } = req.params;

    // acá con esto válida que exista el id que envía antes de querer actualizar, sino te arroja un error. 
    if (!id) {
        return res.status(400).json({ error: 'El ID es requerido' });
    }
    //desestructuramos el body
    const { title, content, author, img } = req.body;
    //almacenamos un objeto con los atributos del body en una variable
    const post = { title, content, author, img };
    try {
        //acá haces el try, intentas actualizar el post.
        const [updatedRows] = await PostModel.update(post, { where: { id: id } });

        //acá se verifica de nuevo Si no se actualizó ninguna fila, es posible que el ID no existe
        if (!updatedRows) {
            return res.status(404).json({ error: 'No se encontró el post con ese ID', msg: id });
        }
        //si todo sale bien y se actualiza el post nos redirecciona al index
        return res.redirect('/');
        //en caso de ocurrir un error inesperado, el catch nos mostrara el error
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al actualizar el post' });
    }
};

//Esta funcion se encarga de borrar los post
const borrarPost = async (req = request, res = response) => {
    //desestructuramos el id de la request
    const { id } = req.params;
    //y mandamos a eliminar el post de la DB donde el id coincida con el id obtenido de los parametros de la request
    PostModel.destroy({
        where: { id: id }
    })
    //redireccionamos al index
    res.redirect('/')
};

module.exports = { crearPost, listPosts, borrarPost, acturalizarPost }
