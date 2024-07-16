const router = require('express').Router();
const teacherController = require('../controllers/teacherController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/attendance', authMiddleware, teacherController.markAttendance);

module.exports = router;
