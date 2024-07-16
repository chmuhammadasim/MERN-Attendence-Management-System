const router = require('express').Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/attendance/:studentId', authMiddleware, studentController.getAttendance);

module.exports = router;
