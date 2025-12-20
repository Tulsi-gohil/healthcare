import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMyAppointments } from '../services/api';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await getMyAppointments();
      if (res.success) setAppointments(res.appointments || []);
      setLoading(false);
    };
    load();
  }, []);

  const total = appointments.length;
  const upcoming = appointments.filter(a => new Date(a.date) > new Date() && a.status === 'booked').length;
  const completed = appointments.filter(a => a.status === 'completed').length;

  return (
    <section className="container my-5">

      {/* HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold text-primary">Dashboard</h2>
        <p className="text-muted">
          Welcome back! Manage your appointments easily.
        </p>
      </div>

      {/* STATS */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="dashboard-card">
            <h5>Total Appointments</h5>
            <h2>{loading ? '—' : total}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <h5>Upcoming</h5>
            <h2>{loading ? '—' : upcoming}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <h5>Completed</h5>
            <h2>{loading ? '—' : completed}</h2>
          </div>
        </div>
      </div>

      {/* UPCOMING APPOINTMENTS */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h4 className="fw-bold mb-3">Upcoming Appointments</h4>

          <table className="table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.filter(a => new Date(a.date) > new Date()).slice(0,5).map(a => (
                <tr key={a._id}>
                  <td>{a.doctor}</td>
                  <td>{new Date(a.date).toLocaleDateString()}</td>
                  <td>{new Date(a.date).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</td>
                  <td><span className={a.status === 'booked' ? 'badge bg-warning' : a.status === 'completed' ? 'badge bg-success' : 'badge bg-secondary'}>{a.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="action-card">
            <h5>Book New Appointment</h5>
            <p>Schedule a new appointment quickly.</p>
            <Link to="/BookAppointment" className="btn btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="action-card">
            <h5>View My Appointments</h5>
            <p>Check your appointment history.</p>
            <Link to="/MyAppointment" className="btn btn-outline-primary">
              View Appointments
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Dashboard;
