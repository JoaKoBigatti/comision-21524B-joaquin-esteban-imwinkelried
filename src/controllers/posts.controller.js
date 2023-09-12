const { request, response } = require("express")
const { PostModel } = require("../models/posts")



const crearPost = async (req = request, res = response) => {
    const { title, content, author, img } = req.body
    const post = { title, content, author, img }

    await PostModel.create(post)

    res.redirect('/');
}

const listPosts=async(req=request,res=response)=>{
    const allPosts=await PostModel.findAll()
    res.json(allPosts);
}

const acturalizarPost = async (req, res) => {
    const { id } = req.params;

    // acá con esto válidas que exista el id que envías antes de querer actualizar, sino te arroja un error. 
    if (!id) {
        return res.status(400).json({ error: 'El ID es requerido' });
    }

    const { title, content, author, img } = req.body;
    const post = { title, content, author, img };
    

    try {
      //acá haces el try, intentas actualizar el post.
        const [updatedRows] = await PostModel.update(post, { where: { id: id } });

        //acá se verifica de nuevo Si no se actualizó ninguna fila, es posible que el ID no existe
        if (!updatedRows) {
            return res.status(404).json({ error: 'No se encontró el post con ese ID', msg:id });
        }

        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al actualizar el post'});
    }
};

const borrarPost=async(req=request, res=response)=> {
    const {id}=req.params;
    PostModel.destroy({
        where : {id:id}
    })
};

module.exports={crearPost,listPosts,borrarPost,acturalizarPost}
