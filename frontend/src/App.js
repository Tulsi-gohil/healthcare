import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookAppointment from './pages/bookappointment';
import MyAppointment from './pages/myappointment';
import Footer from './components/footer';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
     <div>
      <Router>
        <Navbar />
     
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/BookAppointment' element={<BookAppointment />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/MyAppointment' element={<MyAppointment />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
           <Footer />
      </Router>
     </div>
  );
}

export default App;
