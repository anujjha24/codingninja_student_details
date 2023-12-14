const express = require('express');
const router = express.Router();
const jobList = require('../controllers/jobs');
router.get('/list' , jobList.jobPage);
module.exports = router;