import { useEffect, useState } from "react";
import "../App.css";
import { getMyAppointments, cancelAppointment } from "../services/api";

function MyAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await getMyAppointments();
        if (!res.success) throw new Error(res.message || 'Failed to fetch');
        setAppointments(res.appointments || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    if (!window.confirm('Cancel appointment?')) return;
    const res = await cancelAppointment(id);
    if (res.success) {
      setAppointments((prev) => prev.map(a => a._id === id ? { ...a, status: 'cancelled' } : a));
    } else {
      alert(res.message || 'Cancel failed');
    }
  };

  if (loading) {
    return <h3 className="text-center mt-5">Loading appointments...</h3>;
  }

  if (error) {
    return <h3 className="text-center text-danger mt-5">{error}</h3>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-center">No appointments found</p>
      ) : (
        <div className="row">
          {appointments.map((item) => (
            <div className="col-md-6 mb-4" key={item._id}>
              <div className="card shadow-sm p-3">
                <h5 className="text-primary">{item.patientName}</h5>
                <p><strong>Doctor:</strong> {item.doctor}</p>
                <p><strong>Date:</strong> {new Date(item.date).toLocaleString()}</p>
                <p><strong>Status:</strong> {item.status}</p>
                <div className="mt-2">
                  {item.status !== 'cancelled' && <button className="btn btn-sm btn-danger" onClick={() => handleCancel(item._id)}>Cancel</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyAppointment;
