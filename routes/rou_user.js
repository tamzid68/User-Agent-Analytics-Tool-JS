const express = require('express');
const router = express.Router();
const {getAll} = require('../controllers/con_user.js');

router.get('/', getAll);


module.exports = router;