const express = require('express');
const gradesController = require('../controllers/grades');

const router = express.Router();

router.get('/', gradesController.getGrades);

module.exports = router;