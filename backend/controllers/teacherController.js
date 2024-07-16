const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
  const { studentId, classId, date, status } = req.body;

  const attendance = new Attendance({ student: studentId, class: classId, date, status });
  try {
    const savedAttendance = await attendance.save();
    res.send(savedAttendance);
  } catch (err) {
    res.status(400).send(err);
  }
};
