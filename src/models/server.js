const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('../database/config.db');
const path = require('node:path');
const { PostModel } = require('./posts');
require('./posts');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.paths = {
            post: '/api/post',
        }
        //Middlewares (funciones que añaden otra funcionalidad al server)
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.static('public'));
        this.app.set('views', path.join(__dirname, '..', 'views'))
        this.app.set('view engine', 'ejs');
        this.app.get('/', async(req, res) => {
            const posts=await PostModel.findAll()
            res.render('index',{title:'Foro de Imwinkelried', posts: posts.reverse()})
        })
        this.app.get('/crearpost',async(req,res)=>{
            res.render('./crearPost')
        })

    }

    routes() {
        this.app.use(this.paths.post, require('../routes/posts.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            sequelize.sync({ force: false })
                .then(() => console.log('Base de Datos - Conectada'))
                .catch(err => console.log(err));
            console.log(`Servidor corriendo en puerto http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;