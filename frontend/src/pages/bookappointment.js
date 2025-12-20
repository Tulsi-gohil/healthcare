import "../App.css";
import { useState } from "react";
import { bookAppointment } from "../services/api";
import { useNavigate } from 'react-router-dom';

function BookAppointment() {
  const [form, setform] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    department: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    visitType: "",
    reasonForVisit: "",
    symptoms: "",
  });
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        patientName: form.fullName,
        doctor: form.doctor,
        date: form.appointmentDate && form.appointmentTime ? `${form.appointmentDate}T${form.appointmentTime}` : form.appointmentDate,
        reason: form.reasonForVisit || form.symptoms,
        metadata: {
          email: form.email,
          phone: form.phone,
          gender: form.gender,
          age: form.age,
          department: form.department,
          visitType: form.visitType
        }
      };

      const response = await bookAppointment(payload);

      if (response.success) {
        alert('Appointment booked ✅');
        navigate('/MyAppointment');
      } else {
        alert('Failed to book appointment ❌: ' + (response.message || 'Unknown'));
      }
    } catch (error) {
      alert('Server error ❌');
    }
  };

  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-11">
          <div className="card shadow-lg p-4 border-0">
            <h2 className="text-center text-primary fw-bold mb-4">
              Book Doctor Appointment
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Patient Details */}
              <h5 className="mb-3">Patient Details</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <select
                    name="gender"
                    className="form-select"
                    value={form.gender}
                    onChange={handleChange}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-md-3 mb-3">
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Age"
                    value={form.age}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Appointment Details */}
              <h5 className="mt-4 mb-3">Appointment Details</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <select
                    name="department"
                    className="form-select"
                    value={form.department}
                    onChange={handleChange}
                  >
                    <option value="">Select Department</option>
                    <option value="General Physician">General Physician</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Orthopedic">Orthopedic</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    name="doctor"
                    className="form-select"
                    value={form.doctor}
                    onChange={handleChange}
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. Aisha Patel">Dr. Aisha Patel</option>
                    <option value="Dr. Rahul Mehta">Dr. Rahul Mehta</option>
                    <option value="Dr. Neha Shah">Dr. Neha Shah</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <input
                    type="date"
                    name="appointmentDate"
                    className="form-control"
                    value={form.appointmentDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <input
                    type="time"
                    name="appointmentTime"
                    className="form-control"
                    value={form.appointmentTime}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <select
                    name="visitType"
                    className="form-select"
                    value={form.visitType}
                    onChange={handleChange}
                  >
                    <option value="">Visit Type</option>
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
              </div>

              {/* Medical Info */}
              <h5 className="mt-4 mb-3">Medical Info</h5>
              <input
                type="text"
                name="reasonForVisit"
                className="form-control mb-3"
                placeholder="Reason for Visit"
                value={form.reasonForVisit}
                onChange={handleChange}
              />

              <textarea
                name="symptoms"
                rows="3"
                className="form-control mb-4"
                placeholder="Symptoms / Notes"
                value={form.symptoms}
                onChange={handleChange}
              />

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5 py-2">
                  Confirm Appointment
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BookAppointment;
