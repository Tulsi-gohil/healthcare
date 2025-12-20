import "../App.css";
import logo from "../doctor.jfif";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/api.js";
function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert('Passwords do not match');
    setLoading(true);
    const res = await signupUser({ name: form.name, email: form.email, password: form.password });
    setLoading(false);

    if (res.success) {
      localStorage.setItem('token', res.token);
      alert('Signup successful');
      navigate('/dashboard');
    } else {
      alert(res.message || 'Signup failed');
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <img src={logo} alt="Logo" className="signup-logo" />

        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">
          Sign up to book appointments with trusted doctors
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Full Name"
            className="signup-input"
            required
          />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="Email Address"
            className="signup-input"
            required
          />

          <input
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="signup-input"
            required
          />

          <input
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            type="password"
            placeholder="Confirm Password"
            className="signup-input"
            required
          />

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <p className="signup-login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
