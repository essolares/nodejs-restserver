const { request,response } = require('express');

const usersGet =  (req = request, res = response) => {

    const {q, name='No name', page = 1, limit=10} = req.query;

    res.json({
        msg: "get API - controllerGet",
        q,
        name,
        page,
        limit
    })
};

const usersPost =  (req, res = response) => {
    const {name, age} = req.body;

    res.json({
        msg: "post API - controllerPost",
        name,
        age
    })
};

const usersPut =  (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg: "put API - controllerPut",
        id
    })
};

const usersDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controllerDelete"
    })
};

const usersPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controllerPatch"
    })
};

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}