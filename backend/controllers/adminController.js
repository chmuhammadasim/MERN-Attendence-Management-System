const Class = require('../models/Class');
const Attendance = require('../models/Attendance');

exports.assignClass = async (req, res) => {
  const { classId, studentId } = req.body;

  const classData = await Class.findById(classId);
  classData.students.push(studentId);
  try {
    const updatedClass = await classData.save();
    res.send(updatedClass);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.editAttendance = async (req, res) => {
  const { attendanceId, status } = req.body;

  const attendance = await Attendance.findById(attendanceId);
  attendance.status = status;
  try {
    const updatedAttendance = await attendance.save();
    res.send(updatedAttendance);
  } catch (err) {
    res.status(400).send(err);
  }
};
