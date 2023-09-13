# Bienvenidos al FORO de Joaquin Imwinkelried,

El foro permite crear, editar y eliminar Posteos


Hay que crear el archivo .env indicando el puerto que corresponda, usuario y contraseña de MySQL tal como se ve en el .ejemplo.env


Recordar que se debe ejecutar ```npm install``` para reconstruir los modulos de Node.

Una vez ejecutado el servidor, en la ruta "./src/models/server.js" linea 70, se debe cambiar el valor true del "sequelize.sync" a false para que  no siga forzando la creacion de la tabla MySQL, borrando todo lo que este guardado en la base de datos al recrearla.