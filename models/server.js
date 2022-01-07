const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        
        //MIDDLEWARES
        this.middlewares();

        //APP ROUTES
        this.routes();

    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //BODY PARSER
        this.app.use( express.json());

        //Public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server started on port", this.port)
        });
    }
}

module.exports = Server;