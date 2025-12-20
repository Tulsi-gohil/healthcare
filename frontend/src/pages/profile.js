import "../App.css";
import { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getUserProfile();
      if (res.success) setUser(res.user);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) return <h3 className="text-center mt-5">Loading profile...</h3>;

  return (
    <section className="container my-5">

      {/* PAGE TITLE */}
      <div className="mb-4">
        <h2 className="fw-bold text-primary">My Profile</h2>
        <p className="text-muted">
          View and update your personal information
        </p>
      </div>

      <div className="row g-4">

        {/* LEFT PROFILE CARD */}
        <div className="col-lg-4 col-md-5">
          <div className="profile-card text-center">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="profile-img"
            />
            <h4 className="mt-3 fw-bold">{user?.name}</h4>
            <p className="text-muted">{user?.email}</p>
            <button className="btn btn-outline-primary btn-sm">
              Change Photo
            </button>
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="col-lg-8 col-md-7">
          <div className="card shadow-sm border-0 p-4">

            {/* PERSONAL INFO */}
            <h5 className="fw-bold mb-3">Personal Information</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" value={user?.name || ''} readOnly />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={user?.email || ''} readOnly />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" value={user?.phone || ''} readOnly />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select className="form-select" defaultValue={user?.gender || ''}>
                  <option value="">Select</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* MEDICAL INFO */}
            <h5 className="fw-bold mt-4 mb-3">Medical Information</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Blood Group</label>
                <input type="text" className="form-control" value={user?.bloodGroup || ''} readOnly />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" value={user?.age || ''} readOnly />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Medical History</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Any medical history (optional)"
                  value={user?.medicalHistory || ''}
                  readOnly
                ></textarea>
              </div>
            </div>

            {/* PASSWORD */}
            <h5 className="fw-bold mt-4 mb-3">Security</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>

            {/* SAVE BUTTON */}
            <div className="text-end mt-4">
              <button className="btn btn-primary px-4">
                Save Changes
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Profile;
