const user = require('../models/mod_user.js');

const getAll = async(req, res)=>{
    res.json(user);
}

module.exports={getAll};