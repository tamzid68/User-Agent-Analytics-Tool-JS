const express = require('express');
const router = express.Router();

const {getAll} = require('../controllers/con_user.js');
const {downloadCsv} = require('../utils/uti_download.js');
const {gerUserAgentAnalytics} = require('../controllers/con_analytics.js');


router.get('/', getAll);

router.get('/user-agent', gerUserAgentAnalytics);
router.get('/download', downloadCsv);

module.exports = router;