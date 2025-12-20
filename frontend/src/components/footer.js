import '../App.css';
import { Link } from 'react-router-dom';
function footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="text-center p-3">
        © 2024 Doctor Appointment System. All rights reserved.
        <br />
        <Link to="/PrivacyPolicy" className="text-decoration-none mx-2">Privacy Policy</Link> |
        <Link to="/TermsOfService" className="text-decoration-none mx-2">Terms of Service</Link>
      </div>
    </footer>
  );
}
export default footer;