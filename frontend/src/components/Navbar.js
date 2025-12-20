import '../App.css';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md   ">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

      <button
  className="navbar-toggler navbar-light bg-white shadow-sm"
  type="button"
   data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
>
  <span className="navbar-toggler-icon"></span>
</button>



        {/* MENU */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mx-2">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard">Dashboard</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/BookAppointment">Book Appointment</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/MyAppointment">My Appointment</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Profile">Profile</Link>
            </li>

          </ul>

          {/* RIGHT SIDE AUTH */}
          <ul className="navbar-nav button-group ">
            <li className="nav-item1  navbar-light text-primary rounded bg-white shadow-sm ">
              <Link className="nav-link btn-outline" to="/Login">Login</Link>
            </li>

            <li className="nav-item2  navbar-light bg-white shadow-sm text-primary rounded">
              <Link className="nav-link btn-primary-nav" to="/Signup">Sign Up</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
