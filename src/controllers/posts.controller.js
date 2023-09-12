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

const acturalizarPost = async (req = request, res = response) => {
    const {id}=req.params;
    const { title, content, author, img } = req.body
    const post = { title, content, author, img }
    await PostModel.update(post,{where: { id: id }})

    res.redirect('/')

};

const borrarPost=async(req=request, res=response)=> {
    const {id}=req.params;
    PostModel.destroy({
        where : {id:id}
    })
};

module.exports={crearPost,listPosts,borrarPost,acturalizarPost}
