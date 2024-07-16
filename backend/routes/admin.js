const router = require('express').Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/assign-class', authMiddleware, adminController.assignClass);
router.put('/attendance', authMiddleware, adminController.editAttendance);

module.exports = router;
