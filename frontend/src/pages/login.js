import { useState } from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../services/api.js";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    if (res.success) {
      localStorage.setItem('token', res.token);
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert(res.message || 'Login failed');
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <button className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
