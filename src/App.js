import './App.css';
import Home from './Files/Home';
import NavBar from './Files/NavBar'
import Notifications from './Files/Notifications'
import Events from './Files/Events'
import Login from './Files/Login'
import Support from './Files/Support'
import StudentAttendance from './Files/StudentAttendance'
import Admin from './Files/Admin'
import StudentLogin from './Files/StudentLogin'
import TeacherLogin from './Files/TeacherLogin'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Notifications />
      <Events />
      <Login />
      <StudentLogin />
      <TeacherLogin />
      <StudentAttendance />
      <Admin />
      <Support />
    </>
  );
}

export default App;
