const express = require('express');
const layoutController = require('../controllers/layout');

const router = express.Router();

router.get('/', layoutController.getLanding);
router.get('/student-creation-page', layoutController.getCreateStudent)

module.exports = router;