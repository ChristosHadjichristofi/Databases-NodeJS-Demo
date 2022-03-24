const express = require('express');
const gradesController = require('../controllers/grades');

const router = express.Router();

router.get('/', gradesController.getGrades);
router.post('/delete/:id', gradesController.postDeleteGrade);

module.exports = router;