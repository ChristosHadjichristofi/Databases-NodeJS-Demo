const express = require('express');
const studentsController = require('../controllers/students');

const router = express.Router();

router.get('/', studentsController.getStudents);
router.post('/create', studentsController.postStudent);

module.exports = router;