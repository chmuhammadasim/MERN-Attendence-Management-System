import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Attendance from './components/Student/Attendance';
import MarkAttendance from './components/Teacher/MarkAttendance';
import AssignClass from './components/Admin/AssignClass';
import EditAttendance from './components/Admin/EditAttendance';

function App() {
  return (
    <Router>
      <div>
        <h1>Student Portal</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/student/attendance" component={Attendance} />
          <Route path="/teacher/attendance" component={MarkAttendance} />
          <Route path="/admin/assign-class" component={AssignClass} />
          <Route path="/admin/edit-attendance" component={EditAttendance} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
