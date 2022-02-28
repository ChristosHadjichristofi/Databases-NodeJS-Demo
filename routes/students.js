const express = require('express');
const studentsController = require('../controllers/students');

const router = express.Router();

router.get('/', studentsController.getStudents);

module.exports = router;